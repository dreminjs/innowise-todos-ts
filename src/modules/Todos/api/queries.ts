import { useMutation, useQuery } from "@tanstack/react-query";
import {
  changeTodoCompleteStatus,
  createTodo,
  deleteTodo,
  findOneTodo,
  findUserTodos,
  updateTodo,
} from "./services";
import { TODOS_QUERY_KEYS } from "../model/todos.constants";
import { useGetCurrentUser } from "@/modules/Users";
import { useNotificationsSlice } from "@/modules/Notifications/model/notification.slice";
import type { TTodoFormSchema } from "../model/interfaces/todo.interface";
import type { IPaginationDto } from "@/shared";

export const useGetMyTodos = (dto: IPaginationDto) => {
  const userId = useGetCurrentUser("id");

  return useQuery({
    queryKey: TODOS_QUERY_KEYS.todos(userId),
    queryFn: () => findUserTodos(dto, userId),
  });
};

export const useUpdateTodo = (todoId: number) => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  return useMutation({
    mutationFn: (dto: TTodoFormSchema) => updateTodo(todoId, dto),
    onSuccess: () => {
      addNotification({
        type: "success",
        message: "Todo updated successfully",
      });
    },
    onError: () => {
      addNotification({
        type: "error",
        message: "Failed to update todo",
      });
    },
  });
};

export const usePostTodo = () => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  const userId = useGetCurrentUser("id");

  return useMutation({
    mutationFn: (dto: TTodoFormSchema) => createTodo({ ...dto, userId }),
    onSuccess: () => {
      addNotification({
        type: "success",
        message: "Todo created successfully",
      });
    },
    onError: () => {
      addNotification({
        type: "error",
        message: "Failed to create todo",
      });
    },
  });
};

export const useDeleteTodo = ({
  todoId,
  onCancel,
}: {
  todoId: number | null;
  onCancel: () => void;
}) => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  return useMutation({
    mutationKey: TODOS_QUERY_KEYS.todos(todoId || 0),
    mutationFn: () => {
      return deleteTodo(todoId);
    },
    onSuccess: () => {
      addNotification({
        type: "success",
        message: "Todo deleted successfully",
      });
      onCancel();
    },
    onError: (error) => {
      addNotification({
        type: "error",
        message: error.message,
      });
    },
  });
};

export const useChangeTodoCompleteStatus = (
  todoId: number,
  completed: boolean,
) => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  return useMutation({
    mutationKey: TODOS_QUERY_KEYS.todos(todoId),
    mutationFn: () => changeTodoCompleteStatus(todoId, completed),
    onSuccess: () => {
      addNotification({
        type: "success",
        message: "Todo status updated successfully",
      });
    },
    onError: (error) => {
      addNotification({
        type: "error",
        message: error.message,
      });
    },
  });
};

export const useGetTodo = (todoId: number) => {
  return useQuery({
    queryKey: TODOS_QUERY_KEYS.todos(todoId),
    queryFn: () => findOneTodo(todoId),
  });
};
