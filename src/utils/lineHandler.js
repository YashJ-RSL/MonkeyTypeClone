const lineHandler = (
  counter,
  lineCounter,
  setLineCounter,
  charRef,
  isBackSpace = false
) => {
  let currentChar = charRef.current[counter];
  let nextChar = charRef.current[counter + 1];
  if (isBackSpace) {
    nextChar.offsetTop = charRef.current[counter - 1].offsetTop;
  }
  if (currentChar.offsetTop != nextChar.offsetTop) {
    if (isBackSpace && lineCounter > 0) {
      setLineCounter(lineCounter - 1);
    } else {
      setLineCounter(lineCounter + 1);
    }
    if (lineCounter + 1 > 3) {
      if (isBackSpace && lineCounter > 0) {
        document.getElementsByClassName("words")[0].scrollTop =
          currentChar.offsetHeight * (lineCounter - 4);
      } else {
        document.getElementsByClassName("words")[0].scrollTop =
          currentChar.offsetHeight * (lineCounter - 2);
      }
    }
  }
};

export default lineHandler;
