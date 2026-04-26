import { z } from "zod";

export const LoginDtoSchema = z.object({
  username: z.string().min(1, "Имя пользователя обязательно"),
  password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
});
