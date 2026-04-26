import { useForm } from "react-hook-form";
import type { TLoginFormDto } from "../dtos/login.types";
import { LoginDtoSchema } from "../dtos/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormDto>({
    resolver: zodResolver(LoginDtoSchema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};
