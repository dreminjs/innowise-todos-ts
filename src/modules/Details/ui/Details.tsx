import { TodoChart } from "./TodoChart/TodoChart";
import { TodoInfo } from "./TodoInfo/TodoInfo";
import { TodoTable } from "./TodoTable/TodoTable";

export const Details = () => {
  return (
    <div className="p-8 bg-[#FAFAFA] border-[#D6D6D6] border rounded-tr-[10px] rounded-tl-[10px]">
      <TodoInfo />
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <TodoChart />
        <TodoTable />
      </div>
    </div>
  );
};
