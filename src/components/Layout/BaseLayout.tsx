import { Outlet, useNavigate } from "@tanstack/react-router";
import { Header } from "../Header";
import { NotificationList } from "@/modules/Notifications";
import { Footer } from "../Footer";
import { useTokenSlice } from "@/modules/Tokens";
import { useEffect } from "react";

export const BaseLayout = () => {
  const navigate = useNavigate();
  const token = useTokenSlice((state) => state.token);
  useEffect(() => {
    if (!token) navigate({ to: "/login" });
  }, [token]);
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
