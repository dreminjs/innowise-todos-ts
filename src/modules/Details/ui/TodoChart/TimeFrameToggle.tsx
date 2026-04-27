import type { FC } from "react";
import type { TTimeFrame } from "../../model/details.interface";
import clsx from "clsx";

interface ITimeFrameToggleProps {
  timeFrame: TTimeFrame;
  onToggle: () => void;
}

export const TimeFrameToggle: FC<ITimeFrameToggleProps> = ({
  timeFrame,
  onToggle,
}) => {
  const classes =
    "px-[10px] md:px-[17px] py-[8px] font-poppins font-semibold leading-[18px] text-[#414141]";

  const isActive = "bg-[#FB8F42] text-white";
  return (
    <div className="flex">
      <button
        className={clsx(
          classes,
          "rounded-tl-[10px] rounded-bl-[10px]",
          timeFrame === "days" ? isActive : "border-[#C0C0C0] border",
        )}
        onClick={onToggle}
      >
        Days
      </button>
      <button
        className={clsx(
          classes,
          "rounded-tr-[10px] rounded-br-[10px]",
          timeFrame === "months" ? isActive : "border-[#C0C0C0] border",
        )}
        onClick={onToggle}
      >
        Month
      </button>
    </div>
  );
};
