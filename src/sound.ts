import { N100, timeout } from "./common";

const ctx: AudioContext = new AudioContext()
const gainNode: GainNode = ctx.createGain()
const gain = gainNode.gain
gainNode.connect(ctx.destination);

/**
 * 指定した音を連続して再生します
 * @param param0 再生する音の周波数配列。各要素は>0の数値で指定。
 * @param durMs 各音の再生時間(ms)
 * @param volume 再生音量
 */
export const playNotes = ([hz, ...rest]: number[]) => {
  if (hz) {
    const oscillator = ctx.createOscillator();

    oscillator.connect(gainNode);
    oscillator.frequency.setValueAtTime(hz, ctx.currentTime);
    gain.value = 0.3;
    gain.linearRampToValueAtTime(0, ctx.currentTime + 0.09);

    oscillator.start();
    timeout(() => {
      oscillator.stop()
      playNotes(rest) // 残りの音を再生
    }, N100);
  }
};
