import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import type { INavigationItem } from "../../model/navigation.interface";

type TNavigationItemProps = INavigationItem;

export const NavigationItem: FC<TNavigationItemProps> = ({ to, label }) => {
  return (
    <li>
      <Link className="font-poppins text-[16px]" to={to}>
        {label}
      </Link>
    </li>
  );
};
