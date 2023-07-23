import { useState, useEffect } from "react";

const useRandomWords = (n) => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    makeApiCall(n);
  }, []);
  async function makeApiCall(n) {
    const response = await fetch(
      "https://raw.githubusercontent.com/monkeytypegame/monkeytype/master/frontend/static/languages/english_1k.json"
    );
    const data = await response.json();
    const arr = data.words.sort(() => 0.5 - Math.random());
    const randomTexts = arr.slice(0, 150);
    setWords(randomTexts);
  }

  return words;
};

export default useRandomWords;
