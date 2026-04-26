import ProfileIcon from "@/assets/user-profile-icon.svg";

export const UserProfile = () => {
  return (
    <button className="p-4 border-r-2 border-[#FFDAC5]">
      <img src={ProfileIcon} alt="profile" />
    </button>
  );
};
