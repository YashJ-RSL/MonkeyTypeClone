import useGetFontColor from "../hooks/useGetFontColor";
import useGetCursor from "../hooks/useGetCursor";

const Words = ({ inputRef, arrObjChars, charRef }) => {
  return (
    <div
      className="words"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      {arrObjChars.map((item, index) => (
        <span
          key={index}
          id={`span-char-${index}`}
          className={"letter " + (item["char"] == " " ? "space" : "")}
          ref={(element) => (charRef.current[index] = element)}
          style={{
            color: useGetFontColor(item),
            borderLeft: useGetCursor(item),
          }}
        >
          {item["char"]}
        </span>
      ))}
    </div>
  );
};

export default Words;
