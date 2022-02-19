import { minify } from "./minify";
import { cat, mzs, tama } from "./source";

console.log('tama.line')
console.log(minify(tama.line))

console.log('tama.lineFill')
console.log(minify(tama.lineFill))

console.log('tama.fill')
console.log(minify(tama.fill))

console.log('cat.line')
console.log(minify(cat.line))

console.log('cat.fill')
console.log(minify(cat.fill))

console.log('mzs.line')
console.log(minify(mzs.line))

console.log('mzs.fill')
console.log(minify(mzs.fill))
