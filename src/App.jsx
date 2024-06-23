import { useState } from "react";
import "./App.css";

const sayHello = {
  greet: "Hello world",
  title: "React",
}

function getText(text){
  return text;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{getText(sayHello.greet)} The road to {sayHello.title}</h1>
      <input placeholder="Fill the data" />
      <button
        onClick={(e) => {
          console.log(e.target.value);
        }}
      >
        Save data
      </button>
    </>
  );
}

export default App;
