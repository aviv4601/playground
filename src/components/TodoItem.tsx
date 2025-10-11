import React from "react";
import { AddTodoForm } from "./AddTodoForm";

export type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  priority: string;
};

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
        <AddTodoForm></AddTodoForm>
      </div>
    </div>
  );
};
