import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(9);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [popupPosition, setPopupPosition] = useState("-300px");

  // useRef hook
  const passwordRef = useRef(null);

  // const passwordGenerator = () => {};
  const passwordGenerator = useCallback(() => {
    let pas = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioplkjhfdsazxcvbnm";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]:;<>,./?|";

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pas += str.charAt(char);
    }

    setPassword(pas);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    setPopupPosition("25px")
    setTimeout(() => {
      setPopupPosition("-300px")
    }, 3000);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="min-h-52 max-w-screen-md mx-auto bg-gray-700 rounded-xl my-10 p-4 text-lg text-black">
        <h1 className="text-4xl font-bold text-white">Password Generator</h1>
        <div className="flex shadow rounded-xl overflow-hidden my-4 text-2xl">
          <input
            type="text"
            value={password}
            className="w-full outline-none py-3 px-3 "
            placeholder="Password.."
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-8 py-3 bg-lime-500 font-bold text-slate-600 hover:bg-lime-900 hover:text-white active:scale-90"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-wrap text-lime-200 items-center text-2xl">
          <input
            type="range"
            min="7"
            max="100"
            className="accent-lime-600 cursor-pointer mr-1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
          <input
            type="checkbox"
            defaultValue={numAllowed}
            className="h-5 w-5 ml-4 mr-1 accent-lime-600 cursor-pointer"
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label>Numbers</label>
          <input
            type="checkbox"
            defaultValue={charAllowed}
            className="h-5 w-5 ml-4 mr-1 accent-lime-600 cursor-pointer"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Characters</label>
        </div>
      </div>
      <div
        id="popup-card"
        className="max-w-fit bg-lime-900 p-4 text-2xl rounded-md text-wrap fixed bottom-20 duration-1000"
        style={{ right: popupPosition }}
      >
        Password<span className="font-bold">__Copied</span>
      </div>
    </>
  );
}

export default App;
