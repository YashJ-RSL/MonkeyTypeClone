const InputHandler = ({ inputText, setInputTextHelper, inputRef }) => {
  return (
    <div className="input">
      <input
        autoFocus
        type="text"
        value={inputText}
        onKeyDown={setInputTextHelper}
        ref={inputRef}
        className="input-text"
      />
    </div>
  );
};

export default InputHandler;
