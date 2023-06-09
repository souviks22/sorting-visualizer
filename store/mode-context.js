import { createContext, useState } from "react";

export const ModeContext = createContext({
  isDarkMode: false,
  toggle: () => { }
})

export const ModeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggle = () => {
    setIsDarkMode(isDarkMode => !isDarkMode)
  }
  return (<ModeContext.Provider value={{ isDarkMode, toggle }}>
    {props.children}
  </ModeContext.Provider>)
}