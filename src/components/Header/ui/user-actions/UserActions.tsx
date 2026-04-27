import { useGetMe } from "@/modules/Users";
import { LogoutButton } from "./LogoutButton";
import { Link } from "@tanstack/react-router";
import { UserProfile } from "./UserProfile";
import type { FC } from "react";
import clsx from "clsx";

interface IUserActionsProps {
  className: string;
}

export const UserActions: FC<IUserActionsProps> = ({ className }) => {
  const { data, isLoading } = useGetMe();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div
      className={clsx(
        "bg-linear-to-tl from-[#EDD098] via-[#F1804F] to-[#EEC595] rounded-[10px] items-center",
        className,
      )}
    >
      {data ? (
        <>
          <UserProfile />
          <LogoutButton />
        </>
      ) : (
        <Link
          className="font-poppins font-semibold text-[16px] text-white p-4"
          to="/login"
        >
          Log in
        </Link>
      )}
    </div>
  );
};
