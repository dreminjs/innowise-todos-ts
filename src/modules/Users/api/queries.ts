import { useQuery } from "@tanstack/react-query";
import { findMe } from "./service";
import { USER_QUERY_KEYS } from "../model/user.constants";
import { useTokenSlice } from "@/modules/Tokens/model/tokenSlice";

export const useGetMe = () => {
  const token = useTokenSlice((state) => state.token);

  return useQuery({
    queryKey: USER_QUERY_KEYS.GET_ME,
    queryFn: findMe,
    retry: false,
    enabled: Boolean(token),
  });
};
