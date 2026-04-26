import { useQuery } from "@tanstack/react-query";
import { findMe } from "./service";
import { USER_QUERY_KEYS } from "../model/user.constants";

export const useGetMe = () => {
  return useQuery({
    queryKey: USER_QUERY_KEYS.GET_ME,
    queryFn: findMe,
  });
};
