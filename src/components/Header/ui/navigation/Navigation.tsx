import { navigationItems } from "../../model/navigation.data";
import { NavigationItem } from "./NavigationItem";

export const Navigation = () => {
  return (
    <nav>
      <ul className="gap-3.5 flex">
        {navigationItems.map((item) => (
          <NavigationItem key={item.to} to={item.to} label={item.label} />
        ))}
      </ul>
    </nav>
  );
};
