import { useGetTodo } from "../api/queries";
import { getRouteApi } from "@tanstack/react-router";
import { UpdateTodoForm } from "../ui/UpdateTodoForm";
const routeApi = getRouteApi("/protected/todos/$todoId/edit");

const EditTodoPage = () => {
  const params = routeApi.useParams();
  const { data: todo, isLoading, isError } = useGetTodo(Number(params.todoId));
  if (isLoading) return <div>Loading...</div>;
  if (isError || !todo) return <div>Error</div>;
  return (
    <div>
      <h3 className="page-title">Edit Todo</h3>
      <UpdateTodoForm todo={todo.todo} todoId={Number(params.todoId)} />
    </div>
  );
};

export default EditTodoPage;
