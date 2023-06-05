"use client"

import {useEffect, useState} from "react";

const useTheme = () => {

  let initialTheme = 'light'

  //Get the initial theme from local storage or init theme
  const setInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localStorageTheme = localStorage.getItem('theme');
      if (!localStorageTheme) {
        localStorage.setItem('theme', initialTheme)
        return initialTheme;
      }
      return localStorageTheme;
    }
    return initialTheme;
  }
  const [theme, setTheme] = useState(setInitialTheme);
  //when theme changes, save it to local storage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  },[theme])

  //Toogle the theme
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      // localStorage.setItem('theme', 'dark');
    }

    if(theme === 'dark') {
      setTheme('light');
      // localStorage.setItem('theme', 'light');
    }

  }
  //Get the theme
  const getTheme = () => {
    return theme;
  }

  return { theme, getTheme, toggleTheme }
}

export default useTheme;
