import { navigationItems } from "../../model/navigation.data";
import { MenuBurger } from "./MenuBurger";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  return (
    <nav>
      <ul className="gap-3.5 hidden md:flex">
        {navigationItems.map((item, idx) => (
          <NavigationItem key={idx} to={item.to} label={item.label} />
        ))}
      </ul>
      <MenuBurger />
    </nav>
  );
};
