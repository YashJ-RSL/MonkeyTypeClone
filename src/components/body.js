import React, { useEffect, useState } from "react";
import useRandomWords from "../hooks/useWordsDB";
import { TIME_LIMIT_SEC, NUM_WORDS_TO_FETCH } from "../utils/constants";
import setInputTextHelperFactory from "../utils/setInputTextHelperFactory";
import timerHelper from "../utils/timerHelper";
import { useRef } from "react";
import Results from "./results";
import Timer from "./timer";
import Words from "./words";
import InputHandler from "./inputHandler";
import ReloadButton from "./reloadButton";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT_SEC);
  const [redirectToResults, setRedirectToResults] = useState(false);
  const [counter, setCounter] = useState(0);
  const [tracker, setTracker] = useState([]);
  const inputRef = useRef(null);
  const setInputTextHelper = (event) => {
    return setInputTextHelperFactory(
      event,
      inputText,
      setInputText,
      counter,
      setCounter,
      setIsTimerRunning,
      isTimerRunning,
      sentences
    );
  };
  useEffect(() => {
    timerHelper(
      isTimerRunning,
      timeRemaining,
      tracker,
      inputText,
      setTracker,
      setRedirectToResults,
      setTimeRemaining
    );
  }, [isTimerRunning, timeRemaining]);

  const arrayOfWords = useRandomWords(NUM_WORDS_TO_FETCH);
  const sentences = arrayOfWords.join(" ");
  const arrayOfChars = sentences.split("");

  if (redirectToResults) {
    document.getElementById("nav").style.display = "";
    return (
      <Results
        userInputSentence={inputText}
        originalSentences={sentences}
        timeLimitMin={TIME_LIMIT_SEC / 60}
        tracker={tracker}
      />
    );
  }

  return (
    <>
      {arrayOfChars ? (
        <div className="main-test">
          <Timer timeRemaining={timeRemaining} />
          <Words inputRef={inputRef} arrayOfChars={arrayOfChars} />
          <InputHandler
            inputText={inputText}
            setInputTextHelper={setInputTextHelper}
            inputRef={inputRef}
          />
          <ReloadButton />
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </>
  );
};

export default Body;
