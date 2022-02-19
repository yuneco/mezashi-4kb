export const minify = (source: string) => {
  const lines = source
    .split("\n")
    .filter((l) => !l.match(/^[ ]*$/))
    .map((l) => {
      const path = l.match(/<path d="M(.*)" ?\/>/)?.[1] ?? "";
      if (!path) console.warn(`not matched: ${l}`);
      return path;
    })
    .filter((l) => l);

  console.log(lines);

  const splitEls = (str: string) => {
    const chars = str.split("");
    const els: string[] = [];
    let el = "";

    const numCs = "0123456789".split("");
    chars.forEach((c) => {
      if (c === " ") {
        if (el !== "") {
          els.push(el);
        }
        el = "";
        return;
      }
      if (c === "-") {
        if (el !== "") {
          els.push(el);
        }
        el = "-";
        return;
      }
      if (c === ".") {
        if (el.includes(".")) {
          els.push(el);
          el = ".";
        } else {
          el += ".";
        }
        return;
      }
      if (numCs.includes(c)) {
        el += c;
      } else {
        if (el !== "") {
          els.push(el);
        }
        els.push(c);
        el = "";
      }
    });
    if (el !== "") {
      els.push(el);
    }

    return els;
  };

  const CONT_CHARS = "MmLlHhVvCcSsQqTtAaZz".split("");
  const el2int8 = (el: string) => {
    if (el.match(/^[-]?[0-9]*(.[0-9]+)?$/)) {
      return Math.min(255, 128 + Math.round(Number(el)) + CONT_CHARS.length);
    }
    if (CONT_CHARS.includes(el)) {
      const index = CONT_CHARS.findIndex((c) => c === el);
      return index;
    }
    throw new Error(`invalid: ${el}`);
  };

  const lineEls = lines.map((line) => splitEls(line));
  const lineInt8s = lineEls.map((els) => els.map(el2int8));

  const uint8ToBase64 = (arr: number[]) => {
    try {
      return btoa(String.fromCharCode.apply(null, arr));
    } catch (err) {
      console.warn(arr);
      return "";
    }
  };

  const linesBase64 = lineInt8s.map(uint8ToBase64);
  return linesBase64.join("*");
};
