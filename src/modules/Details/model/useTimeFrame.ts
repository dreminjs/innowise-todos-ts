import { useState } from "react";
import type { TTimeFrame } from "./details.interface";

export const useTimeFrame = () => {
  const [timeFrame, setTimeFrame] = useState<TTimeFrame>("days");

  const handleToggleTimeFrame = () => {
    setTimeFrame(timeFrame === "days" ? "months" : "days");
  };

  return {
    timeFrame,
    handleToggleTimeFrame,
  };
};
