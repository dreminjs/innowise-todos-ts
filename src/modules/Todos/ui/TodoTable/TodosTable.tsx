import { useGetMyTodos } from "../../api/queries";
import { Table } from "@/components/ui/table";
import { TodosTableHeader } from "./TodosTableHeader";
import { TodosBody } from "./TodosBody";
export const TodosTable = () => {
  const { data, isLoading, isError } = useGetMyTodos();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <Table className="border-separate border-spacing-0 rounded-t-2xl overflow-hidden">
        <TodosTableHeader />
        <TodosBody todos={data?.todos || []} />
      </Table>
    </>
  );
};
