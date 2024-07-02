import { useState, useEffect } from "react";
import "./App.css";
//custom hook
const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

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

  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

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
    {list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = ({ item }) => (
  //nested deconstruction
  <li>
    <span>
      <a href={item.url}> {item.title}</a>
    </span>
    <span> {item.author} </span>
    <span> {item.num_comments} </span>
    <span> {item.Itempoints} </span>
  </li>
);
