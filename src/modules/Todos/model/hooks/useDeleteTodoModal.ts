import { useState } from "react";

export const useDeleteTodoModal = () => {
  const [todoId, setTodoId] = useState<number | null>(null);

  return {
    todoId,
    onSetTodoToDelete: (id: number) => setTodoId(id),
    onCancelDelete: () => setTodoId(null),
  };
};
