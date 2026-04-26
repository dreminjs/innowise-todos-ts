import { Outlet } from "@tanstack/react-router";
import { Header } from "../Header";
import { NotificationList } from "@/modules/Notifications";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-315 pt-8 px-2">
        <Outlet />
      </main>
      <NotificationList />
    </>
  );
};
