/**
 * A label/text element in a block
 */
export class Label {
  constructor(value: string, cls?: string)
  value: string
  cls: string
  el: SVGElement | null
  height: number
  metrics: any | null
  x: number
  readonly isLabel: true
  stringify(): string
}

/**
 * An icon in a block (e.g., greenFlag, stopSign)
 */
export class Icon {
  constructor(name: string)
  name: string
  isArrow: boolean
  readonly isIcon: true
  static icons: Record<string, boolean>
  stringify(): string
}

/**
 * An input element in a block (text input, dropdown, etc.)
 */
export class Input {
  constructor(shape: string, value: any)
  shape: string
  value: any
  menu?: any
  label: Label | null
  x: number
  readonly isInput: true
  isRound: boolean
  isBoolean: boolean
  isStack: boolean
  isInset: boolean
  isColor: boolean
  isMatrix: boolean
  hasArrow: boolean
  isDarker: boolean
  isSquare: boolean
  hasLabel: boolean
  setMenu(value: any): void
  stringify(parentPrefix?: string): string
  translate(lang: any): void
}

/**
 * A matrix element in a block
 */
export class Matrix {
  constructor(rows: boolean[][])
  rows: boolean[][]
  readonly isMatrix: true
  stringify(): string
  translate(): void
}

/**
 * A block definition
 */
export class Block {
  constructor(info: any, children: any[], comment?: Comment | null)
  info: any
  children: any[]
  comment: Comment | null
  diff: any | null
  blockPath: string | null
  sourceRange: any | null
  readonly isBlock: true
  isHat: boolean
  hasPuzzle: boolean
  isFinal: boolean
  isCommand: boolean
  isOutline: boolean
  isReporter: boolean
  isBoolean: boolean
  isRing: boolean
  hasScript: boolean
  isElse: boolean
  isEnd: boolean
  stringify(extras?: any): string
  translate(lang: any): void
}

/**
 * A comment element
 */
export class Comment {
  constructor(text: string)
  text: string
  readonly isComment: true
  stringify(): string
  translate(): void
}

/**
 * A script (sequence of blocks)
 */
export class Script {
  constructor(blocks: Block[])
  blocks: Block[]
  isEmpty: boolean
  readonly isScript: true
  stringify(): string
  translate(lang: any): void
}

/**
 * A parsed document containing scripts
 */
export class Document {
  constructor(scripts: Script[])
  scripts: Script[]
  getBlockByPath(path: string): Block | null
  getBlockAtCursor(line: number, column: number): Block | null
  stringify(): string
  translate(lang: any): void
}

/**
 * A view of a rendered document
 */
export interface DocumentView {
  render(): SVGElement
  highlightBlock(path: string, options?: { blink?: boolean }): boolean
  highlightBlockAtCursor(line: number, column: number, options?: { blink?: boolean }): string | null
  clearHighlight(path?: string | null): void
  getElementByPath(path: string): SVGElement | null
}

/**
 * Options for rendering
 */
export interface RenderOptions {
  style?: "scratch2" | "scratch3" | string
  inline?: boolean
  languages?: string[]
  scale?: number
  read?: (el: HTMLElement, options: RenderOptions) => string
  parse?: (code: string, options: RenderOptions) => Document
  render?: (doc: Document, options: RenderOptions) => SVGElement
  replace?: (el: HTMLElement, svg: SVGElement, doc: Document, options: RenderOptions) => void
}

/**
 * Main scratchblocks API returned by the default export function
 */
export interface ScratchblocksAPI {
  // Languages
  readonly allLanguages: string[]
  loadLanguages(languages: string[]): Promise<void>

  // Parsing and rendering
  parse(code: string, options?: RenderOptions): Document
  stringify(doc: Document): string
  newView(doc: Document, options?: RenderOptions): DocumentView
  render(doc: Document, options?: RenderOptions): SVGElement
  renderMatching(selector: string, options?: RenderOptions): void

  // Reading and replacing
  read(el: HTMLElement, options?: { inline?: boolean }): string
  replace(el: HTMLElement, svg: SVGElement, doc: Document, options?: RenderOptions): void

  // Styles
  appendStyles(): void

  // Classes
  Label: typeof Label
  Icon: typeof Icon
  Input: typeof Input
  Block: typeof Block
  Comment: typeof Comment
  Script: typeof Script
  Document: typeof Document

  // Highlight API
  highlightBlock(view: DocumentView, path: string, options?: { blink?: boolean }): boolean
  highlightBlockAtCursor(view: DocumentView, line: number, column: number, options?: { blink?: boolean }): string | null
  clearHighlight(view: DocumentView, path?: string | null): void
  getBlockByPath(doc: Document, path: string): Block | null
  getBlockAtCursor(doc: Document, line: number, column: number): Block | null
  getElementByPath(view: DocumentView, path: string): SVGElement | null
}

/**
 * Initializes scratchblocks with a window object
 * @param window The browser window object
 * @returns The scratchblocks API
 */
declare function scratchblocks(window: Window): ScratchblocksAPI

export default scratchblocks
