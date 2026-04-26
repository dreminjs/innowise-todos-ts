import { BaseLayout } from "@/components/Layout/BaseLayout";
import LoginPage from "@/modules/Login/pages/LoginPage";
import TodosPage from "@/modules/Todos/pages/TodosPage";

import {
  createRoute,
  createRouter,
  isRedirect,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { PublicRoutes } from "./Providers/PublicRoutes";
import { findMe } from "@/modules/Users/api/service";
import { createRootRoutWithDI } from "./router.setup";

const rootRoute = createRootRoutWithDI({
  component: BaseLayout,
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  beforeLoad: async ({ context }) => {
    const { getMe } = context;
    try {
      const me = await getMe();
      if (!me) throw redirect({ to: "/login" });
    } catch (e) {
      if (isRedirect(e)) throw e;
      throw redirect({ to: "/login" });
    }
  },
  component: Outlet,
});

const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  beforeLoad: async ({ context }) => {
    const { getMe } = context;
    try {
      const me = await getMe();
      if (me) throw redirect({ to: "/" });
    } catch (e) {
      if (isRedirect(e)) throw e;
      throw redirect({ to: "/" });
    }
  },
  component: PublicRoutes,
});

const indexRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/",
  component: TodosPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const protectedRoutesTree = protectedRoute.addChildren([indexRoute]);

const publicRoutesTree = publicRoute.addChildren([loginRoute]);

const routeTree = rootRoute.addChildren([
  protectedRoutesTree,
  publicRoutesTree,
]);

export const router = createRouter({
  routeTree,
  context: {
    getMe: findMe,
  },
});
