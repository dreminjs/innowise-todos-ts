import { useForm } from "react-hook-form";
import { TodoField } from "./TodoField";
import { zodResolver } from "@hookform/resolvers/zod";
import { todosSchema } from "../model/todos.schema";
import { usePostTodo } from "../api/queries";
import type { TTodoFormSchema } from "../model/interfaces/todo.interface";
import { TodoFormLayout } from "./TodoFormLayout";

export const CreateTodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TTodoFormSchema>({
    resolver: zodResolver(todosSchema),
  });

  const { mutate, isPending } = usePostTodo();

  const onSubmit = (data: TTodoFormSchema) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <TodoFormLayout isLoading={isPending} onSubmit={handleSubmit(onSubmit)}>
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
