import type z from "zod";
import type { todosSchema } from "../todos.schema";

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodosResponse {
  todos: ITodo[];
  total: number;
  skip: number;
  limit: number;
}

export type TTodoFormSchema = z.infer<typeof todosSchema>;

export type CreateTodoDto = TTodoFormSchema & {
  userId?: number;
};

export interface ICompletedTodo {
  todo: string;
  completionDate: Date;
}
