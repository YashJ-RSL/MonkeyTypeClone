const useGetCursor = (objChar) => {
  switch (objChar.cursor) {
    case "block":
      return "1px solid white";
    default:
      return "None";
  }
};

export default useGetCursor;
