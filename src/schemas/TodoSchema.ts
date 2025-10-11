import z from "zod";

const TodoSchema = z.object({
  id: z.string(),
  text: z.string().min(1, "Text is required"),
  completed: z.boolean(),
  createdAt: z.date(),
  priority: z.enum(["low", "medium", "high"]),
});

export type TodoItemType = z.infer<typeof TodoSchema>;
