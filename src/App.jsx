import { useState } from "react";
import "./App.css";

const sayHello = {
  greet: "Hello world",
  title: "React",
};

const list1 = [
  {
    title: "React",
    url: "https://react.js.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function getText(text) {
  return text;
}

function List() {
  return (
    <div>
      <ul>
        {list1.map(function (item) {
          return (
            <>
              <li key={item.objectID}>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span> {item.author} </span>
                <span> {item.num_comments} </span>
                <span> {item.points} </span>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

function Search() {
  return (
<div>
        <button
          onClick={(e) => {
            console.log(e.target.value);
          }}
        >
          Save data
        </button>
      </div>
  )
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        {getText(sayHello.greet)} The road to {sayHello.title}
      </h1>
      <h1>My hacker Stories</h1>
      <label htmlFor="Search">Search: </label>
      <input id="search" type="text" placeholder="Fill the data" />
      <hr />
      <List />
      <Search />
    </>
  );
}

export default App;
