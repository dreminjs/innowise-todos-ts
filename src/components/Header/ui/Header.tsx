import { Logo } from "./Logo";
import { Navigation } from "./navigation/Navigation";
import { UserActions } from "./user-actions/UserActions";

export const Header = () => {
  return (
    <header className="border-b border-[#C0C0C0]">
      <div className="max-w-400 mx-auto flex justify-between items-center px-4 py-3">
        <Logo />
        <Navigation />
        <UserActions />
      </div>
    </header>
  );
};
