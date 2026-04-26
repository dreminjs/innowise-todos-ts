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
import CreateTodoPage from "@/modules/Todos/pages/CreateTodoPage";
import EditTodoPage from "@/modules/Todos/pages/EditTodoPage";
import LoginPage from "@/modules/Login/pages/LoginPage";
import TodosPage from "@/modules/Todos/pages/TodosPage";

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
