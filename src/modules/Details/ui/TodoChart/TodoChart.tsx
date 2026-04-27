import { useMemo } from "react";
import { useGetChartData } from "../../api/queries";
import { useTimeFrame } from "../../model/useTimeFrame";
import { CustomChart } from "./CustomChart";
import { TodoChartHeader } from "./TodoChartHeader";

export const TodoChart = () => {
  const { timeFrame, handleToggleTimeFrame } = useTimeFrame();
  const { data } = useGetChartData();
  const displayedValue = useMemo(() => {
    return timeFrame === "days" ? data?.days : data?.month;
  }, [timeFrame, data?.days, data?.month]);

  return (
    <div className="border-2 border-[#CECECE] rounded-[5px] w-full max-w-150 pb-4">
      <TodoChartHeader timeFrame={timeFrame} onToggle={handleToggleTimeFrame} />
      <CustomChart data={displayedValue || []} />
      <p className="text-center before:inline-block before:mr-2 before:size-2.5 before:bg-[#5DD749] before:content-[''] before:rounded-full">
        {data?.tooltip.format}
      </p>
    </div>
  );
};
