import { FOREACH, N100, timeout } from "./common";

let ctx: AudioContext

export const playNote = (hz: number, durMs = N100, volume = 0.3) => {
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
  }, durMs);
};

export const playGameOverSnd = () => {
  [523, 466, 440, 392, 349][FOREACH]((hz, index) => {
    timeout(() => playNote(hz), N100 * index);
  });
};
