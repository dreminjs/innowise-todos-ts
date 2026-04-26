import { Logo } from "./Logo";
import { Navigation } from "./navigation/Navigation";
import { UserActions } from "./user-actions/UserActions";

export const Header = () => {
  return (
    <header className="border-b border-[#C0C0C0]">
      <div className="my-container">
        <Logo />
        <Navigation />
        <UserActions />
      </div>
    </header>
  );
};
