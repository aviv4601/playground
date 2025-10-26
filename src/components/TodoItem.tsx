import React from "react";
import { TodoItemType } from "../schemas/AddTodoSchema";
import classes from "./TodoItem.module.css";
import { Card } from "./UI/Card";

export type TodoItemProps = {
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
    <Card>
      <div>{props.todoItem.text}</div>
      <div>{props.todoItem.priority}</div>
      <div>{props.todoItem.completed}</div>
      <div>{props.todoItem.createdAt.toDateString()}</div>
      <button onClick={removeHandler} className={classes.button}>
        Remove
      </button>
    </Card>
  );
};
