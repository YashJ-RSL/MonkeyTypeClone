import useFindNumErrors from "./useFindNumErrors";
const useGrossWPM = (userInputSentence, originalSentences, timeLimitMin) => {
  const netWPM = userInputSentence.length / 5;
  const grossWPM =
    (netWPM - useFindNumErrors(userInputSentence, originalSentences)) /
    timeLimitMin;
  return grossWPM;
};

export default useGrossWPM;
