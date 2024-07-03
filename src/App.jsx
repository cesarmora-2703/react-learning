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

  const [value, setValue] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const handleOpen = () => {
    setCount(count + 1);
    setOpen(true);
  };

  const handleClose = () => {
    setCount(count - 1);
    setOpen(false);
  };

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <>
      <h1>My hacker Stories</h1>
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />
      <hr />
      <List list={searchedStories} />
      // Button
      <div>
        <Button onClick={handleOpen}>Open</Button>
        <Button onClick={handleClose}>Close</Button>
        {count} {isOpen ? <div> Open </div> : <div> Close </div>}
      </div>
      // Radio button
      <div>
        <RadioButton label="Cat" value={value} onChange={handleChange} />
      </div>
    </>
  );
};

export default App;

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const Button = ({ type = "button", onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

const InputWithLabel = ({ id, label, type = "text", value, onInputChange }) => (
  <>
    <label htmlFor={id}>{label}: </label>
    &nbsp;
    <input id={id} type={type} value={value} onChange={onInputChange} />
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
