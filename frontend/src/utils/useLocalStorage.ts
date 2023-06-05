"use client"

import {useEffect, useState} from "react";


const useLocalStorage = () => {

  //initialValue of the localStorage
  const initialValue = {
    theme : "light"
  }

  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem("data");
    //if no item in the localStorage
    if (!localStorageValue) {
      return initialValue;
    }
    return JSON.parse(localStorageValue);
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(value))
  },[value])


  const set = ({key,newValue}: {key: string,newValue: string}) => {
    const newValueObject = {...value, [key]: newValue};
    console.log(newValueObject);
  }

  const setTheme = (theme: string) => {
    setValue({...value,theme})
  }

  return {value,set,setTheme}
}


export default useLocalStorage
