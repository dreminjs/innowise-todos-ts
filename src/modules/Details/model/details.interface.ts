import type { ICompletedTodo } from "@/modules/Todos/";

export interface IDetails {
  username: string;
  countDoneTasks: number;
  avgDoneTasksADay: number;
  avgHoursForCompleteTask: number;
  countUndoneTasks: number;
  countOverdueTasks: number;
}

export interface IChartDataItem {
  month: string;
  desktop: number;
}

export type TTimeFrame = "days" | "months";

export interface IChartData {
  days: IChartDataItem[];
  month: IChartDataItem[];
  tooltip: {
    format: string;
    unit: string;
  };
  yAxis: {
    min: number;
    max: number;
    step: number;
  };
}

export interface ICompletionTodoResponse {
  data: ICompletedTodo[];
}
