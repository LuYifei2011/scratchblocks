/*
 * scratchblocks
 * http://scratchblocks.github.io/
 *
 * Copyright 2013-2016, Tim Radvan
 * @license MIT
 * http://opensource.org/licenses/MIT
 */
import {
  parse,
  allLanguages,
  loadLanguages,
  Label,
  Icon,
  Input,
  Block,
  Comment,
  Script,
  Document,
} from "./syntax/index.js"
import * as scratch2 from "./scratch2/index.js"
import * as scratch3 from "./scratch3/index.js"

export default function (window) {
  const document = window.document

  scratch2.init(window)
  scratch3.init(window)

  function appendStyles() {
    document.head.appendChild(scratch2.makeStyle())
    document.head.appendChild(scratch3.makeStyle())
  }

  function newView(doc, options) {
    options = {
      style: "scratch2",
      ...options,
    }

    options.scale = options.scale || 1

    if (options.style === "scratch2") {
      return scratch2.newView(doc, options)
    } else if (/^scratch3($|-)/.test(options.style)) {
      return scratch3.newView(doc, options)
    }

    throw new Error(`Unknown style: ${options.style}`)
  }

  function render(doc, options) {
    if (typeof options === "function") {
      throw new Error("render() no longer takes a callback")
    }
    const view = newView(doc, options)
    const svg = view.render()
    // Used in high contrast theme
    svg.classList.add(`scratchblocks-style-${options.style}`)
    return svg
  }

  /*****************************************************************************/

  /*** Highlight API ***/

  /**
   * Highlight a block by its path
   * @param {DocumentView} view - The rendered view from newView()
   * @param {string} path - Block path (e.g., "S1.2.1")
   * @param {Object} options - { blink: boolean } - If blink is true, the block will flash 3 times
   * @returns {boolean} - Whether the block was found and highlighted
   */
  function highlightBlock(view, path, options = {}) {
    if (view && typeof view.highlightBlock === "function") {
      return view.highlightBlock(path, options)
    }
    return false
  }

  /**
   * Clear highlight from a block or all blocks
   * @param {DocumentView} view - The rendered view from newView()
   * @param {string|null} path - Block path to clear, or null to clear all highlights
   */
  function clearHighlight(view, path = null) {
    if (view && typeof view.clearHighlight === "function") {
      view.clearHighlight(path)
    }
  }

  /**
   * Get a block by its path from the parsed document
   * @param {Document} doc - The parsed document from parse()
   * @param {string} path - Block path (e.g., "S1.2.1")
   * @returns {Block|null}
   */
  function getBlockByPath(doc, path) {
    if (doc && typeof doc.getBlockByPath === "function") {
      return doc.getBlockByPath(path)
    }
    return null
  }

  /**
   * Get the SVG element for a block by its path
   * @param {DocumentView} view - The rendered view from newView()
   * @param {string} path - Block path (e.g., "S1.2.1")
   * @returns {SVGElement|null}
   */
  function getElementByPath(view, path) {
    if (view && typeof view.getElementByPath === "function") {
      return view.getElementByPath(path)
    }
    return null
  }

  /*****************************************************************************/

  /*** Render ***/

  // read code from a DOM element
  function readCode(el, options) {
    options = {
      inline: false,
      ...options,
    }

    const html = el.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi, "\n")
    const pre = document.createElement("pre")
    pre.innerHTML = html
    let code = pre.textContent
    if (options.inline) {
      code = code.replace("\n", "")
    }
    return code
  }

  // insert 'svg' into 'el', with appropriate wrapper elements
  function replace(el, svg, doc, options) {
    let container
    if (options.inline) {
      container = document.createElement("span")
      let cls = "scratchblocks scratchblocks-inline"
      if (doc.scripts[0] && !doc.scripts[0].isEmpty) {
        cls += ` scratchblocks-inline-${doc.scripts[0].blocks[0].shape}`
      }
      container.className = cls
      container.style.display = "inline-block"
      container.style.verticalAlign = "middle"
    } else {
      container = document.createElement("div")
      container.className = "scratchblocks"
    }
    container.appendChild(svg)

    el.innerHTML = ""
    el.appendChild(container)
  }

  /* Render all matching elements in page to shiny scratch blocks.
   * Accepts a CSS selector as an argument.
   *
   *  scratchblocks.renderMatching("pre.blocks");
   *
   * Like the old 'scratchblocks2.parse().
   */
  const renderMatching = function (selector, options) {
    selector = selector || "pre.blocks"
    options = {
      // Default values for the options
      style: "scratch2",
      inline: false,
      languages: ["en"],
      scale: 1,

      read: readCode, // function(el, options) => code
      parse: parse, // function(code, options) => doc
      render: render, // function(doc) => svg
      replace: replace, // function(el, svg, doc, options)

      ...options,
    }

    // find elements
    const results = [].slice.apply(document.querySelectorAll(selector))
    results.forEach(el => {
      const code = options.read(el, options)

      const doc = options.parse(code, options)

      const svg = options.render(doc, options)

      options.replace(el, svg, doc, options)
    })
  }

  return {
    allLanguages: allLanguages, // read-only
    loadLanguages: loadLanguages,

    stringify: function (doc) {
      return doc.stringify()
    },

    Label,
    Icon,
    Input,
    Block,
    Comment,
    Script,
    Document,

    newView: newView,
    read: readCode,
    parse: parse,
    replace: replace,
    render: render,
    renderMatching: renderMatching,

    appendStyles: appendStyles,

    // Highlight API
    highlightBlock: highlightBlock,
    clearHighlight: clearHighlight,
    getBlockByPath: getBlockByPath,
    getElementByPath: getElementByPath,
  }
}
