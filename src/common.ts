// コード圧縮用のキーワード定義
export const PX = 'px'
export const STYLE = 'style'
export const FILTER = 'filter'
export const FOREACH = 'forEach'
export const POSITION = 'position'
export const ADD_EVENT_LISTENER = 'addEventListener'
export const BACKGROUND = 'background'
export const INNERHTML = 'innerHTML'
export const STROKE = 'stroke'

// コード圧縮用のショートカット
export const doc = document
export const body = doc.body
export const MATH = Math
export const createElement = (k: string) => doc.createElement(k)
export const appendChild = (el: HTMLElement) => body.appendChild(el)
export const random = (max = 1) => MATH.random() * max
export const timeout = setTimeout

export const COLOR_666 = '#666'
export const COLOR_FFF = '#fff'
export const COLOR_TRANSPARENT = '#0000'

export const N100 = 100
