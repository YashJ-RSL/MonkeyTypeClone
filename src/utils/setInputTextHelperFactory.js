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
  charRef
) => {
  if (event.key.length === 1 || event.key === "Backspace") {
    if (event.key === "Backspace") {
      if (inputText !== "") {
        backSpaceHandler(inputText, setInputText, counter, setCounter, charRef);
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
          charRef
        );
      } else {
        let temp = inputText + event.key;
        setInputText(temp);
        setCounter(counter + 1);
        if (char === event.key) {
          charRef.current[counter].style.color = "white";
        } else {
          charRef.current[counter].style.color = "red";
        }
        if (counter > 0) {
          charRef.current[counter - 1].style.borderRight = "None";
        }
        charRef.current[counter].style.borderRight = "1px solid white";
        if (event.key === " ") {
          lineHandler(counter, lineCounter, setLineCounter, charRef);
        }
      }
      document.getElementById("timer").style.opacity = "1";
      document.getElementById("nav").style.display = "none";
    }
  }
};

export default setInputTextHelperFactory;
