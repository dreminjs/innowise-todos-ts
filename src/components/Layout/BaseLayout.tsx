import { Outlet } from "@tanstack/react-router";
import { Header } from "../Header";
import { NotificationList } from "@/modules/Notifications";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NotificationList />
    </>
  );
};
