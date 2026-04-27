import { BaseLayout } from "@/components/Layout/BaseLayout";
import {
  createRoute,
  createRouter,
  isRedirect,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { findMe } from "@/modules/Users/api/service";
import { createRootRoutWithDI } from "./router.setup";
import { lazy } from "react";
import { LoadingMessage } from "@/components/LoadingMessage";

export const TodosPage = lazy(() => import("@/modules/Todos/pages/TodosPage"));
export const EditTodoPage = lazy(
  () => import("@/modules/Todos/pages/EditTodoPage"),
);
export const CreateTodoPage = lazy(
  () => import("@/modules/Todos/pages/CreateTodoPage"),
);
export const LoginPage = lazy(() => import("@/modules/Login/pages/LoginPage"));

const DetailsPage = lazy(() => import("@/modules/Details/pages/DetailsPage"));

const rootRoute = createRootRoutWithDI({
  component: BaseLayout,
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  beforeLoad: async ({ context }) => {
    const { getMe } = context;
    try {
      await getMe();
    } catch (e) {
      if (isRedirect(e)) throw e;
      throw redirect({ to: "/login" });
    }
  },
  component: Outlet,
  pendingComponent: LoadingMessage,
});

const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  beforeLoad: async ({ context }) => {
    const { getMe } = context;
    try {
      const me = await getMe();
      if (me?.id) throw redirect({ to: "/" });
    } catch (e) {
      if (isRedirect(e)) throw e;
    }
  },
  component: Outlet,
  pendingComponent: LoadingMessage,
});

const indexRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/",
  component: TodosPage,
});

const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: "/login",
  component: LoginPage,
});

const createTodoRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/create-todo",
  component: CreateTodoPage,
});

export const editTodoRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/todos/$todoId/edit",
  component: EditTodoPage,
});

const detailsRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: "/details",
  component: DetailsPage,
});

const protectedRoutesTree = protectedRoute.addChildren([
  indexRoute,
  createTodoRoute,
  editTodoRoute,
  detailsRoute,
]);

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

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
