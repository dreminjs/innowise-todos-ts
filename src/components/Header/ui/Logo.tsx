import { Link } from "@tanstack/react-router";
import LogoIcon from "@/assets/logo.svg";

export const Logo = () => {
  return (
    <Link to="/">
      <img src={LogoIcon} alt="Logo" />
    </Link>
  );
};
