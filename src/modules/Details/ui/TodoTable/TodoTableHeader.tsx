import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const TodoTableHeader = () => {
  return (
    <TableHeader className="bg-[#FFF4F2] ">
      <TableRow>
        <TableHead
          className={
            "p-5.75 text-[16px] font-medium leading-4.5 rounded-tl-2xl"
          }
        >
          Completion date
        </TableHead>
        <TableHead className="p-5.75 text-[16px] font-medium leading-4.5 rounded-tr-2xl">
          Todo
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};
