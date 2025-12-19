function assert(bool, message) {
  if (!bool) {
    throw new Error(`Assertion failed! ${message || ""}`)
  }
}

import {
  Label,
  Icon,
  Input,
  Block,
  Comment,
  Glow,
  Script,
  Document,
  Matrix,
} from "./model.js"

import {
  allLanguages,
  lookupDropdown,
  hexColorPat,
  minifyHash,
  lookupHash,
  hashSpec,
  applyOverrides,
  rtlLanguages,
  iconPat,
  blockName,
} from "./blocks.js"

function paintBlock(info, children, languages) {
  let overrides = []
  if (Array.isArray(children[children.length - 1])) {
    overrides = children.pop()
  }

  // build hash
  const words = []
  for (const child of children) {
    if (child.isLabel) {
      words.push(child.value)
    } else if (child.isIcon) {
      words.push(`@${child.name}`)
    } else {
      words.push("_")
    }
  }
  const string = words.join(" ")
  const shortHash = (info.hash = minifyHash(string))

  // paint
  let lang
  let type
  if (!overrides.includes("reset")) {
    const o = lookupHash(shortHash, info, children, languages, overrides)
    if (o) {
      lang = o.lang
      type = o.type
      info.language = lang
      info.isRTL = rtlLanguages.includes(lang.code)

      if (
        type.shape === "ring"
          ? info.shape === "reporter"
          : info.shape === "stack"
      ) {
        info.shape = type.shape
      }
      info.category = type.category
      info.categoryIsDefault = true
      // store selector, used for translation among other things
      if (type.selector) {
        info.selector = type.selector
      }
      if (type.id) {
        info.id = type.id
      }
      info.hasLoopArrow = type.hasLoopArrow

      // ellipsis block
      if (type.spec === ". . .") {
        children = [new Label(". . .")]
      }
    } else {
      // The block was not recognised, so we check if it's a define block.
      //
      // We check for built-in blocks first to avoid ambiguity, e.g. the
      // `defina o tamanho como (100) %` block in pt_BR.
      for (const lang of languages) {
        if (!isDefineBlock(children, lang)) {
          continue
        }

        // Setting the shape also triggers some logic in recogniseStuff.
        info.shape = "define-hat"
        info.category = "custom"

        // Move the children of the define block into an "outline", transforming
        // () and [] shapes as we go.
        const outlineChildren = children
          .splice(
            lang.definePrefix.length,
            children.length - lang.defineSuffix.length,
          )
          .map(child => {
            if (child.isInput && child.isBoolean) {
              // Convert empty boolean slot to empty boolean argument.
              child = paintBlock(
                {
                  shape: "boolean",
                  argument: "boolean",
                  category: "custom-arg",
                },
                [new Label("")],
                languages,
              )
            } else if (
              child.isInput &&
              (child.shape === "string" || child.shape === "number")
            ) {
              // Convert string inputs to string arguments, number inputs to number arguments.
              const labels = child.value
                .split(/ +/g)
                .map(word => new Label(word))
              child = paintBlock(
                {
                  shape: "reporter",
                  argument: child.shape === "string" ? "string" : "number",
                  category: "custom-arg",
                },
                labels,
                languages,
              )
            } else if (child.isReporter || child.isBoolean) {
              // Convert variables to number arguments, predicates to boolean arguments.
              if (child.info.categoryIsDefault) {
                child.info.category = "custom-arg"
              }
              child.info.argument = child.isBoolean ? "boolean" : "number"
            }
            return child
          })

        const outlineInfo = {
          shape: "outline",
          category: "custom",
          categoryIsDefault: true,
          hasLoopArrow: false,
        }
        const outline = new Block(outlineInfo, outlineChildren)
        children.splice(lang.definePrefix.length, 0, outline)
        break
      }
    }
  }

  // Apply overrides.
  applyOverrides(info, overrides)

  // dropdowns menus
  children.forEach(child => {
    if (child.hasArrow) {
      child.setMenu(lookupDropdown(child.value, info.id, languages))
    }
  })

  // loop arrows
  if (info.hasLoopArrow) {
    children.push(new Icon("loopArrow"))
  }

  const block = new Block(info, children)

  // image replacement
  if (type && iconPat.test(type.spec)) {
    block.translate(lang, true)
  }

  // diffs
  if (info.diff === "+") {
    return new Glow(block)
  }
  block.diff = info.diff

  return block
}

function isDefineBlock(children, lang) {
  if (children.length < lang.definePrefix.length) {
    return false
  }
  if (children.length < lang.defineSuffix.length) {
    return false
  }

  for (let i = 0; i < lang.definePrefix.length; i++) {
    const defineWord = lang.definePrefix[i]
    const child = children[i]
    if (!child.isLabel || minifyHash(child.value) !== minifyHash(defineWord)) {
      return false
    }
  }

  for (let i = 1; i <= lang.defineSuffix.length; i++) {
    const defineWord = lang.defineSuffix[lang.defineSuffix.length - i]
    const child = children[children.length - i]
    if (!child.isLabel || minifyHash(child.value) !== minifyHash(defineWord)) {
      return false
    }
  }

  return true
}

function parseLines(code, languages) {
  let tok = code[0]
  let index = 0
  function next() {
    tok = code[++index]
  }
  function peek() {
    return code[index + 1]
  }
  function peekNonWs() {
    for (let i = index + 1; i < code.length; i++) {
      if (code[i] !== " ") {
        return code[i]
      }
    }
  }
  let sawNL

  let define = []
  languages.map(lang => {
    define = define.concat(lang.define)
  })

  function makeBlock(shape, children) {
    const hasInputs = children.filter(x => !x.isLabel).length

    const info = {
      shape: shape,
      category: shape === "reporter" && !hasInputs ? "variables" : "obsolete",
      categoryIsDefault: true,
      hasLoopArrow: false,
    }

    return paintBlock(info, children, languages)
  }

  function makeMenu(shape, value) {
    return new Input(shape, value)
  }

  function pParts(end) {
    const children = []
    let label
    while (tok && tok !== "\n") {
      // So that comparison operators `<()<()>` and `<()>()>` don't need the
      // central <> escaped, we interpret it as a label if particular
      // conditions are met.
      if (
        (tok === "<" || tok === ">") &&
        end === ">" && // We're parsing a predicate.
        children.length === 1 && // There's exactly one AST node behind us.
        !children[children.length - 1].isLabel // That node is not a label.
      ) {
        const c = peekNonWs()
        // The next token starts some kind of input.
        if (c === "[" || c === "(" || c === "<" || c === "{") {
          label = null
          children.push(new Label(tok))
          next()
          continue
        }
      }
      if (tok === end) {
        break
      }
      if (tok === "/" && peek() === "/" && !end) {
        break
      }

      switch (tok) {
        case "[":
          label = null
          children.push(pString())
          break
        case "(":
          label = null
          children.push(pReporter())
          break
        case "<":
          label = null
          children.push(pPredicate())
          break
        case "{":
          label = null
          children.push(pEmbedded())
          break
        case " ":
        case "\t":
          next() // Skip over whitespace.
          label = null
          break
        case "◂":
        case "▸":
          children.push(pIcon())
          label = null
          break
        case "@": {
          next()
          let name = ""
          while (tok && /[a-zA-Z]/.test(tok)) {
            name += tok
            next()
          }
          if (name === "cloud") {
            children.push(new Label("☁"))
          } else {
            children.push(
              Object.prototype.hasOwnProperty.call(Icon.icons, name)
                ? new Icon(name)
                : new Label(`@${name}`),
            )
          }
          label = null
          break
        }
        case "\\":
          next() // escape character
        // fallthrough
        case ":":
          if (tok === ":" && peek() === ":") {
            children.push(pOverrides(end))
            return children
          }
        // fallthrough
        default:
          if (!label) {
            children.push((label = new Label("")))
          }
          label.value += tok
          next()
      }
    }
    return children
  }

  function pString() {
    next() // '['
    let s = ""
    let escapeV = false
    while (tok && tok !== "]" && tok !== "\n") {
      if (tok === "\\") {
        next()
        if (tok === "v") {
          escapeV = true
        }
        if (!tok) {
          break
        }
      } else {
        escapeV = false
      }
      s += tok
      next()
    }
    if (tok === "]") {
      next()
    }
    if (hexColorPat.test(s)) {
      return new Input("color", s)
    }
    return !escapeV && / v$/.test(s)
      ? makeMenu("dropdown", s.slice(0, s.length - 2))
      : new Input("string", s)
  }

  function pBlock(end) {
    const children = pParts(end)
    if (tok && tok === "\n") {
      sawNL = true
      next()
    }
    if (children.length === 0) {
      return
    }

    // standalone reporters
    if (children.length === 1) {
      const child = children[0]
      if (
        child.isBlock &&
        (child.isReporter || child.isBoolean || child.isRing)
      ) {
        return child
      }
    }

    return makeBlock("stack", children)
  }

  function pReporter() {
    next() // '('

    // Check if this is a matrix pattern: ({...} v)
    if (tok === "{") {
      const savedIndex = index
      const savedTok = tok

      // Try to parse as matrix
      let braceCount = 1
      let matrixContent = ""
      next() // skip '{'

      while (tok && braceCount > 0) {
        if (tok === "{") {
          braceCount++
        } else if (tok === "}") {
          braceCount--
          if (braceCount === 0) {
            break
          }
        }
        matrixContent += tok
        next()
      }

      // Check if followed by ' v)'
      if (tok === "}" && braceCount === 0) {
        next() // skip '}'

        // Check for whitespace and 'v' and ')'
        let afterBrace = 0
        while (afterBrace < code.length && code[index + afterBrace] === " ") {
          afterBrace++
        }

        if (
          index + afterBrace < code.length &&
          code[index + afterBrace] === "v" &&
          index + afterBrace + 1 < code.length &&
          code[index + afterBrace + 1] === ")"
        ) {
          // This is a matrix! Parse it
          index += afterBrace
          tok = code[index]
          next() // skip 'v'
          next() // skip ')'

          // Parse the matrix content
          const rows = []
          let currentRow = ""

          for (let i = 0; i < matrixContent.length; i++) {
            const c = matrixContent[i]
            if (c === "\n" || c === " " || c === "\t") {
              // Skip whitespace
              continue
            } else if (c === ",") {
              // End of row
              if (currentRow.trim()) {
                // Convert string digits to boolean values
                const booleanRow = currentRow
                  .trim()
                  .split("")
                  .map(ch => ch === "1")
                rows.push(booleanRow)
                currentRow = ""
              }
            } else {
              // Add to current row
              currentRow += c
            }
          }

          // Add last row if any
          if (currentRow.trim()) {
            // Convert string digits to boolean values
            const booleanRow = currentRow
              .trim()
              .split("")
              .map(ch => ch === "1")
            rows.push(booleanRow)
          }

          // Return as a number-dropdown input containing the matrix
          const matrix = new Matrix(rows)
          const input = new Input("number-dropdown", matrix, null)
          return input
        }
      }

      // Reset if not a valid matrix pattern
      index = savedIndex
      tok = savedTok
    }

    // empty number-dropdown
    if (tok === " ") {
      next()
      if (tok === "v" && peek() === ")") {
        next()
        next()
        return new Input("number-dropdown", "")
      }
    }

    const children = pParts(")")
    if (tok && tok === ")") {
      next()
    }

    // empty numbers
    if (children.length === 0) {
      return new Input("number", "")
    }

    // number
    if (children.length === 1 && children[0].isLabel) {
      const value = children[0].value
      if (/^[0-9e.-]*$/.test(value)) {
        return new Input("number", value)
      }
      if (hexColorPat.test(value)) {
        return new Input("color", value)
      }
    }

    // number-dropdown
    if (children.length > 1 && children.every(child => child.isLabel)) {
      const last = children[children.length - 1]
      if (last.value === "v") {
        children.pop()
        const value = children.map(l => l.value).join(" ")
        return makeMenu("number-dropdown", value)
      }
    }

    const block = makeBlock("reporter", children)

    // rings
    if (block.info && block.info.shape === "ring") {
      const first = block.children[0]
      if (
        first &&
        first.isInput &&
        first.shape === "number" &&
        first.value === ""
      ) {
        block.children[0] = new Input("reporter")
      } else if (
        (first && first.isScript && first.isEmpty) ||
        (first && first.isBlock && !first.children.length)
      ) {
        block.children[0] = new Input("stack")
      }
    }

    return block
  }

  function pPredicate() {
    next() // '<'
    const children = pParts(">")
    if (tok && tok === ">") {
      next()
    }
    if (children.length === 0) {
      return new Input("boolean")
    }
    return makeBlock("boolean", children)
  }

  function pEmbedded() {
    next() // '{'

    sawNL = false
    const f = function () {
      while (tok && tok !== "}") {
        const block = pBlock("}")
        if (block) {
          return block
        }
      }
    }
    const scripts = parseScripts(f)
    let blocks = []
    scripts.forEach(script => {
      blocks = blocks.concat(script.blocks)
    })

    if (tok === "}") {
      next()
    }
    if (!sawNL) {
      assert(blocks.length <= 1)
      return blocks.length ? blocks[0] : makeBlock("stack", [])
    }
    return new Script(blocks)
  }

  function pIcon() {
    const c = tok
    next()
    switch (c) {
      case "▸":
        return new Icon("addInput")
      case "◂":
        return new Icon("delInput")
      default:
        return
    }
  }

  function pOverrides(end) {
    next()
    next()
    const overrides = []
    let override = ""
    while (tok && tok !== "\n" && tok !== end) {
      if (tok === " ") {
        if (override) {
          overrides.push(override)
          override = ""
        }
      } else if (tok === "/" && peek() === "/") {
        break
      } else {
        override += tok
      }
      next()
    }
    if (override) {
      overrides.push(override)
    }
    return overrides
  }

  function pComment(end) {
    next()
    next()
    let comment = ""
    while (tok && tok !== "\n" && tok !== end) {
      comment += tok
      next()
    }
    if (tok && tok === "\n") {
      next()
    }
    return new Comment(comment, true)
  }

  function pLine() {
    let diff
    if (tok === "+" || tok === "-") {
      diff = tok
      next()
    }
    const block = pBlock()
    if (tok === "/" && peek() === "/") {
      const comment = pComment()
      comment.hasBlock = block && block.children.length
      if (!comment.hasBlock) {
        return comment
      }
      block.comment = comment
    }
    if (block) {
      block.diff = diff
    }
    return block
  }

  return () => {
    if (!tok) {
      return undefined
    }
    const line = pLine()
    return line || "NL"
  }
}

/* * */

function parseScripts(getLine) {
  let line = getLine()
  function next() {
    line = getLine()
  }

  function pFile() {
    while (line === "NL") {
      next()
    }
    const scripts = []
    while (line) {
      let blocks = []
      while (line && line !== "NL") {
        let b = pLine()
        const isGlow = b.diff === "+"
        if (isGlow) {
          b.diff = null
        }

        if (b.isElse || b.isEnd) {
          b = new Block({ ...b.info, shape: "stack" }, b.children)
        }

        if (isGlow) {
          const last = blocks[blocks.length - 1]
          let children = []
          if (last && last.isGlow) {
            blocks.pop()
            children = last.child.isScript ? last.child.blocks : [last.child]
          }
          children.push(b)
          blocks.push(new Glow(new Script(children)))
        } else if (b.isHat) {
          if (blocks.length) {
            scripts.push(new Script(blocks))
          }
          blocks = [b]
        } else if (b.isFinal) {
          blocks.push(b)
          break
        } else if (b.isCommand) {
          blocks.push(b)
        } else {
          // reporter or predicate
          if (blocks.length) {
            scripts.push(new Script(blocks))
          }
          scripts.push(new Script([b]))
          blocks = []
          break
        }
      }
      if (blocks.length) {
        scripts.push(new Script(blocks))
      }
      while (line === "NL") {
        next()
      }
    }
    return scripts
  }

  function pLine() {
    const b = line
    next()

    if (b.hasScript) {
      while (true) {
        const blocks = pMouth()
        b.children.push(new Script(blocks))
        if (line && line.isElse) {
          for (const child of line.children) {
            b.children.push(child)
          }
          next()
          continue
        }
        if (line && line.isEnd) {
          next()
        }
        break
      }
    }
    return b
  }

  function pMouth() {
    const blocks = []
    while (line) {
      if (line === "NL") {
        next()
        continue
      }
      if (!line.isCommand) {
        return blocks
      }

      const b = pLine()
      const isGlow = b.diff === "+"
      if (isGlow) {
        b.diff = null
      }

      if (isGlow) {
        const last = blocks[blocks.length - 1]
        let children = []
        if (last && last.isGlow) {
          blocks.pop()
          children = last.child.isScript ? last.child.blocks : [last.child]
        }
        children.push(b)
        blocks.push(new Glow(new Script(children)))
      } else {
        blocks.push(b)
      }
    }
    return blocks
  }

  return pFile()
}

/* * */

function eachBlock(x, cb) {
  if (x.isScript) {
    x.blocks = x.blocks.map(block => {
      eachBlock(block, cb)
      return cb(block) || block
    })
  } else if (x.isBlock) {
    x.children = x.children.map(child => {
      eachBlock(child, cb)
      return cb(child) || child
    })
  } else if (x.isGlow) {
    eachBlock(x.child, cb)
  }
}

const listBlocks = {
  "append:toList:": 1,
  "deleteLine:ofList:": 1,
  "insert:at:ofList:": 2,
  "setLine:ofList:to:": 1,
  "showList:": 0,
  "hideList:": 0,
}

function recogniseStuff(scripts) {
  const customBlocksByHash = Object.create(null)
  const listNames = new Set()

  scripts.forEach(script => {
    const customArgs = new Set()

    eachBlock(script, block => {
      if (!block.isBlock) {
        return
      }

      // custom blocks
      if (block.info.shape === "define-hat") {
        // There should be exactly one `outline` child, added in paintBlock.
        const outline = block.children.find(child => child.isOutline)
        if (!outline) {
          return
        }

        const names = []
        const parts = []
        for (const child of outline.children) {
          if (child.isLabel) {
            parts.push(child.value)
          } else if (child.isBlock) {
            if (!child.info.argument) {
              return
            }
            parts.push(
              {
                number: "%n",
                string: "%s",
                boolean: "%b",
              }[child.info.argument],
            )

            const name = blockName(child)
            names.push(name)
            customArgs.add(name)
          }
        }
        const spec = parts.join(" ")
        const hash = hashSpec(spec)

        const info = {
          spec: spec,
          names: names,
        }
        if (!customBlocksByHash[hash]) {
          customBlocksByHash[hash] = info
        }
        block.info.id = "PROCEDURES_DEFINITION"
        block.info.selector = "procDef"
        block.info.call = info.spec
        block.info.names = info.names
        block.info.category = "custom"

        // custom arguments
      } else if (
        block.info.categoryIsDefault &&
        (block.isReporter || block.isBoolean)
      ) {
        const name = blockName(block)
        if (customArgs.has(name)) {
          block.info.category = "custom-arg"
          block.info.categoryIsDefault = false
          block.info.selector = "getParam"
        }

        // list names
      } else if (
        Object.prototype.hasOwnProperty.call(listBlocks, block.info.selector)
      ) {
        const argIndex = listBlocks[block.info.selector]
        const inputs = block.children.filter(child => !child.isLabel)
        const input = inputs[argIndex]
        if (input && input.isInput) {
          listNames.add(input.value)
        }
      }
    })
  })

  scripts.forEach(script => {
    eachBlock(script, block => {
      if (
        block.info &&
        // Recognise custom calls even if user applied :: custom override.
        // Accept either default 'obsolete' category or explicit 'custom' with no selector set.
        ((block.info.categoryIsDefault && block.info.category === "obsolete") ||
          (block.info.category === "custom" && !block.info.selector))
      ) {
        // custom blocks
        const info = customBlocksByHash[block.info.hash]
        if (info) {
          block.info.id = "PROCEDURES_CALL"
          block.info.selector = "call"
          block.info.call = info.spec
          block.info.names = info.names
          block.info.category = "custom"
        }
        return
      }

      let name, info
      if (
        block.isReporter &&
        block.info.category === "variables" &&
        block.info.categoryIsDefault
      ) {
        // We set the selector here for some reason
        block.info.selector = "readVariable"
        name = blockName(block)
        info = block.info
      }
      if (!name) {
        return
      }

      // list reporters
      if (listNames.has(name)) {
        info.category = "list"
        info.categoryIsDefault = false
        info.selector = "contentsOfList:"
      }

      return // already done
    })
  })
}

/**
 * Assign block paths and build the block map for a document.
 * Path format: {scriptIndex}.{blockIndex}[.{childIndex}]*
 * Example: 1.2.1 = Script 1, Block 2, Child Block 1
 */
function assignBlockPaths(doc) {
  function processBlock(block, basePath, blockMap) {
    if (!block || !block.isBlock) return

    block.blockPath = basePath
    blockMap.set(basePath, block)

    // Process nested blocks in children
    let childBlockIndex = 0
    for (const child of block.children) {
      if (child.isBlock) {
        childBlockIndex++
        processBlock(child, `${basePath}.${childBlockIndex}`, blockMap)
      } else if (child.isScript) {
        // Handle C-block mouths (if/else/repeat bodies)
        childBlockIndex++
        let innerBlockIndex = 0
        for (const innerBlock of child.blocks) {
          innerBlockIndex++
          if (innerBlock.isBlock) {
            processBlock(
              innerBlock,
              `${basePath}.${childBlockIndex}.${innerBlockIndex}`,
              blockMap,
            )
          } else if (innerBlock.isGlow) {
            processGlow(
              innerBlock,
              `${basePath}.${childBlockIndex}.${innerBlockIndex}`,
              blockMap,
            )
          }
        }
      } else if (child.isGlow) {
        childBlockIndex++
        processGlow(child, `${basePath}.${childBlockIndex}`, blockMap)
      }
    }
  }

  function processGlow(glow, basePath, blockMap) {
    if (!glow || !glow.isGlow) return

    const child = glow.child
    if (child.isBlock) {
      processBlock(child, basePath, blockMap)
    } else if (child.isScript) {
      let innerBlockIndex = 0
      for (const innerBlock of child.blocks) {
        innerBlockIndex++
        if (innerBlock.isBlock) {
          processBlock(innerBlock, `${basePath}.${innerBlockIndex}`, blockMap)
        } else if (innerBlock.isGlow) {
          processGlow(innerBlock, `${basePath}.${innerBlockIndex}`, blockMap)
        }
      }
    }
  }

  doc.scripts.forEach((script, scriptIdx) => {
    script.scriptIndex = scriptIdx + 1
    let blockIndex = 0

    for (const block of script.blocks) {
      blockIndex++
      const basePath = `${scriptIdx + 1}.${blockIndex}`

      if (block.isBlock) {
        processBlock(block, basePath, doc.blockMap)
      } else if (block.isGlow) {
        processGlow(block, basePath, doc.blockMap)
      }
    }
  })
}

/**
 * Assign source ranges to blocks based on precise character positions.
 * This version tracks exact column positions for nested blocks to enable
 * precise cursor-based highlighting.
 */
function assignSourceRanges(doc, code) {
  const lines = code.split("\n")

  /**
   * Find all bracket ranges in a line, sorted by start position.
   * Returns an array of {start, end, type, depth} objects.
   */
  function findAllBracketRanges(lineContent) {
    const ranges = []
    const stack = []

    for (let i = 0; i < lineContent.length; i++) {
      const ch = lineContent[i]
      // Handle escape character
      if (ch === "\\") {
        i++ // Skip next character
        continue
      }

      if (ch === "(" || ch === "<" || ch === "[" || ch === "{") {
        stack.push({ char: ch, pos: i, depth: stack.length })
      } else if (ch === ")" || ch === ">" || ch === "]" || ch === "}") {
        const matching = { "(": ")", "<": ">", "[": "]", "{": "}" }
        // Find matching opener
        for (let j = stack.length - 1; j >= 0; j--) {
          if (matching[stack[j].char] === ch) {
            const opener = stack.splice(j, 1)[0]
            ranges.push({
              start: opener.pos,
              end: i,
              type: opener.char,
              depth: opener.depth,
            })
            break
          }
        }
      }
    }
    // Sort by start position
    ranges.sort((a, b) => a.start - b.start)
    return ranges
  }

  /**
   * Find the bracket range that starts at the given position.
   */
  function findBracketAt(ranges, pos) {
    return ranges.find(r => r.start === pos)
  }

  function skipEmptyLines(lineNum) {
    while (
      lineNum <= lines.length &&
      (lines[lineNum - 1] || "").trim() === ""
    ) {
      lineNum++
    }
    return lineNum
  }

  /**
   * Recursively assign source ranges to a block and its nested children on a single line.
   * @param {Block} block - The block to process
   * @param {string} lineContent - The content of the current line
   * @param {number} lineNum - The 1-based line number
   * @param {number} startCol - The 0-based starting column of the block
   * @param {number} endCol - The 0-based ending column of the block (exclusive)
   * @param {Array} bracketRanges - Pre-computed bracket ranges for the line
   */
  function assignBlockRangeRecursive(
    block,
    lineContent,
    lineNum,
    startCol,
    endCol,
    bracketRanges,
  ) {
    const actualBlock = block.isGlow ? block.child : block
    if (!actualBlock.isBlock) return

    actualBlock.sourceRange = {
      start: { line: lineNum, column: startCol },
      end: { line: lineNum, column: endCol },
    }

    // Iterate children in source order, skipping inputs so block children align
    const inlineChildren = actualBlock.children.filter(c => !c.isScript)

    // For each child (inputs and blocks), walk bracket pairs left-to-right.
    // This ensures that a lone block child after an input (e.g., (180)) maps to the
    // next bracketed segment (e.g., (direction)) rather than the first one.
    // searchStart is 0-based index into lineContent
    let searchStart = startCol // 0-based position
    // searchEnd is also 0-based, the last index to search (inclusive)
    const searchEnd = endCol - 1

    for (const child of inlineChildren) {
      if (child.isOutline) {
        // Outline blocks (define hat prototypes) need special handling
        const substringStart = startCol
        const defineMatch = lineContent
          .substring(substringStart)
          .match(/^define\s+/i)
        if (defineMatch) {
          const outlineStart = substringStart + defineMatch[0].length // 0-based
          const outlineEnd = endCol // extends to end of block
          child.sourceRange = {
            start: { line: lineNum, column: outlineStart },
            end: { line: lineNum, column: outlineEnd },
          }
          // Process nested blocks within the outline
          assignBlockRangeRecursive(
            child,
            lineContent,
            lineNum,
            outlineStart,
            outlineEnd,
            bracketRanges,
          )
        }
        continue
      }

      // For labels (plain text), nothing to do here
      if (child.isLabel) {
        continue
      }

      // Find the next bracketed segment within our search window
      let found = false
      for (let i = searchStart; i <= searchEnd && !found; i++) {
        const ch = lineContent[i]
        if (ch === "(" || ch === "<" || ch === "{" || ch === "[") {
          const range = findBracketAt(bracketRanges, i)
          if (range && range.end <= searchEnd) {
            const absStart = i + 1 // content start (skip opening bracket)
            const absEnd = range.end // content end (position of closing bracket)

            // If this child is a nested block, recurse to assign its own children.
            if (child.isBlock) {
              assignBlockRangeRecursive(
                child,
                lineContent,
                lineNum,
                absStart,
                absEnd,
                bracketRanges,
              )
            } else {
              // For inputs, just advance the cursor past this bracketed segment
              child.sourceRange = {
                start: { line: lineNum, column: absStart },
                end: { line: lineNum, column: absEnd },
              }
            }

            searchStart = range.end + 1
            found = true
          }
        }
      }
    }
  }

  /**
   * Check if a block contains a multi-line matrix and return the number of lines it spans.
   * Matrix format: ({digits,\n  digits,\n  digits} v)
   */
  function countMatrixLines(block, startLineNum) {
    const actualBlock = block.isGlow ? block.child : block
    if (!actualBlock.isBlock) return 1

    // Check if any child input contains a matrix
    for (const child of actualBlock.children) {
      if (
        child.isInput &&
        child.value &&
        typeof child.value === "object" &&
        child.value.isMatrix
      ) {
        // Found a matrix input. Check if it spans multiple lines.
        // Look for the pattern ({...} v) across multiple lines
        let lineNum = startLineNum
        let foundStart = false
        let braceDepth = 0

        // Scan forward to find the matrix closing
        while (lineNum <= lines.length) {
          const line = lines[lineNum - 1] || ""

          for (let i = 0; i < line.length; i++) {
            const ch = line[i]
            if (ch === "\\") {
              i++ // skip escaped char
              continue
            }
            if (ch === "{") {
              braceDepth++
              foundStart = true
            } else if (ch === "}") {
              braceDepth--
              if (foundStart && braceDepth === 0) {
                // Found the closing brace, check if followed by ' v)'
                const remaining = line.slice(i)
                if (remaining.match(/^\}\s*v\s*\)/)) {
                  // Matrix ends on this line
                  return lineNum - startLineNum + 1
                }
              }
            }
          }
          lineNum++
        }
      }
    }
    return 1
  }

  /**
   * Process a block and its C-block children recursively, tracking line numbers correctly.
   * @param {Block} block - The block to process
   * @param {number} lineNum - The 1-based line number of this block
   * @returns {number} - The next line number after this block and all its children
   */
  function processBlockWithChildren(block, lineNum) {
    // Glow wrappers can contain a Script with the actual blocks; unwrap them so
    // nested blocks still receive source ranges and cursor mapping works.
    if (block.isGlow && block.child && block.child.isScript) {
      let nextLine = lineNum
      for (const innerBlock of block.child.blocks) {
        nextLine = processBlockWithChildren(innerBlock, nextLine)
      }
      return nextLine
    }

    const actualBlock = block.isGlow ? block.child : block
    if (!actualBlock.isBlock) return lineNum

    const lineContent = lines[lineNum - 1] || ""
    const bracketRanges = findAllBracketRanges(lineContent)
    const trimmedStart = lineContent.search(/\S/)
    const start = trimmedStart >= 0 ? trimmedStart : 0

      

    // Assign range for this block's first line (will be updated for multi-line blocks)
    assignBlockRangeRecursive(
      actualBlock,
      lineContent,
      lineNum,
      start,
      lineContent.length,
      bracketRanges,
    )

      

    let nextLine = lineNum + 1

    // Check if this block contains a multi-line matrix
    const matrixLines = countMatrixLines(actualBlock, lineNum)
    if (matrixLines > 1) {
      // Matrix spans multiple lines - update sourceRange to cover all lines
      const endLineNum = lineNum + matrixLines - 1
      const endLineContent = lines[endLineNum - 1] || ""
      actualBlock.sourceRange = {
        start: { line: lineNum, column: start },
        end: { line: endLineNum, column: endLineContent.length },
      }
      return lineNum + matrixLines
    }

    // Check if this block has any Script children (C-blocks or stack inputs like {})
    const scriptChildren = actualBlock.children.filter(child => child.isScript)
    const hasScriptChildren = scriptChildren.length > 0

    // Check if there are inline {} (same line, content between { and })
    // Inline {} means the whole {content} is on the same line as the block
    const hasInlineBraces =
      lineContent.includes("{") && lineContent.includes("}")
    const allScriptsEmpty = scriptChildren.every(s => s.blocks.length === 0)

    // Determine if scripts span multiple lines
    // If the block's first line has both { and } and all scripts are empty or have inline content,
    // then it's a single-line block
    const isInlineOnly =
      hasInlineBraces &&
      !actualBlock.hasScript &&
      (allScriptsEmpty ||
        scriptChildren.every(
          s =>
            s.blocks.length === 1 &&
            s.blocks[0].children.every(c => c.isLabel || c.isInput),
        ))

    // For truly inline {} like "test {test}", don't change line numbers
    if (isInlineOnly && scriptChildren.length > 0) {
      // Just process inline, no line changes needed
      // Range is already set to single line
      return nextLine
    }

    // Handle blocks with Script children (C-blocks with hasScript, or blocks with {} inputs)
    if (actualBlock.hasScript || hasScriptChildren) {
      // Count script children to detect else branch robustly
      const scriptChildren = actualBlock.children.filter(child => child.isScript)
      const scriptChildCount = scriptChildren.length
      let sawElse = false // legacy path when label order matches
      let scriptIndex = 0

        // Debug
        if (lineNum >= 19 && lineNum <= 22) {
          
        }

      for (const child of actualBlock.children) {
        if (child.isScript) {
          // Account for the else line. If there are two scripts, we have an else branch.
          if ((scriptIndex > 0 && scriptChildCount > 1) || sawElse) {
            nextLine++ // The "else" line
            sawElse = false
          }

          // Skip any blank lines before the script content
          nextLine = skipEmptyLines(nextLine)

          // For multiple {} scripts (not C-blocks):
          // After the first script, there's a line like "} label {" before next script content
          // So between scripts, the "} label {" line is shared
          if (scriptIndex > 0 && !actualBlock.hasScript) {
            // The previous script's content ended, then we have "} label {" on nextLine-1
            // The next script's content starts on nextLine
            // But wait - the "} label {" is ONE line, so we don't need to add extra
          }

          // Process each block in the script
          for (const innerBlock of child.blocks) {
            // Skip blank lines between blocks inside the script
            nextLine = skipEmptyLines(nextLine)
            nextLine = processBlockWithChildren(innerBlock, nextLine)
          }

          // Skip blank lines between script content and closing markers / next script
          nextLine = skipEmptyLines(nextLine)

          // After processing this script's blocks, if there's another script coming,
          // we need to account for the "} label {" line (which is ONE line containing both } and {)
          // So we add 1 for the closing } (which also contains the opening { of next script)
          if (
            scriptIndex < scriptChildren.length - 1 &&
            !actualBlock.hasScript
          ) {
            nextLine++ // "} label {" line
          }

          scriptIndex++
        } else if (child.isLabel && child.value.toLowerCase() === "else") {
          // Mark that we saw "else", will add line when we process the next Script
          sawElse = true
        }
      }

      // Skip any trailing blank lines before the closing line (end or })
      nextLine = skipEmptyLines(nextLine)

      // For C-blocks (hasScript), account for the "end" line
      // For multiline stack inputs ({}), account for the closing "}" line
      const endLineNum = nextLine
      if (actualBlock.hasScript) {
        nextLine++ // "end" line for C-blocks
      } else if (hasScriptChildren) {
        nextLine++ // final "}" line for stack inputs
      }

      // Update block's sourceRange to span from first line to end line
      // This ensures else, end, and } lines are included in the block's range
      const endLineContent = lines[endLineNum - 1] || ""
      actualBlock.sourceRange = {
        start: { line: lineNum, column: start },
        end: { line: endLineNum, column: endLineContent.length },
      }
    }

    return nextLine
  }

  /**
   * Process a script, handling all blocks and their children.
   */
  function processScript(script, startLine) {
    let currentLine = startLine

    for (const block of script.blocks) {
      currentLine = processBlockWithChildren(block, currentLine)
    }

    return currentLine
  }

  // Process all scripts
  let currentLine = 1
  for (const script of doc.scripts) {
    // Skip empty lines before the script
    while (
      currentLine <= lines.length &&
      lines[currentLine - 1].trim() === ""
    ) {
      currentLine++
    }

    currentLine = processScript(script, currentLine)

    // Skip empty lines between scripts
    while (
      currentLine <= lines.length &&
      lines[currentLine - 1]?.trim() === ""
    ) {
      currentLine++
    }
  }
}

export function parse(code, options) {
  options = {
    inline: false,
    languages: ["en"],
    ...options,
  }

  if (options.dialect) {
    throw new Error("Option 'dialect' no longer supported")
  }

  code = code.replace(/&lt;/g, "<")
  code = code.replace(/&gt;/g, ">")
  if (options.inline) {
    code = code.replace(/\n/g, " ")
  }

  const languages = options.languages.map(code => {
    const lang = allLanguages[code]
    if (!lang) {
      throw new Error(`Unknown language: '${code}'`)
    }
    return lang
  })

  /* * */

  const f = parseLines(code, languages)
  const scripts = parseScripts(f)
  recogniseStuff(scripts)

  const doc = new Document(scripts)

  // Assign block paths and source ranges for highlighting support
  assignBlockPaths(doc)
  assignSourceRanges(doc, code)

  return doc
}
