import { useState, useEffect } from "react";

const useStorage = (defaultValue: string[], key: string) => {
  const storedState = window.localStorage.getItem(key);
  const [stateValue, setStateValue] = useState(() =>
    storedState !== null ? JSON.parse(storedState) : defaultValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(stateValue));
  }, [key, stateValue]);

  return [stateValue, setStateValue];
};

export default useStorage;