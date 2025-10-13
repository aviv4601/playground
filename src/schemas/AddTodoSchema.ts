import z from "zod";

export const TodoItemSchema = z.object({
  id: z.string(),
  text: z.string().min(2),
  completed: z.boolean(),
  createdAt: z.date(),
  priority: z.string().min(2),
});

export type TodoItemType = z.infer<typeof TodoItemSchema>;
