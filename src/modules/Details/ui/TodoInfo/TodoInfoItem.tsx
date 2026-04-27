import { Link } from "@tanstack/react-router";
import DetailsIcon from "@/assets/details-icon.svg";
import type { FC } from "react";

interface ITodoInfoItemProps {
  label: string;
  value: string | number;
}

export const TodoInfoItem: FC<ITodoInfoItemProps> = ({ label, value }) => {
  const displayValue = String(value);
  return (
    <li className="py-4 px-6 basis-47.25 border shrink-0 flex flex-col justify-between rounded-[5px] border-[#CECECE] bg-white">
      <div>
        <span className="text-[#959595] font-medium font-poppins leading-[150%]">
          {label}
        </span>
        <span className="text-[#474747] text-[16px] mb-3 block">
          {displayValue}
        </span>
      </div>
      <Link className="text-[#FB8F42] flex items-center gap-1.5" to=".">
        <span>View details</span>
        <img className="size-2.5" src={DetailsIcon} alt="Details icon" />
      </Link>
    </li>
  );
};
