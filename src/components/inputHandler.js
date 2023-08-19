const InputHandler = ({ setInputTextHelper, inputRef }) => {
  return (
    <div className="input">
      <input
        autoFocus
        type="text"
        onKeyDown={setInputTextHelper}
        ref={inputRef}
        className="input-text"
      />
    </div>
  );
};

export default InputHandler;
