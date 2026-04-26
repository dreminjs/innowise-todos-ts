import z from "zod";
import { LoginDtoSchema } from "./login.schema";
import type { IUser } from "@/modules/Users";
import type { ITokens } from "@/shared";

export type TLoginFormDto = z.infer<typeof LoginDtoSchema>;

export type TLoginResponse = IUser & ITokens;
