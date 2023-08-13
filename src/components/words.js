const Words = ({ inputRef, arrayOfChars, charRef }) => {
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
          ref={(element) => (charRef.current[index] = element)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Words;
