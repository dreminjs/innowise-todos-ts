import { TableCell, TableRow } from "@/components/ui/table";
import type { ITodo } from "../model/interfaces/todo.interface";
import type { FC } from "react";

type TTodosRow = ITodo;

export const TodosRow: FC<TTodosRow> = ({ id, todo, completed }) => {
  return (
    <>
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{todo}</TableCell>
        <TableCell>{completed ? "✅" : "❌"}</TableCell>
      </TableRow>
    </>
  );
};
