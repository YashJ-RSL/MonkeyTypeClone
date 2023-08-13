const lineHandler = (counter, lineCounter, setLineCounter, charRef) => {
  let currentCharPos = charRef.current[counter].offsetTop;
  let nextCharPos = charRef.current[counter + 1].offsetTop;
  if (currentCharPos != nextCharPos) {
    setLineCounter(lineCounter + 1);
    if (lineCounter + 1 > 3) {
      document.getElementsByClassName("words")[0].scrollTop =
        45 * (lineCounter - 2);
    }
  }
};

export default lineHandler;
