import lineHandler from "./lineHandler";

const spaceHandler = (
  inputText,
  setInputText,
  counter,
  setCounter,
  sentences,
  lineCounter,
  setLineCounter,
  charRef,
  arrObjChars,
  setArrObjChars
) => {
  let counterTemp = counter;
  let inputTextTemp = inputText;
  if (counter > 0) {
    arrObjChars[counter].cursor = "none";
  }
  while (sentences[counterTemp] !== " ") {
    counterTemp++;
    inputTextTemp += "/";
  }
  inputTextTemp += " ";
  setInputText(inputTextTemp);
  setCounter(counterTemp + 1);
  arrObjChars[counterTemp + 1].cursor = "block";
  lineHandler(counterTemp, lineCounter, setLineCounter, charRef);
  setArrObjChars(arrObjChars);
};

export default spaceHandler;
