import { Link } from "@tanstack/react-router";
import ProfileIcon from "@/assets/user-profile-icon.svg";

export const UserProfile = () => {
  return (
    <Link to="/profile" className="p-4 border-r-2 border-[#FFDAC5]">
      <img src={ProfileIcon} alt="profile" />
    </Link>
  );
};
