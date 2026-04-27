import { useGetDetails } from "../../api/queries";
import { TodoInfoItem } from "./TodoInfoItem";

export const TodoInfo = () => {
  const { data, isLoading, isError } = useGetDetails();

  if (isLoading) return <div>Loading...</div>;
  if (!data || isError) return <div>Error</div>;

  return (
    <ul className="flex gap-4 w-full overflow-x-auto mb-4">
      <TodoInfoItem label="Username" value={data.username} />
      <TodoInfoItem label="Count Done Tasks" value={data.countDoneTasks} />
      <TodoInfoItem label="Avg Done Tasks ADay" value={data.avgDoneTasksADay} />
      <TodoInfoItem
        label="Avg Hours For Complete Task"
        value={data.avgHoursForCompleteTask}
      />
      <TodoInfoItem label="Count Undone Tasks" value={data.countUndoneTasks} />
      <TodoInfoItem
        label="Count Overdue Tasks"
        value={data.countOverdueTasks}
      />
    </ul>
  );
};
