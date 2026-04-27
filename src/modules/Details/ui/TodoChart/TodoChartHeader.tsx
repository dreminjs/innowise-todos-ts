import type { FC } from "react";
import type { TTimeFrame } from "../../model/details.interface";
import { TimeFrameToggle } from "./TimeFrameToggle";

interface ITodoChartHeaderProps {
  timeFrame: TTimeFrame;
  onToggle: () => void;
}

export const TodoChartHeader: FC<ITodoChartHeaderProps> = ({
  timeFrame,
  onToggle,
}) => {
  return (
    <header className="p-8 flex items-center justify-between border-[#CECECE] border-b-2">
      <h3 className="text-[#6B6B6B] md:text-[20px] font-semibold leadning-[45px]">
        Todo Statistics
      </h3>
      <TimeFrameToggle timeFrame={timeFrame} onToggle={onToggle} />
    </header>
  );
};
