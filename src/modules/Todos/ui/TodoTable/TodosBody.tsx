import { TableBody } from "@/components/ui/table";
import type { ITodo } from "../../model/interfaces/todo.interface";
import { TodosRow } from "./TodosRow";
import { useDeleteTodoModal } from "../../model/hooks/useDeleteTodoModal";
import { DeleteTodoModal } from "../DeleteTodoModal";
import type { FC } from "react";

interface ITodosBodyProps {
  todos: ITodo[];
}

export const TodosBody: FC<ITodosBodyProps> = ({ todos }) => {
  const { todoId, onCancelDelete, onSetTodoToDelete } = useDeleteTodoModal();
  return (
    <>
      <TableBody>
        {todos.map((el) => (
          <TodosRow
            onSetTodoToDelete={onSetTodoToDelete}
            key={crypto.randomUUID()}
            {...el}
          />
        ))}
      </TableBody>
      <DeleteTodoModal onCancel={onCancelDelete} todoId={todoId} />
    </>
  );
};
