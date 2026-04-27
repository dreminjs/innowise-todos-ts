import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Navigation } from "./Navigation";
import { UserActions } from "../user-actions/UserActions";
import type { FC } from "react";

interface IMobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ onClose, isOpen }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <div className="p-5">
          <Navigation />
          <UserActions className={"flex justify-start max-w-fit"} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
