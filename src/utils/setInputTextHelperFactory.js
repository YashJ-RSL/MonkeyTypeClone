import backSpaceHandler from "./backSpaceHandler";
import spaceHandler from "./spaceHandler";
import lineHandler from "./lineHandler";

const setInputTextHelperFactory = (
  event,
  inputText,
  setInputText,
  counter,
  setCounter,
  setIsTimerRunning,
  isTimerRunning,
  sentences,
  lineCounter,
  setLineCounter,
  charRef,
  arrObjChars,
  setArrObjChars,
  timerRef
) => {
  if (event.key.length === 1 || event.key === "Backspace") {
    if (event.key === "Backspace") {
      if (inputText !== "") {
        backSpaceHandler(
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
        );
      }
    } else {
      if (inputText === "" && !isTimerRunning) {
        setIsTimerRunning(true);
      }
      const char = charRef.current[counter].innerHTML;
      if (event.key === " " && char !== " ") {
        spaceHandler(
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
        );
      } else {
        let temp = inputText + event.key;
        setInputText(temp);
        setCounter(counter + 1);
        if (char === event.key) {
          arrObjChars[counter].status = "correct";
        } else {
          arrObjChars[counter].status = "incorrect";
        }
        if (counter >= 0) {
          arrObjChars[counter].cursor = "none";
        }
        arrObjChars[counter + 1].cursor = "block";
        if (char == " ") {
          lineHandler(counter, lineCounter, setLineCounter, charRef);
        }
      }
      setArrObjChars(arrObjChars);
      timerRef.current.style.opacity = "1";
      document.getElementById("nav").style.display = "none";
    }
  }
};

export default setInputTextHelperFactory;
