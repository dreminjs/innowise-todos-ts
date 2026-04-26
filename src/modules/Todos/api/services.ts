import { instance } from "@/shared/api/api.instance";
import type { ITodosResponse } from "../model/interfaces/todo.interface";

export const findUserTodos = async (userId?: number) => {
  return (await instance.get<ITodosResponse>(`todos/user/${userId}`)).data;
};
