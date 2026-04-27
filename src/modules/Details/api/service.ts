import { instance } from "@/shared/api/api.instance";
import type {
  IChartData,
  ICompletionTodoResponse,
  IDetails,
} from "../model/details.interface";

export const findOneDetails = async (): Promise<IDetails> => {
  return (await instance.get("/c/4777-5397-4a67-8c9e")).data;
};

export const findOneChartData = async (): Promise<IChartData> => {
  return (await instance.get("/c/d681-5d71-4f82-96bd")).data;
};

export const findCompletedTodos =
  async (): Promise<ICompletionTodoResponse> => {
    return (await instance.get("/c/7831-8444-43ec-a694")).data;
  };
