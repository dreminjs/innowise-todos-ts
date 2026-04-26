import { useState } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./navigation/MobileMenu";
import { Navigation } from "./navigation/Navigation";
import { UserActions } from "./user-actions/UserActions";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="border-b border-[#C0C0C0]">
      <div className="my-container">
        <Logo />
        <Navigation
          className="hidden md:flex"
          onOpen={handleToggleMobileMenu}
        />
        <UserActions />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleToggleMobileMenu}
        />
      </div>
    </header>
  );
};
