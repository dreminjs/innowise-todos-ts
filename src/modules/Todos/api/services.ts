import { instance } from "@/shared/api/api.instance";
import type {
  CreateTodoDto,
  ITodo,
  ITodosResponse,
} from "../model/interfaces/todo.interface";
import type { IPaginationDto } from "@/shared";

export const findUserTodos = async (dto: IPaginationDto, userId?: number) => {
  return (
    await instance.get<ITodosResponse>(
      `todos/user/${userId}?skip=${dto.skip}&limit=${dto.limit}`,
    )
  ).data;
};

export const deleteTodo = async (todoId: number | null) => {
  return (await instance.delete(`todos/${todoId}`)).data;
};

export const updateTodo = async (todoId: number, data: Partial<ITodo>) => {
  return (await instance.put(`todos/${todoId}`, data)).data;
};

export const createTodo = async (data: CreateTodoDto) => {
  return (await instance.post(`todos/add`, data)).data;
};

export const changeTodoCompleteStatus = async (
  todoId: number,
  completed: boolean,
) => {
  return await updateTodo(todoId, { completed });
};

export const findOneTodo = async (todoId: number) => {
  return (await instance.get<ITodo>(`todos/${todoId}`)).data;
};
