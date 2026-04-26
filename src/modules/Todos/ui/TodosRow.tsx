import { TableCell, TableRow } from "@/components/ui/table";
import type { ITodo } from "../model/interfaces/todo.interface";
import type { FC } from "react";
import { TodosActions } from "./TodosActions";

type TTodosRow = ITodo & {
  onSetTodoToDelete: (todoId: number) => void;
};

export const TodosRow: FC<TTodosRow> = ({
  id,
  todo,
  completed,
  onSetTodoToDelete,
}) => {
  return (
    <>
      <TableRow className="p-6">
        <TableCell className="p-6 text-lg">{id}</TableCell>
        <TableCell className="p-6 text-lg">{todo}</TableCell>
        <TableCell className="p-6 text-lg">{completed ? "✅" : "❌"}</TableCell>
        <TableCell className="p-6 text-lg">
          <TodosActions
            completed={completed}
            onSetTodoToDelete={onSetTodoToDelete}
            todoId={id}
          />
        </TableCell>
      </TableRow>
    </>
  );
};
