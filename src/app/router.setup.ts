import { createRootRouteWithContext } from "@tanstack/react-router";
import type { ProtectedRouterContext } from "./router.interface";

export const createRootRoutWithDI =
  createRootRouteWithContext<ProtectedRouterContext>();
