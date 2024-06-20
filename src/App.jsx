import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>The road to react</h1>
      <input placeholder="Fill the data" />
      <button
        onClick={(e) => {
          console.log(e.target.value);
        }}
      >
        Save
      </button>
    </>
  );
}

export default App;
