const Timer = ({ timeRemaining, timerRef }) => {
  return (
    <div className="timer" id="timer" ref={timerRef}>
      <span className="time">{timeRemaining}</span>
    </div>
  );
};

export default Timer;
