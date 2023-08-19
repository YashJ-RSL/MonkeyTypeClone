import { useEffect } from "react";
import useObjCharsCreator from "./useObjCharsCreator";

const useRandomWords = (n, setSentences, setArrObjChars) => {
  useEffect(() => {
    makeApiCall(n);
  }, []);

  async function makeApiCall(n) {
    const response = await fetch(
      "https://raw.githubusercontent.com/monkeytypegame/monkeytype/master/frontend/static/languages/english_1k.json"
    );
    const data = await response.json();
    const arr = data.words.sort(() => 0.5 - Math.random());
    const randomTexts = arr.slice(0, n);
    const sentences = randomTexts.join(" ");
    const arrOfChars = sentences.split("");
    setSentences(sentences);
    useObjCharsCreator(arrOfChars, setArrObjChars);
  }
};

export default useRandomWords;
