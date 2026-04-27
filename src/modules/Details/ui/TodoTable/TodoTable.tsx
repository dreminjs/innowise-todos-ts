import { Table } from "@/components/ui/table";
import { TodoTableHeader } from "./TodoTableHeader";
import { TodoBody } from "./TodoBody";

export const TodoTable = () => {
  return (
    <div className="overflow-y-auto w-full h-125 border-[#CECECE] border-2 rounded-[5px]">
      <Table className="h-50">
        <TodoTableHeader />
        <TodoBody />
      </Table>
    </div>
  );
};
