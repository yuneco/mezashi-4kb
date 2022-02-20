// コード圧縮用のキーワード定義
// 利用頻度が高い文字列やメソッド名を定数にする
export const PX = 'px'
export const STYLE = 'style'
export const FILTER = 'filter'
export const FOREACH = 'forEach'
export const INNERHTML = 'innerHTML'
export const STROKE = 'stroke'

// コード圧縮用のショートカット
// 利用頻度の高いプロパティや関数へのエイリアス
export const doc = document
export const body = doc.body
export const createElement = (k: string) => doc.createElement(k)
export const appendChild = (el: HTMLElement) => body.appendChild(el)
export const random = (max = 1) => Math.random() * max
export const timeout = setTimeout
export const handleClick = (el: HTMLElement, func:() => void) => {
  el.addEventListener('pointerdown', e => {
    e.cancelBubble = true
    //e.preventDefault()
    func()
  })
}

// 利用頻度の高い定数
export const COLOR_666 = '#666'
export const COLOR_FFF = '#fff'
export const COLOR_TRANSPARENT = '#0000'
export const N100 = 100
