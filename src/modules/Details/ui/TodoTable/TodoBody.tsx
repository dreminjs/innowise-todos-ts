import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useGetCompletedTodos } from "../../api/queries";

export const TodoBody = () => {
  const { data, isLoading, isError } = useGetCompletedTodos();

  if (!data || isError) return <p>Error</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <TableBody className="overflow-y-scroll min-h-[300px]">
      {data.data.map((el) => (
        <TableRow key={String(el.completionDate)}>
          <TableCell className="p-5 text-[#565656] text-4">{el.todo}</TableCell>
          <TableCell className="p-5 text-[#565656] text-4">
            {new Date(el.completionDate).toLocaleDateString()}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
