import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { todosHeaderData } from "../model/todos.data";
import clsx from "clsx";

export const TodosTableHeader = () => {
  return (
    <TableHeader>
      <TableRow className="bg-[#FFF4F2]">
        {todosHeaderData.map((el, idx) => (
          <TableHead
            className={clsx(
              "p-5.75 text-[16px] font-medium leading-4.5",
              idx === 0 && "rounded-tl-2xl",
              idx === todosHeaderData.length - 1 && "rounded-tr-2xl",
            )}
          >
            {el}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
