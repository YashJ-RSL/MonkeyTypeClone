const backSpaceHandler = (
  inputText,
  setInputText,
  counter,
  setCounter,
  charRef
) => {
  let inputTextTemp = inputText.slice(0, -1);
  setInputText(inputTextTemp);
  setCounter(counter - 1);
  charRef.current[counter - 1].style.borderRight = "None";
  charRef.current[counter - 1].style.color = "#646669";
  if (counter > 2) {
    charRef.current[counter - 2].style.borderRight = "1px solid white";
  }
  document.getElementById("timer").style.opacity = "1";
  document.getElementById("nav").style.display = "none";
};

export default backSpaceHandler;
