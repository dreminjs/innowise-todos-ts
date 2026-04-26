import { Menu } from "lucide-react";
import type { FC } from "react";

interface IMenuBurgerProps {
  onOpen: () => void;
}

export const MenuBurger: FC<IMenuBurgerProps> = ({ onOpen }) => {
  return (
    <button onClick={onOpen} className="md:hidden">
      <Menu />
    </button>
  );
};
