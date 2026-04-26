import { useMutation, useQuery } from "@tanstack/react-query";
import {
  changeTodoCompleteStatus,
  deleteTodo,
  findUserTodos,
} from "./services";
import { TODOS_QUERY_KEYS } from "../model/todos.constants";
import { useGetCurrentUser } from "@/modules/Users";
import { useNotificationsSlice } from "@/modules/Notifications/model/notification.slice";

export const useGetMyTodos = () => {
  const userId = useGetCurrentUser("id");

  return useQuery({
    queryKey: TODOS_QUERY_KEYS.todos(userId),
    queryFn: () => findUserTodos(userId),
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
