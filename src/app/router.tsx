import { BaseLayout } from "@/components/Layout/BaseLayout";
import { TodosPage } from "@/modules/Todos/pages/TodosPage";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({
  component: BaseLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TodosPage,
});
const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });
