import { RouterProvider as ReactRouterProvider } from "@tanstack/react-router";
import { QueryProvider } from "./QueryProvider";
import { router } from "../router";

export function RouterProvider() {
  return (
    <QueryProvider>
      <ReactRouterProvider router={router} />;
    </QueryProvider>
  );
}
