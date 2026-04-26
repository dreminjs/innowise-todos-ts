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

export const TodosPage = lazy(() => import("@/modules/Todos/pages/TodosPage"));
export const EditTodoPage = lazy(
  () => import("@/modules/Todos/pages/EditTodoPage"),
);
export const CreateTodoPage = lazy(
  () => import("@/modules/Todos/pages/CreateTodoPage"),
);
export const LoginPage = lazy(() => import("@/modules/Login/pages/LoginPage"));

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
      if (!me?.id) throw redirect({ to: "/login" });
    } catch (e) {
      if (isRedirect(e)) throw e;
      throw redirect({ to: "/login" });
    }
  },
  component: Outlet,
  pendingComponent: () => <h3>Application is Loading...</h3>,
});

const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  beforeLoad: async ({ context }) => {
    const { getMe } = context;
    try {
      const me = await getMe();
      console.log(me);
      if (me?.id) throw redirect({ to: "/" });
    } catch (e) {
      if (isRedirect(e)) throw e;
      throw redirect({ to: "/" });
    }
  },
  component: Outlet,
  pendingComponent: () => <h3>Application is Loading...</h3>,
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

const protectedRoutesTree = protectedRoute.addChildren([
  indexRoute,
  createTodoRoute,
  editTodoRoute,
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
