import { useQuery } from "@tanstack/react-query";
import {
  findCompletedTodos,
  findOneChartData,
  findOneDetails,
} from "./service";
import type { IDetails } from "../model/details.interface";

export const useGetDetails = () => {
  return useQuery<IDetails>({
    queryKey: ["details"],
    queryFn: findOneDetails,
  });
};

export const useGetChartData = () => {
  return useQuery({
    queryKey: ["chartData"],
    queryFn: findOneChartData,
  });
};

export const useGetCompletedTodos = () => {
  return useQuery({
    queryKey: ["completedTodos"],
    queryFn: findCompletedTodos,
  });
};
