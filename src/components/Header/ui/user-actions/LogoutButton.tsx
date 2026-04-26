import { useTokenSlice } from "@/modules/Tokens";
import { USER_QUERY_KEYS } from "@/modules/Users";
import { useQueryClient } from "@tanstack/react-query";

export const LogoutButton = () => {
  const queryClient = useQueryClient();
  const removeToken = useTokenSlice((state) => state.removeToken);
  const handleLogout = () => {
    removeToken();
    queryClient.removeQueries({
      queryKey: USER_QUERY_KEYS.GET_ME,
    });
  };

  return (
    <button onClick={handleLogout} className="p-4 text-white">
      Log out
    </button>
  );
};
