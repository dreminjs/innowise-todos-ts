import { z } from "zod";

export const todosSchema = z.object({
  todo: z.string(),
});
