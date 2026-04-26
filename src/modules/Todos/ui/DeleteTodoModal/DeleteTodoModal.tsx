import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Button } from "@base-ui/react";
import type { FC } from "react";
import { useDeleteTodo } from "../../api/queries";

interface IDeleteTodoModalProps {
  todoId: number | null;
  onCancel: () => void;
}

export const DeleteTodoModal: FC<IDeleteTodoModalProps> = ({
  todoId,
  onCancel,
}) => {
  const { mutate, isPending } = useDeleteTodo({ todoId, onCancel });

  return (
    <AlertDialog open={Boolean(todoId)}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            todo.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isPending} onClick={() => mutate()}>
            {isPending ? "Loading..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
