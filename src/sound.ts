import { N100, timeout } from "./common";

let ctx: AudioContext

/**
 * 指定した音を連続して再生します
 * @param param0 再生する音の周波数配列。各要素は>0の数値で指定。
 * @param durMs 各音の再生時間(ms)
 * @param volume 再生音量
 */
export const playNotes = ([hz, ...rest]: number[], durMs = N100, volume = 0.3) => {
  if (!hz) return
  ctx ||= new AudioContext();
  let oscillator = ctx.createOscillator();
  let gainNode = ctx.createGain();
  let gain = gainNode.gain

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.frequency.setValueAtTime(hz, ctx.currentTime);
  gain.value = volume;
  gain.linearRampToValueAtTime(0, ctx.currentTime + durMs / 1000);

  oscillator.start();
  timeout(() => {
    gain.value = 0;
    oscillator.disconnect();
    gainNode.disconnect();
    playNotes(rest) // 残りの音を再生
  }, durMs);
};
