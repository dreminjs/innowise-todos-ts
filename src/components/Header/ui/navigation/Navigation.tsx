import type { FC } from "react";
import { navigationItems } from "../../model/navigation.data";
import { MenuBurger } from "./MenuBurger";
import { NavigationItem } from "./NavigationItem";
import clsx from "clsx";

interface INavigationProps {
  onOpen?: () => void;
  className?: string;
}

export const Navigation: FC<INavigationProps> = ({ onOpen, className }) => {
  return (
    <nav>
      <ul className={clsx("gap-3.", className)}>
        {navigationItems.map((item, idx) => (
          <NavigationItem key={idx} to={item.to} label={item.label} />
        ))}
      </ul>
      {onOpen && <MenuBurger onOpen={onOpen} />}
    </nav>
  );
};
