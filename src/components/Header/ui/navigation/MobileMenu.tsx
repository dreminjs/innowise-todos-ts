import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Navigation } from "./Navigation";
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
        </div>
      </SheetContent>
    </Sheet>
  );
};
