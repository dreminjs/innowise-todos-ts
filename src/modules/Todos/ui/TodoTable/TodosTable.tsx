import { useGetMyTodos } from "../../api/queries";
import { Table } from "@/components/ui/table";
import { TodosTableHeader } from "./TodosTableHeader";
import { TodosBody } from "./TodosBody";
import { usePagination } from "@/shared";
import { CustomPagination } from "@/components/CustomPagination/CustomPagination";
export const TodosTable = () => {
  const { onChangePage, limit, skip } = usePagination();
  const { data, isLoading, isError } = useGetMyTodos({ skip, limit });

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <div>Error</div>;

  return (
    <>
      <Table className="border-separate border-spacing-0 rounded-t-2xl overflow-hidden">
        <TodosTableHeader />
        <TodosBody todos={data?.todos || []} />
        <CustomPagination
          total={data.total}
          onChangePage={onChangePage}
          limit={limit}
          skip={data.skip}
        />
      </Table>
    </>
  );
};
