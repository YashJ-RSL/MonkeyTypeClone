const useGetFontColor = (objChar) => {
  switch (objChar.status) {
    case "correct":
      return "white";
    case "incorrect":
      return "red";
    default:
      return "#646669";
  }
};

export default useGetFontColor;
