import { TIME_LIMIT_SEC } from "./constants";
const timerHelper = (
  isTimerRunning,
  timeRemaining,
  tracker,
  inputText,
  setTracker,
  setRedirectToResults,
  setTimeRemaining
) => {
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
};
export default timerHelper;
