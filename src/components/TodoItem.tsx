import React from "react";
import { TodoItemType } from "../schemas/AddTodoSchema";

type TodoItemProps = {
  todoItem: TodoItemType;
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export const TodoItem = (props: TodoItemProps) => {
  const removeHandler = () => {
    props.setTodoList((prevList) => {
      return prevList.filter((todo) => todo.id !== props.todoItem.id);
    });
  };
  return (
    <div>
      <li>
        <div>{props.todoItem.text}</div>
        <div>{props.todoItem.priority}</div>
        <div>{props.todoItem.completed}</div>
        <div>{props.todoItem.createdAt.toDateString()}</div>
      </li>
      <div>
        <button onClick={removeHandler}>Remove</button>
      </div>
    </div>
  );
};
