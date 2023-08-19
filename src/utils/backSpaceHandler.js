import lineHandler from "./lineHandler";

const backSpaceHandler = (
  inputText,
  setInputText,
  counter,
  setCounter,
  charRef,
  lineCounter,
  setLineCounter,
  arrObjChars,
  setArrObjChars,
  timerRef
) => {
  let inputTextTemp = inputText.slice(0, -1);
  setInputText(inputTextTemp);
  setCounter(counter - 1);
  arrObjChars[counter - 1].status = "notTyped";
  arrObjChars[counter].cursor = "none";
  if (counter > 1) {
    arrObjChars[counter - 1].cursor = "block";
  }
  setArrObjChars(arrObjChars);
  timerRef.current.style.opacity = "1";
  document.getElementById("nav").style.display = "none";
  lineHandler(counter, lineCounter, setLineCounter, charRef, true);
};

export default backSpaceHandler;
