import { useQueryClient } from "@tanstack/react-query";
import { USER_QUERY_KEYS } from "./user.constants";
import type { IUser } from "./user.interface";
export function useGetCurrentUser(): IUser | undefined;
export function useGetCurrentUser<K extends keyof IUser>(
  key: K,
): IUser[K] | undefined;
export function useGetCurrentUser<K extends keyof IUser>(
  key?: K,
): IUser | IUser[K] | undefined {
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData<IUser>(USER_QUERY_KEYS.GET_ME);

  if (!cachedData) return undefined;

  return key ? cachedData[key] : cachedData;
}
