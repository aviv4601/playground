import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TodoItemSchema, TodoItemType } from "../schemas/AddTodoSchema";
import classes from "./AddTodoForm.module.css";

type AddTodoFormProps = {
  todoList: TodoItemType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export const AddTodoForm = (props: AddTodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoItemType>({
    resolver: zodResolver(TodoItemSchema),
    defaultValues: {
      text: "",
      completed: false,
      id: Math.random().toString(),
      createdAt: new Date(),
      priority: "",
    },
  });

  const onSubmit = (data: TodoItemType) => {
    console.log("Todo data", data);
    props.setTodoList([...props.todoList, data]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h3>Add Todo</h3>
      <div className={classes.formField}>
        <div>
          <label htmlFor="text">Add Text: </label>
          <input type="text" id="text" {...register("text")}></input>
        </div>
        {errors.text && (
          <span
            className={classes.error}
          >{`Text is ${errors.text.message}`}</span>
        )}
      </div>
      <div className={classes.formField}>
        <div>
          <label htmlFor="text">Add Priority: </label>
          <input type="text" id="priority" {...register("priority")}></input>
        </div>
        {errors.priority && (
          <span
            className={classes.error}
          >{`Priority is ${errors.priority.message}`}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
