import { Outlet } from "@tanstack/react-router";
import { Header } from "../Header";
import { NotificationList } from "@/modules/Notifications";
import { Footer } from "../Footer";

export const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="w-full mx-auto max-w-325 pt-8 px-2 flex-1 ">
        <Outlet />
      </main>
      <Footer />
      <NotificationList />
    </div>
  );
};
