const Timer = ({ timeRemaining }) => {
  return (
    <div className="timer" id="timer">
      <span className="time">{timeRemaining}</span>
    </div>
  );
};

export default Timer;
