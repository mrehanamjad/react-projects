import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {}, 
  //**we can define the method/function or variable,state in any file of code where you want to use, But there names must be same as here**
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
  return useContext(ThemeContext)
}