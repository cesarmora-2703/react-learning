import { useState } from "react";
import "./App.css";

// arrow function expression refactring
const App = () => {
  console.log("App component renders");

  const stories = [
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

  return (
    <>
      <h1>
        {getText(sayHello.greet)} The road to {sayHello.title}
      </h1>
      <h1>My hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </>
  );
};

export default App;

const sayHello = {
  greet: "Hello world",
  title: "React",
};

const getText = (text) => {
  return text;
};

const List = (props) => {
  console.log("List component renders");
  //with explicit return
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul> )
};


const Item = (props) => {
  console.log("Item component renders");
  //with implicit return
  return(
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span> {props.item.author} </span>
    <span> {props.item.num_comments} </span>
    <span> {props.item.points} </span>
  </li>)
}


const Search = () => {
  console.log("Search component renders");
  
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <label htmlFor="Search">Search: </label>
      <input id="search" type="text"
       placeholder="Fill the data" onChange={handleChange}/>
      <p>
        Searching for: <strong>{searchTerm}</strong>
      </p>
    </>
  )
}
