import { useEffect, useState } from "react";
// import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  /*
  As we know :
      **we can define the method/function or variable,state in any file of code where you want to use, But there names must be same as here**

      so here we are defining them with same name: 
  */

  const [themeMode, setThemeMode] = useState("light");

  function darkTheme() {
    setThemeMode("dark");
  }

  function lightTheme() {
    setThemeMode("light");
  }

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto"><Card /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
