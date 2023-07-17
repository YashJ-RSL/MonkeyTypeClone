import useFindNumErrors from "./useFindNumErrors";
const useAccuracy = (userInputSentence, originalSentences) => {
  return (
    ((userInputSentence.length -
      useFindNumErrors(userInputSentence, originalSentences)) /
      userInputSentence.length) *
    100
  );
};
export default useAccuracy;
