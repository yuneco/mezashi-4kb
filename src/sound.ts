import { FOREACH, N100, timeout } from "./common";

let ctx: AudioContext
const CONNECT = "connect";
const DISCONNECT = `disconnect`;
const CURRENTTIME = "currentTime";
const VALUE = "value"

export const playNote = (hz: number, durMs = N100, volume = 0.3) => {
  ctx ||= new AudioContext();
  let oscillator = ctx.createOscillator();
  let gainNode = ctx.createGain();
  let gain = gainNode.gain

  oscillator[CONNECT](gainNode);
  gainNode[CONNECT](ctx.destination);
  oscillator.frequency.setValueAtTime(hz, ctx[CURRENTTIME]);
  gain[VALUE] = volume;
  gain.linearRampToValueAtTime(0, ctx[CURRENTTIME] + durMs / 1000);

  oscillator.start();
  timeout(() => {
    gain[VALUE] = 0;
    oscillator[DISCONNECT]();
    gainNode[DISCONNECT]();
  }, durMs);
};

export const playGameOverSnd = () => {
  [523, 466, 440, 392, 349][FOREACH]((hz, index) => {
    timeout(() => playNote(hz), N100 * index);
  });
};
