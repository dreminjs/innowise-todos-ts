import { useQuery } from "@tanstack/react-query";
import { findUserTodos } from "./services";
import { TODOS_QUERY_KEYS } from "../model/todos.constants";
import { useGetCurrentUser } from "@/modules/Users";

export const useGetMyTodos = () => {
  const userId = useGetCurrentUser("id");

  return useQuery({
    queryKey: TODOS_QUERY_KEYS.todos(userId),
    queryFn: () => findUserTodos(userId),
    select: (data) => data.data.todos,
    enabled: !!userId,
  });
};
