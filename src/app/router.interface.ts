import type { IUser } from "@/modules/Users";

export interface ProtectedRouterContext {
  getMe: () => Promise<IUser | null>;
}
