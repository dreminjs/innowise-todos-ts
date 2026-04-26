import { useParams } from "@tanstack/react-router";
import { useGetTodo } from "../api/queries";
import { UpdateTodoForm } from "../ui/UpdateTodoForm";

const EditTodoPage = () => {
  const { todoId } = useParams({ from: "/protected/todos/$todoId/edit" });
  const { data: todo, isLoading, isError } = useGetTodo(Number(todoId));
  if (isLoading) return <div>Loading...</div>;
  if (isError || !todo) return <div>Error</div>;
  return (
    <div>
      <h3 className="page-title">Edit Todo</h3>
      <UpdateTodoForm todo={todo.todo} todoId={Number(todoId)} />
    </div>
  );
};

export default EditTodoPage;
