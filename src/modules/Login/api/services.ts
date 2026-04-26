import { instance } from "@/shared/api/api.instance";
import type { TLoginFormDto, TLoginResponse } from "../model/dtos/login.types";

export const login = async (dto: TLoginFormDto): Promise<TLoginResponse> => {
  return (await instance.post(`/auth/login`, dto)).data;
};
