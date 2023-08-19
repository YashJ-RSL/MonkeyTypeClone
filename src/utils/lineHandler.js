const lineHandler = (
  counter,
  lineCounter,
  setLineCounter,
  charRef,
  isBackSpace = false
) => {
  let currentCharPos = charRef.current[counter].offsetTop;
  let nextCharPos = charRef.current[counter + 1].offsetTop;
  if (isBackSpace) {
    nextCharPos = charRef.current[counter - 1].offsetTop;
  }
  if (currentCharPos != nextCharPos) {
    if (isBackSpace && lineCounter > 0) {
      setLineCounter(lineCounter - 1);
    } else {
      setLineCounter(lineCounter + 1);
    }
    if (lineCounter + 1 > 3) {
      if (isBackSpace && lineCounter > 0) {
        document.getElementsByClassName("words")[0].scrollTop =
          45 * (lineCounter - 4);
      } else {
        document.getElementsByClassName("words")[0].scrollTop =
          45 * (lineCounter - 2);
      }
    }
  }
};

export default lineHandler;
