import { useEffect, useState } from "react";

/* eslint-disable */
const getStoredValue = <T>(key: string, defaultValue: T): T => {
    const savedItem = localStorage.getItem(key);
    if (savedItem) {
      return JSON.parse(savedItem);
    }
    return defaultValue;
  };

  export const useLocalStorage = <T,>(
    key: string, // key have data type string
    defaultValue: T // defaultValue have data type T. T is generic type. T can be any type
  ): [T, React.Dispatch<React.SetStateAction<T>>] => { // return type is array of T and React.Dispatch<React.SetStateAction<T>>
    const [value, setValue] = useState(() => {
      return getStoredValue(key, defaultValue);
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
  
    return [value, setValue];
  };