const setInputTextHelperFactory = (
  event,
  inputText,
  setInputText,
  counter,
  setCounter,
  setIsTimerRunning,
  isTimerRunning,
  sentences
) => {
  if (event.key.length === 1 || event.key === "Backspace") {
    if (event.key === "Backspace") {
      if (inputText !== "") {
        let inputTextTemp = inputText.slice(0, -1);
        setInputText(inputTextTemp);
        setCounter(counter - 1);
        document.getElementById(`span-char-${counter - 1}`).style.borderRight =
          "None";
        document.getElementById(`span-char-${counter - 1}`).style.color =
          "#646669";
        if (counter > 2) {
          document.getElementById(
            `span-char-${counter - 2}`
          ).style.borderRight = "1px solid white";
        }
        document.getElementById("timer").style.opacity = "1";
        document.getElementById("nav").style.display = "none";
      }
    } else {
      if (inputText === "" && !isTimerRunning) {
        setIsTimerRunning(true);
      }
      const char = document.getElementById(`span-char-${counter}`).innerHTML;
      if (event.key === " " && char !== " ") {
        let counterTemp = counter;
        let inputTextTemp = inputText;
        if (counter > 0) {
          document.getElementById(
            `span-char-${counter - 1}`
          ).style.borderRight = "None";
        }
        while (sentences[counterTemp] !== " ") {
          counterTemp++;
          inputTextTemp += "/";
        }
        inputTextTemp += " ";
        setInputText(inputTextTemp);
        setCounter(counterTemp + 1);
        document.getElementById(`span-char-${counterTemp}`).style.borderRight =
          "1px solid white";
      } else {
        let temp = inputText + event.key;
        setInputText(temp);
        setCounter(counter + 1);
        if (char === event.key) {
          document.getElementById(`span-char-${counter}`).style.color = "white";
        } else {
          document.getElementById(`span-char-${counter}`).style.color = "red";
        }
        if (counter > 0) {
          document.getElementById(
            `span-char-${counter - 1}`
          ).style.borderRight = "None";
        }
        document.getElementById(`span-char-${counter}`).style.borderRight =
          "1px solid white";
      }
      document.getElementById("timer").style.opacity = "1";
      document.getElementById("nav").style.display = "none";
    }
  }
};

export default setInputTextHelperFactory;
