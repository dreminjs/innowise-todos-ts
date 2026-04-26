import { tokenService } from "@/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./services";
import { useNotificationsSlice } from "@/modules/Notifications/model/notification.slice";
import { USER_QUERY_KEYS } from "@/modules/Users";

export const useLogin = () => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      tokenService.saveToken(data.accessToken);
      addNotification({
        type: "success",
        message: "Вы успешно вошли",
      });
      queryClient.invalidateQueries({
        queryKey: USER_QUERY_KEYS.GET_ME,
      });
    },
    onError: () => {
      addNotification({ type: "error", message: "Неверный логин или пароль" });
    },
  });
};
