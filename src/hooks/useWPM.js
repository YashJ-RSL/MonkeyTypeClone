import useFindNumErrors from "./useFindNumErrors";
export const useNetWPM = (
  userInputSentence,
  originalSentences,
  timeLimitMin
) => {
  const grossWPM = userInputSentence.length / 5;
  const netWPM =
    (grossWPM - useFindNumErrors(userInputSentence, originalSentences)) /
    timeLimitMin;
  return netWPM;
};

export const useGrossWPM = (userInputSentence, timeLimitMin) => {
  const grossWPM = userInputSentence.length / 5 / timeLimitMin;
  return grossWPM;
};
