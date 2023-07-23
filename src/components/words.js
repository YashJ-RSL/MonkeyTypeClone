const Words = ({ inputRef, arrayOfChars }) => {
  return (
    <div
      className="words"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      {arrayOfChars.map((item, index) => (
        <span
          key={index}
          id={`span-char-${index}`}
          className={"letter " + (item == " " ? "space" : "")}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Words;
