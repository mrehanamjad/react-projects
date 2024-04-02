import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const add = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const remove = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>The Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={add}>Add Value</button>
      <button onClick={remove}>Remove Value</button>
      <p>@mrehanamjad</p>
    </>
  );
}

export default App;
