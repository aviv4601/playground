import z from "zod";

export const TodoItemSchema = z.object({
  id: z.string(),
  text: z.string().min(2, { error: "Too short!" }),
  completed: z.boolean(),
  createdAt: z.date(),
  priority: z.string().min(2, { error: "Too short!" }),
});

export type TodoItemType = z.infer<typeof TodoItemSchema>;
