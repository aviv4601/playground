import { useState } from "react";
import { TodoItemType } from "../schemas/AddTodoSchema";
import { AddTodoForm } from "./AddTodoForm";
import { TodoItem } from "./TodoItem";
import classes from "./TodoList.module.css";

type TodoListProps = {
  theme: string;
};
const todos: TodoItemType[] = [
  {
    id: "1",
    text: "Complete TypeScript project",
    completed: false,
    createdAt: new Date("2025-10-10"),
    priority: "high",
  },
  {
    id: "2",
    text: "Review pull requests",
    completed: true,
    createdAt: new Date("2025-10-09"),
    priority: "medium",
  },
  {
    id: "3",
    text: "Update documentation",
    completed: false,
    createdAt: new Date("2025-10-11"),
    priority: "low",
  },
  {
    id: "4",
    text: "Fix React component bugs",
    completed: false,
    createdAt: new Date("2025-10-11"),
    priority: "high",
  },
  {
    id: "5",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "6",
    text: "Complete TypeScript project",
    completed: false,
    createdAt: new Date("2025-10-10"),
    priority: "high",
  },
  {
    id: "7",
    text: "Review pull requests",
    completed: true,
    createdAt: new Date("2025-10-09"),
    priority: "medium",
  },
  {
    id: "8",
    text: "Update documentation",
    completed: false,
    createdAt: new Date("2025-10-11"),
    priority: "low",
  },
  {
    id: "9",
    text: "Fix React component bugs",
    completed: false,
    createdAt: new Date("2025-10-11"),
    priority: "high",
  },
  {
    id: "f",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "e",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "10",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "11",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "12",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "13",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "17",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "14",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
  {
    id: "15",
    text: "Write unit tests",
    completed: false,
    createdAt: new Date("2025-10-08"),
    priority: "medium",
  },
];

export const TodoList = ({ theme }: TodoListProps) => {
  const [todoList, setTodoList] = useState<TodoItemType[]>(todos);

  return (
    <>
      {" "}
      <ul className={classes.container}>
        {todoList.map((todo) => (
          <TodoItem
            theme={theme}
            key={todo.id}
            todoItem={todo}
            setTodoList={setTodoList}
          ></TodoItem>
        ))}
      </ul>
      <AddTodoForm setTodoList={setTodoList} todoList={todoList}></AddTodoForm>
    </>
  );
};
