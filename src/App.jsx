import { useState } from "react";
import "./App.css";

// arrow function expression refactring
const App = () => {
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

  const [searchTerm, setSearchTerm] = useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>
        {getText(sayHello.greet)} The road to {sayHello.title}
      </h1>
      <h1>My hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
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
  //with explicit return
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
};

const Item = (props) => {
  //with implicit return
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span> {props.item.author} </span>
      <span> {props.item.num_comments} </span>
      <span> {props.item.points} </span>
    </li>
  );
};

const Search = (props) => {
  return (
    <>
      <label htmlFor="Search">Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Fill the data"
        value={props.search}
        onChange={props.onSearch}
      />
    </>
  );
};
