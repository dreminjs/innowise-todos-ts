import { instance } from "@/shared/api/api.instance";
import type { IUser } from "../model/user.interface";

export const findMe = async (): Promise<IUser> => {
  return (await instance.get<IUser>(`user/me`)).data;
};
