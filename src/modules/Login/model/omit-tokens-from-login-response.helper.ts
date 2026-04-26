import type { TLoginResponse } from "./dtos/login.types";

export const omitTokensFromLoginResponse = (
  response: TLoginResponse,
): Omit<TLoginResponse, "accessToken" | "refreshToken"> => {
  const {
    accessToken: _accessToken,
    refreshToken: _refreshToken,
    ...rest
  } = response;
  return rest;
};
