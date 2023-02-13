import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todos(props) {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      {props.value}
      <div className="center-container">
        <TodoInput addList={addList} />

        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
}

export default Todos;
