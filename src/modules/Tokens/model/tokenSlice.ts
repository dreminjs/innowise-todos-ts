import { create } from "zustand";
import type { ITokenSlice } from "./token.interface";
import { tokenService } from "@/shared";

export const useTokenSlice = create<ITokenSlice>((set) => ({
  token: tokenService.getToken(),
  setToken: (token: string) => {
    tokenService.saveToken(token);
    set({ token });
  },
  removeToken: () => {
    tokenService.removeToken();
    set({ token: null });
  },
}));
