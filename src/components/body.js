import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRandomWords from "../hooks/useWordsDB";
import { TIME_LIMIT_SEC } from "../utils/constants";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT_SEC);
  const [redirectToResults, setRedirectToResults] = useState(false);
  const [counter, setCounter] = useState(0);
  const [tracker, setTracker] = useState([]); //array of objects to track words input at each second
  const navigate = useNavigate();

  useEffect(() => {
    const setInputTextHelper = (event) => {
      if (event.key.length === 1 || event.key === "Backspace") {
        if (event.key === "Backspace") {
          if (inputText !== "") {
            let inputTextTemp = inputText.slice(0, -1);
            setInputText(inputTextTemp);
            setCounter(counter - 1);
            document.getElementById(
              `span-char-${counter - 1}`
            ).style.borderRight = "None";
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
          const char = document.getElementById(
            `span-char-${counter}`
          ).innerHTML;
          if (event.key === " " && char !== " ") {
            let counterTemp = counter;
            let inputTextTemp = inputText;
            document.getElementById(
              `span-char-${counter - 1}`
            ).style.borderRight = "None";
            while (sentences[counterTemp] !== " ") {
              counterTemp++;
              inputTextTemp += "/";
            }
            setInputText(inputTextTemp);
            setCounter(counterTemp + 1);
            document.getElementById(
              `span-char-${counterTemp}`
            ).style.borderRight = "1px solid white";
          } else {
            let temp = inputText + event.key;
            setInputText(temp);
            setCounter(counter + 1);
            if (char === event.key) {
              document.getElementById(`span-char-${counter}`).style.color =
                "white";
            } else {
              document.getElementById(`span-char-${counter}`).style.color =
                "red";
            }
            if (counter > 0) {
              document.getElementById(
                `span-char-${counter - 1}`
              ).style.borderRight = "None";
            }
            console.log(counter);
            document.getElementById(`span-char-${counter}`).style.borderRight =
              "1px solid white";
          }
          document.getElementById("timer").style.opacity = "1";
          document.getElementById("nav").style.display = "none";
        }
      }
    };

    window.addEventListener("keydown", setInputTextHelper);

    return () => {
      window.removeEventListener("keydown", setInputTextHelper);
    };
  }, [inputText, isTimerRunning]);

  useEffect(() => {
    if (isTimerRunning && timeRemaining > 0) {
      const temp = {
        time: TIME_LIMIT_SEC - timeRemaining,
        input: inputText,
      };

      tracker.push(temp);
      setTracker(tracker);
      const timerId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    } else if (timeRemaining === 0) {
      setRedirectToResults(true);
    }
  }, [isTimerRunning, timeRemaining]);

  const arrayOfWords = useRandomWords(100);
  const sentences = arrayOfWords.join(" ");
  const arrayOfChars = sentences.split("");

  useEffect(() => {
    if (redirectToResults) {
      navigate("/results", {
        state: {
          userInputSentence: inputText,
          originalSentences: sentences,
          timeLimitMin: TIME_LIMIT_SEC / 60,
          tracker: tracker,
        },
      });
    }
  }, [redirectToResults]);

  return (
    <>
      {arrayOfChars ? (
        <div className="main-test">
          <div className="timer" id="timer">
            <span className="time">{timeRemaining}</span>
          </div>
          <div className="words">
            {arrayOfChars.map((item, index) => (
              <span
                key={index}
                id={`span-char-${index}`}
                className={"letter " + (item == " " ? "space" : "")}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </>
  );
};

export default Body;
