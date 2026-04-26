import { zodResolver } from "@hookform/resolvers/zod";
import { todosSchema } from "../model/todos.schema";
import { useForm } from "react-hook-form";
import { TodoField } from "./TodoField";
import { TodoFormLayout } from "./TodoFormLayout";
import { useUpdateTodo } from "../api/queries";
import type { TTodoFormSchema } from "../model/interfaces/todo.interface";
import type { FC } from "react";

interface IUpdateTodoFormProps {
  todoId: number;
  todo: string;
}

export const UpdateTodoForm: FC<IUpdateTodoFormProps> = ({ todoId, todo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTodoFormSchema>({
    resolver: zodResolver(todosSchema),
    defaultValues: { todo },
  });

  const { mutate, isPending } = useUpdateTodo(todoId);

  const onSubmit = (data: TTodoFormSchema) => {
    mutate(data);
  };

  return (
    <TodoFormLayout onSubmit={handleSubmit(onSubmit)} isLoading={isPending}>
      <TodoField
        id={"todo"}
        label={"Todo"}
        register={register}
        error={errors.todo?.message || ""}
        name={"todo"}
      />
    </TodoFormLayout>
  );
};
