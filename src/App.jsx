import { useState, useEffect, cloneElement } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
//custom hook
const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

// Drag and drop
const INITIAL_LIST = [
  {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
  },
  {
    id: "2",
    firstName: "Aiden",
    lastName: "Kettel",
  },
  {
    id: "3",
    firstName: "Jannet",
    lastName: "Layn",
  },
];
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

  // dropdown

  const handleMenuOne = () => {
    // do something
    console.log("Clicked one");
  };

  const handleMenuTwo = () => {
    // do something
    console.log("Clicked two");
  };

  const [checked, setChecked] = useState(false);
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

  const handleChangeChk = () => {
    setChecked(!checked);
  };

  {
    /* Drag and drop */
  }
  const [list, setList] = useState(INITIAL_LIST);
  const handleDragEnd = ({ destination, source }) => {
    //reorder list
    if (!destination) return;

    setList(reorder(list, source.index, destination.index));
  };

  return (
    <>
      <h1>My hacker Stories</h1>
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
        >
          <strong>Search:</strong>
        </InputWithLabel>
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
      // Checkbox
      <div>
        <Checkbox label="My Value" value={checked} onChange={handleChangeChk} />

        <p>Is "My Value" checked? {checked.toString()}</p>
      </div>
      //Drag and drop
      <div>
        <ListDnD list={list} onDragEnd={handleDragEnd} />
      </div>
      // Dropdown2
      <Dropdown
        trigger={<button>Dropdown</button>}
        menu={[
          <button onClick={handleMenuOne}>Menu 1</button>,
          <button onClick={handleMenuTwo}>Menu 2</button>,
        ]}
      />
    </>
  );
};

export default App;

const ItemDnD = ({ index, item }) => (
  <Draggable index={index} draggableId={item.id}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        {item.firstName} {item.lastName}
      </div>
    )}
  </Draggable>
);

const ListDnD = ({ list, onDragEnd }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="droppable">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {list.map((item, index) => (
            <ItemDnD key={item.id} index={index} item={item} />
          ))}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

const Dropdown = ({ trigger, menu }) => {
  const [openDrp, setOpenDrp] = useState(false);

  const handleOpenDrp = () => {
    setOpenDrp(!openDrp);
  };
  return (
    <div className="dropdown">
      {cloneElement(trigger, {
        onClick: handleOpenDrp,
      })}
      {setOpenDrp ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpenDrp(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

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

const InputWithLabel = ({ id, value, type = "text", onInputChange, children }) => (
  <>
    <label htmlFor={id}>{children}</label>
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
