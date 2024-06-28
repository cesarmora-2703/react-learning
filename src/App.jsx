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
      <h1>My hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </>
  );
};

export default App;

const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="Search">Search: </label>
    <input
      id="search"
      type="text"
      placeholder="Fill the data"
      value={search}
      onChange={onSearch}
    />
  </>
);

const List = ({ list }) => (
  <ul>
    {" "}
    {/* rest operator*/}
    {list.map(({ objectID, ...item }) => (
      <Item
        key={item.objectID}
        {...item} // spread operator
      />
    ))}
  </ul>
);

const Item = ({ title, url, author, num_comments, points }) => (
  //nested deconstruction
  <li>
    <span>
      <a href={url}> {title}</a>
    </span>
    <span> {author} </span>
    <span> {num_comments} </span>
    <span> {points} </span>
  </li>
);
