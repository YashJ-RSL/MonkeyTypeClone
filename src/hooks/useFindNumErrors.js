const useFindNumErrors = (userInputSentence, originalSentences) => {
  let errors = 0;
  for (let i = 0; i < userInputSentence.length; i++) {
    if (userInputSentence[i] !== originalSentences[i]) {
      errors++;
    }
  }
  return errors;
};
export default useFindNumErrors;
