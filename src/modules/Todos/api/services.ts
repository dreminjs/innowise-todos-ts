import { instance } from "@/shared/api/api.instance";
import type { ITodo, ITodosResponse } from "../model/interfaces/todo.interface";

export const findUserTodos = async (userId?: number) => {
  return (await instance.get<ITodosResponse>(`todos/user/${userId}`)).data;
};

export const deleteTodo = async (todoId: number | null) => {
  return (await instance.delete(`todos/${todoId}`)).data;
};

export const updateTodo = async (todoId: number, data: Partial<ITodo>) => {
  return (await instance.put(`todos/${todoId}`, data)).data;
};

export const createTodo = async (
  data: Omit<ITodo, "id" | "userId" | "complete">,
) => {
  return (await instance.post(`todos`, data)).data;
};

export const changeTodoCompleteStatus = async (
  todoId: number,
  completed: boolean,
) => {
  return await updateTodo(todoId, { completed });
};
