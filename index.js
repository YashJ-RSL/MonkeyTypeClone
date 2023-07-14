import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import useRandomWords from "./useWordsDB";
import Results from "./results";

const root = createRoot(document.getElementById("root"));
const TIME_LIMIT_SEC = 30;

const Element = () => {
  const [inputText, setInputText] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT_SEC);
  const [redirectToResults, setRedirectToResults] = useState(false);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const setInputTextHelper = (event) => {
      if (event.key.length === 1 || event.key === "Backspace") {
        if (event.key === "Backspace") {
          if (inputText !== "") {
            let temp = inputText.slice(0, -1);
            setInputText(temp);
            setCounter(counter - 1);
            document.getElementById(`span-char-${counter - 1}`).style.color =
              "black";
          }
        } else {
          if (inputText === "" && !isTimerRunning) {
            setIsTimerRunning(true);
          }
          let temp = inputText + event.key;
          setInputText(temp);
          setCounter(counter + 1);
          const char = document.getElementById(
            `span-char-${counter}`
          ).innerHTML;
          if (char === event.key) {
            document.getElementById(`span-char-${counter}`).style.color =
              "green";
          } else {
            document.getElementById(`span-char-${counter}`).style.color = "red";
          }
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

  const arrayOfQuotes = useRandomWords(10);
  const sentences = arrayOfQuotes.join(" ");
  const arrayOfChars = sentences.split("");

  if (redirectToResults) {
    navigate("/results", {
      state: {
        userInputSentence: inputText,
        originalSentences: sentences,
        timeLimitMin: TIME_LIMIT_SEC / 60,
      },
    });
  }

  return (
    <>
      {arrayOfChars ? (
        <div>
          <h4>
            {arrayOfChars.map((item, index) => (
              <span key={index} id={`span-char-${index}`}>
                {item}
              </span>
            ))}
          </h4>
          <h1>{timeRemaining}</h1>
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Element />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
