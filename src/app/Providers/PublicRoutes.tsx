import { useGetMe } from "@/modules/Users";
import { Outlet, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

export const PublicRoutes = () => {
  const { data: me, isLoading } = useGetMe();

  useEffect(() => {
    if (me) {
      throw redirect({ to: "/" });
    }
  }, [me]);

  if (isLoading) return <h3>Loading...</h3>;

  return <Outlet />;
};
