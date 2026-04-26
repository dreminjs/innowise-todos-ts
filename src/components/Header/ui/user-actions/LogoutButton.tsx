import { USER_QUERY_KEYS } from "@/modules/Users";
import { tokenService } from "@/shared";
import { useQueryClient } from "@tanstack/react-query";

export const LogoutButton = () => {
  const queryClient = useQueryClient();

  const handleLogout = () => {
    console.log("Hello");
    tokenService.removeToken();
    queryClient.invalidateQueries({
      queryKey: [USER_QUERY_KEYS.GET_ME],
    });
  };

  return (
    <button onClick={handleLogout} className="p-4 text-white">
      Log out
    </button>
  );
};
