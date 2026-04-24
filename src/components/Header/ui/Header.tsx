import { Logo } from "./Logo";
import { Navigation } from "./navigation/Navigation";

export const Header = () => {
  return (
    <header className="border-b border-[#C0C0C0]">
      <div className="max-w-400 mx-auto flex justify-between items-center px-4 py-4.5">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
