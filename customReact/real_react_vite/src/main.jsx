import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Understanding React BTS</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Clisk me to visit Google!",
// }

const another = "- Learning Chai aur Code at Youtube"

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "blank" },
  "Click me to visit Google!",
  another,
)

const anotherElement = (
    <a href="https://www.google.com">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById("root")).render(
  // anotherElement
  reactElement
);
