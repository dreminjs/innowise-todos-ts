import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeleteTodo } from "../api/queries";
import type { FC } from "react";

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
