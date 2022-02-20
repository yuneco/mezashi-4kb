//import './createSvg'
import {
  createElement,
  STYLE,
  PX,
  appendChild,
  FILTER,
  FOREACH,
  body,
  random,
  timeout,
  COLOR_FFF,
  COLOR_666,
  COLOR_TRANSPARENT,
  INNERHTML,
  N100,
  handleClick
} from './common'
import { catSvg, mzsSvg, tamaSvg } from './graphics'
import { playNotes } from './sound'

/** 全てのキャラクター（ステージ上の要素）の型 */
type Chara = {
  e: HTMLElement
  x: number
  y: number
  w: number
  h: number
  /** Y速度 */
  v: number
  /** Y加速度 */
  a: number
  /** X速度 */
  m?: number
}

// ゲーム設定
/** ステージ幅 */
const STAGE_WIDTH = 600
/** ステージ高 */
const STAGE_HEIGHT = STAGE_WIDTH
/** キーフレームの間隔 */
const KEY_FRAME_INTERVAL = 20
/** 重力 */
const GRAVITY = -1
/** 猫出現率の増加量 cat/frame  */
const CAT_APPEAR_RATE_INCREASE = 0.003
/** 猫ジャンプ率 cat/frame  */
const CAT_JUMP_RATE = 0.01
/** 得点ごとに猫がスピードアップする量 */
const CAT_SPEED_UP = 0.04
/** 飛ぶ猫の出現率 */
const CAT_FLY_RATE = 0.2

// 画面要素
let mainButton: HTMLElement
let stateText: HTMLElement
let titleText: HTMLElement

// 描画状態
let lastTick = 0
let frameDelay = 1
let frameCount = 0
let lastKeyFrame = -1

// ゲーム状態
let isPlaying = false
let score = 0
let catAppearRate = 1
let bulletLeft = 6

/** 全てのキャラクター */
let allCharas: Chara[] = []
/** キャラ： 猫配列 */
let cats: Chara[] = []
/** キャラ： メザシ配列 */
let mzses: Chara[] = []

// スタイル操作のユーティリティ

const setDefaultBoarder = (style: CSSStyleDeclaration) => {
  style.border = 'solid 2px' + COLOR_666
}
const setNoUserSelect = (style: CSSStyleDeclaration) => {
  style.userSelect = 'none'
}
const setText = (el: HTMLElement, text: string) => {
  el[INNERHTML] = text
}
const setAbsPosition = (style: CSSStyleDeclaration, w: number, h: number, x = 0, y = 0) => {
  style.position = 'absolute'
  style.top = y + PX
  style.left = x + PX
  style.width = w + PX
  style.height = h + PX
}

/** ボタンを作ってステージに追加する */
const createButton = (onclick: () => void) => {
  const button = createElement('button')
  const st = button[STYLE]
  // ボタンの背景色を切り替える関数
  const setBgColor = (isInvert?: boolean) => (st.background = isInvert ? COLOR_666 : COLOR_FFF)
  setAbsPosition(st, STAGE_WIDTH, 60, 0, 610)
  setNoUserSelect(st)
  setDefaultBoarder(st)
  st.color = COLOR_666
  st.fontSize = 24 + PX
  setBgColor()
  handleClick(button, () => {
    onclick()
    setBgColor(true)
    timeout(setBgColor, N100)
  })
  return appendChild(button)
}

/** テキストを作ってステージに追加する */
const createText = (size = 24, top = 0, align = '') => {
  // 文字数的にpを使いたいが、pはブラウザデフォルトのマージンがつくためdivにする
  const el = createElement('div')
  const st = el[STYLE]
  setAbsPosition(st, STAGE_WIDTH, size, 0, top)
  setNoUserSelect(st)
  st.textAlign = align
  st.fontSize = size + PX
  st.color = COLOR_666
  return appendChild(el)
}

/** キャラクターを追加する */
const createChara = (w: number, h: number, x = 0, y = 0): Chara => {
  const box = createElement('i')
  const style = box[STYLE]
  setAbsPosition(style, w, h)
  style.transformOrigin = 'bottom'
  const chara = {
    e: appendChild(box),
    x,
    y,
    v: 0,
    a: GRAVITY,
    w,
    h
  }
  allCharas.push(chara)
  return chara
}

/** キャラ： たまさん */
const tama = createChara(80, N100)
tama.e[INNERHTML] = tamaSvg

/**
 * 存在しなくなったキャラをDOMから削除する
 * @param alives 生きてる全てのキャラ = ここに含まれないものは削除
 */
const removeInvalidCharas = (alives: Chara[]) => {
  allCharas[FILTER]((chara) => !alives.includes(chara))[FOREACH]((chara) =>
    body.removeChild(chara.e)
  )
  allCharas = alives
}

/** キャラの位置を更新する */
const updatePos = (chara: Chara) => {
  chara.v += chara.a
  chara.y += chara.v * frameDelay
  if (chara.y <= 0) {
    chara.v = chara.y = 0
  }
  chara.x += (chara.m ?? 0) * frameDelay
  chara.e[STYLE].transform = `translate(${chara.x}px, ${
    STAGE_HEIGHT - chara.y - chara.h
  }px) scaleY(${Math.sin(frameCount / 7) / 20 + 1})`
}

/** たまさんジャンプ */
const tamaJump = () => {
  if (!tama.y) {
    tama.v = 25
    playNotes([392])
  }
}

/** 猫をステージに追加 */
const addCat = () => {
  const size = 50
  const cat = createChara(size, size, STAGE_WIDTH - size, random(300))
  if (random() < CAT_FLY_RATE) {
    // 空飛ぶ猫（=重力0）
    cat.a = 0
  }
  cat.e[INNERHTML] = catSvg
  cat.m = -4 - score * CAT_SPEED_UP
  cats.push(cat)
}
/** 猫をジャンプさせる */
const catJump = (cat: Chara) => {
  if (!cat.y) {
    cat.v = random(60)
    cat.a = -cat.v / 20
  }
}

/** メザシをステージに追加 */
const addMzs = () => {
  if (!isPlaying || !bulletLeft) return
  const mzs = createChara(40, 10, 50, tama.y + 40)
  mzs.e[INNERHTML] = mzsSvg
  mzs.m = 5
  mzs.a = 0
  mzses.push(mzs)
  bulletLeft--
  updateStateText()
  if (!bulletLeft) {
    timeout(() => {
      bulletLeft = 6
      updateStateText()
    }, 2000)
  }
  playNotes([784])
}

/** ステージ外に出たキャラを削除 */
const cleanupStageoutCharactors = (charas: Chara[]) =>
  charas[FILTER]((chara: Chara) => chara.x > 0 && chara.x < STAGE_WIDTH)

/** 2つのレンジが重なるか判定するユーティリティ */
const isIn = (x1: number, w1: number, x2: number, w2: number) =>
  Math.abs((x1 - x2) * 2 + w1 - w2) < w1 + w2

/** 2つのキャラの衝突が衝突するか？ */
const intersected = (c1: Chara, c2: Chara) =>
  isIn(c1.x, c1.w, c2.x, c2.w) && isIn(c1.y, c1.h, c2.y, c2.h)

/** 衝突したキャラを削除 */
const cleanupHitCharactors = (charas: Chara[], bullets: Chara[]) => {
  let hits: Chara[] = []
  bullets[FOREACH]((bullet) => {
    const hitCharas = charas[FILTER]((t) => intersected(t, bullet))
    if (hitCharas.length) {
      hits = [...hits, ...hitCharas, bullet]
    }
  })
  const isPass = (chara: Chara) => !hits.includes(chara)
  return [charas[FILTER](isPass), bullets[FILTER](isPass)]
}

/** フレームごとの処理 */
const tick = (time: number) => {
  // 60FPSを1フレームの基準として、前回から何フレーム分時間が経過しているか
  frameDelay = time ? (time - lastTick) / 17 : 1
  frameCount += frameDelay

  // 一定フレーム数ごとに「キーフレーム」を設ける
  const keyFrameIndex = ~~(frameCount / KEY_FRAME_INTERVAL)
  const isNewKey = keyFrameIndex !== lastKeyFrame
  lastKeyFrame = keyFrameIndex

  if (isPlaying) {
    // 猫追加判定
    // 時間と共に猫出現率を上げていく
    catAppearRate += CAT_APPEAR_RATE_INCREASE
    // キーフレームのタイミングで乱数が出現率を上回ったら猫を追加
    if (isNewKey && random() < catAppearRate) {
      addCat()
      // 出現率をゼロリセット
      catAppearRate = 0
    }
    // ランダムに猫ジャンプ
    cats[FOREACH]((cat) => random() < CAT_JUMP_RATE && catJump(cat))
    // たまさんの横位置を定位置にアニメーション（タイトル画面では中央にいるので左端に戻す）
    tama.x *= 0.9
    // キャラの位置を更新
    ;[tama, ...cats, ...mzses][FOREACH](updatePos)
    // ステージ外に出たキャラを除去
    cats = cleanupStageoutCharactors(cats)
    mzses = cleanupStageoutCharactors(mzses)
    // 衝突判定
    const catCount = cats.length
    ;[cats, mzses] = cleanupHitCharactors(cats, mzses)
    // スコア加算
    const hitCount = catCount - cats.length
    if (hitCount) {
      score += hitCount
      updateStateText()
      playNotes([523])
    }
    // ゲームオーバー判定
    if (cats.some((cat) => intersected(cat, tama))) endGame(true)
    // 除去されたキャラをDOMからも削除
    removeInvalidCharas([tama, ...cats, ...mzses])
  }
  lastTick = time
  requestAnimationFrame(tick)
}

/** スコアと弾数の表示を更新します */
const updateStateText = () => {
  stateText[INNERHTML] = `🐱${score} / ` + ('🐟'.repeat(bulletLeft) || 'RELOADING')
}

/** ゲームを開始します */
const startGame = () => {
  // 全てのキャラを削除
  cats = []
  mzses = []
  removeInvalidCharas([tama])
  score = 0
  bulletLeft = 6
  isPlaying = true
  updateStateText()
  setText(titleText, '')
  setText(mainButton, 'JUMP')
}

/** ゲームを終了してタイトル画面を表示します */
const endGame = (isOver?: boolean) => {
  isPlaying = false
  setText(mainButton, 'GO!')
  setText(titleText, isOver ? 'GAMEOVER' : 'Neko Mezashi 4KB')
  // たまさんをステージ中央に移動
  tama.x = (STAGE_WIDTH - tama.w) / 2
  tama.y = STAGE_HEIGHT / 2
  updatePos(tama)
  if (isOver) playNotes([523, 466, 440, 392, 349])
}

// 初期化処理
const bodyStyle = body[STYLE]
setDefaultBoarder(bodyStyle)
// Safariはデフォルトのフォントがセリフ系なのでサンセリフ系にする
// sans-serifは長いので、標準で使用できて名前の短いarialを採用
bodyStyle.fontFamily = 'arial'
bodyStyle.width = STAGE_WIDTH + PX
bodyStyle.height = STAGE_HEIGHT + PX
bodyStyle.position = 'relative'
bodyStyle.touchAction = 'none'
// ステージクリックでメザシを発射
handleClick(body, addMzs)
// 画面下のメインボタンを生成： ゲーム中 → ジャンプ / ゲーム前&ゲームオーバー → ゲーム開始
mainButton = createButton(() => (isPlaying ? tamaJump : startGame)())
// スコアと残弾数の表示テキストを生成
stateText = createText()
const stateStyle = stateText[STYLE]
// textShadowを使って絵文字をシルエットで表示する
stateStyle.color = COLOR_TRANSPARENT
stateStyle.textShadow = '0 0 0 ' + COLOR_666
// タイトルテキストを生成
titleText = createText(36, 310, 'center')

// リセット
endGame()
// フレームアニメーションを開始
tick(0)
