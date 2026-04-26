import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./services";
import { useNotificationsSlice } from "@/modules/Notifications/model/notification.slice";
import { useNavigate } from "@tanstack/react-router";
import { USER_QUERY_KEYS } from "@/modules/Users";
import { useTokenSlice } from "@/modules/Tokens";

export const useLogin = () => {
  const addNotification = useNotificationsSlice(
    (state) => state.addNotification,
  );
  const navigate = useNavigate();
  const tokenSlice = useTokenSlice();
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      tokenSlice.setToken(data.accessToken);
      addNotification({
        type: "success",
        message: "Вы успешно вошли",
      });

      navigate({ to: "/" });
    },
    onError: () => {
      tokenSlice.removeToken();
      addNotification({ type: "error", message: "Неверный логин или пароль" });
    },
  });
};
