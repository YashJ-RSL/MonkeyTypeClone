const useObjCharsCreator = (arrayOfChars, setArrObjChars) => {
  console.log(arrayOfChars);
  const objChars = [];
  arrayOfChars.forEach((char) => {
    objChars.push({ char, status: "not-typed", cursor: "none" });
  });
  setArrObjChars(objChars);
};
export default useObjCharsCreator;
