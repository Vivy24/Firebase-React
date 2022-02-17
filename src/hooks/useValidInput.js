import { useState, useEffect } from "react";

export const useValidInput = (validateInput, preValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (preValue) {
      setEnteredValue(preValue);
    }
  }, []);

  const valueIsValid = validateInput(enteredValue);
  const empty = enteredValue === "" && isTouched;

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    empty,
    isTouched,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
