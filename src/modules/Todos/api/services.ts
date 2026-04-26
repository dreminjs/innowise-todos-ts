import { instance } from "@/shared/api/api.instance";
import type { ITodosResponse } from "../model/interfaces/todo.interface";

export const findUserTodos = (userId?: number) => {
  return instance.get<ITodosResponse>(`todos/${userId}`);
};
