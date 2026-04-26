import type { FC } from "react";
import { Check, CircleX, Pencil, Redo2 } from "lucide-react";
import { useChangeTodoCompleteStatus } from "../../api/queries";
import { Link } from "@tanstack/react-router";

interface ITodosActionsProps {
  todoId: number;
  onSetTodoToDelete: (todoId: number) => void;
  completed: boolean;
}
export const TodosActions: FC<ITodosActionsProps> = ({
  todoId,
  onSetTodoToDelete,
  completed,
}) => {
  const { mutate } = useChangeTodoCompleteStatus(todoId, completed);

  return (
    <div className="flex gap-3">
      <button
        onClick={() => onSetTodoToDelete(todoId)}
        className="todo-action-button"
      >
        <CircleX color="white" />
      </button>
      <Link to={`/todos/${todoId}/edit`} className="todo-action-button">
        <Pencil color="white" />
      </Link>
      <button onClick={() => mutate()} className="todo-action-button">
        {completed ? <Redo2 color="white" /> : <Check color="white" />}
      </button>
    </div>
  );
};
