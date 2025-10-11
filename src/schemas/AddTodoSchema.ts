import z from "zod";

const AddTodoSchema = z.object({
  id: z.string(),
  text: z.string(),
  completed: z.boolean(),
  createdAt: z.date(),
  priority: z.enum(["low", "medium", "high"]),
});
