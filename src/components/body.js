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
  const [lineCounter, setLineCounter] = useState(0);
  const [arrObjChars, setArrObjChars] = useState([]);
  const [sentences, setSentences] = useState("");
  const inputRef = useRef(null);
  const charRef = useRef({});
  const timerRef = useRef(null);

  const setInputTextHelper = (event) => {
    return setInputTextHelperFactory(
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

  useRandomWords(NUM_WORDS_TO_FETCH, setSentences, setArrObjChars);

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
      {arrObjChars.length != 0 ? (
        <div className="main-test">
          <Timer timeRemaining={timeRemaining} timerRef={timerRef} />
          <Words
            inputRef={inputRef}
            arrObjChars={arrObjChars}
            charRef={charRef}
          />
          <InputHandler
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
