import { useGetMe } from "@/modules/Users";
import { LogoutButton } from "./LogoutButton";
import { Link } from "@tanstack/react-router";
import { UserProfile } from "./UserProfile";

export const UserActions = () => {
  const { data, isPending } = useGetMe();

  if (isPending) return <p>Loading...</p>;

  return (
    <div className="bg-linear-to-tl from-[#EDD098] via-[#F1804F] to-[#EEC595] rounded-[10px] flex items-center">
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
