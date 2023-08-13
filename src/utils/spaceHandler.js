import lineHandler from "./lineHandler";

const spaceHandler = (
  inputText,
  setInputText,
  counter,
  setCounter,
  sentences,
  lineCounter,
  setLineCounter,
  charRef
) => {
  let counterTemp = counter;
  let inputTextTemp = inputText;
  if (counter > 0) {
    charRef.current[counter - 1].style.borderRight = "None";
  }
  while (sentences[counterTemp] !== " ") {
    counterTemp++;
    inputTextTemp += "/";
  }
  inputTextTemp += " ";
  setInputText(inputTextTemp);
  setCounter(counterTemp + 1);
  charRef.current[counterTemp].style.borderRight = "1px solid white";
  lineHandler(counterTemp, lineCounter, setLineCounter, charRef);
};

export default spaceHandler;
