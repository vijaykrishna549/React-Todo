import React from "react";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <button
          className="fa-solid fa-trash-can icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        >
          Delete Todo
        </button>
      </span>
    </li>
  );
}

export default TodoList;
