import type { IUser } from "./user.interface";
import { useGetMe } from "../api/queries";
export function useGetCurrentUser(): IUser | undefined;
export function useGetCurrentUser<K extends keyof IUser>(
  key: K,
): IUser[K] | undefined;
export function useGetCurrentUser<K extends keyof IUser>(
  key?: K,
): IUser | IUser[K] | undefined {
  const { data } = useGetMe();
  if (!data) return undefined;

  return key ? data[key] : data;
}
