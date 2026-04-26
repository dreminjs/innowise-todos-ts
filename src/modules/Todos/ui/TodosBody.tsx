import { TableBody } from "@/components/ui/table";
import type { ITodo } from "../model/interfaces/todo.interface";
import { TodosRow } from "./TodosRow";
import type { FC } from "react";

interface ITodosBodyProps {
  todos: ITodo[];
}

export const TodosBody: FC<ITodosBodyProps> = ({ todos }) => {
  return (
    <>
      <TableBody>
        {todos.map((el) => (
          <TodosRow key={crypto.randomUUID()} {...el} />
        ))}
      </TableBody>
    </>
  );
};
