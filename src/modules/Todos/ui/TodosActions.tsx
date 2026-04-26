import type { FC } from "react";
import { Check, CircleX, Pencil, Redo2 } from "lucide-react";
import { useChangeTodoCompleteStatus } from "../api/queries";

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
    <div className="flex gap-[12px]">
      <button
        onClick={() => onSetTodoToDelete(todoId)}
        className="p-1.5 bg-linear-to-tl from-[#EDD098] via-[#F1804F] to-[#EEC595] rounded-[5px]"
      >
        <CircleX color="white" />
      </button>
      <button className="p-1.5 bg-linear-to-tl from-[#EDD098] via-[#F1804F] to-[#EEC595] rounded-[5px]">
        <Pencil color="white" />
      </button>
      <button
        onClick={() => mutate()}
        className="p-1.5 bg-linear-to-tl from-[#EDD098] via-[#F1804F] to-[#EEC595] rounded-[5px]"
      >
        {completed ? <Redo2 color="white" /> : <Check color="white" />}
      </button>
    </div>
  );
};
