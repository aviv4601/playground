import { useState } from "react";
import { TodoItem, TodoItemType } from "./TodoItem";

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
];

export const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>(todos);

  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          setTodoList={setTodoList}
        ></TodoItem>
      ))}
    </ul>
  );
};
