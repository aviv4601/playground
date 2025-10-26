import { useRef, useState } from "react";
import { TodoItemSchema, TodoItemType } from "../schemas/AddTodoSchema";
import classes from "./AddTodoForm.module.css";

type AddTodoFormProps = {
  todoList: TodoItemType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export const AddTodoForm = (props: AddTodoFormProps) => {
  const textRef = useRef<HTMLInputElement>(null);
  const priorityRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TodoItemType, string>>
  >({});
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      text: textRef.current?.value || "",
      priority: priorityRef.current?.value || "",
      id: Math.random().toString(),
      completed: false,
      createdAt: new Date(),
    };

    const result = TodoItemSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof TodoItemType, string>> = {};
      result.error.issues.forEach((error) => {
        const field = error.path[0] as keyof TodoItemType;
        if (field && !fieldErrors[field]) {
          fieldErrors[field] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    props.setTodoList([...props.todoList, formData]);

    if (textRef.current) textRef.current.value = "";
    if (priorityRef.current) priorityRef.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <h3>Add Todo</h3>
      <div>
        <label htmlFor="text">Add Text</label>
        <input type="text" id="text" ref={textRef}></input>
        {errors.text && <span className="error">{errors.text}</span>}
      </div>
      <div>
        <label htmlFor="text">Add Priority</label>
        <input type="text" id="priority" ref={priorityRef}></input>
        {errors.priority && <span className="error">{errors.priority}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
