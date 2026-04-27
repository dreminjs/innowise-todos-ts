import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import type { FC } from "react";

type TCustomChartProps = {
  data: {
    month: string;
    desktop: number;
  }[];
};

export const CustomChart: FC<TCustomChartProps> = ({ data }) => {
  const chartConfig = {
    desktop: {
      color: "#FB8F42",
    },
  } satisfies ChartConfig;
  return (
    <div>
      <ChartContainer className="mb-4 " config={chartConfig}>
        <LineChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
};
