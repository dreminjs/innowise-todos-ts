import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

interface ITodoFormLayoutProps {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  children: ReactNode;
  isLoading: boolean;
}

export const TodoFormLayout: FC<ITodoFormLayoutProps> = ({
  onSubmit,
  children,
  isLoading,
}) => {
  return (
    <form
      className="bg-[#FAFAFA] border-2 border-[#D6D6D6] py-8 rounded-[16px]"
      onSubmit={onSubmit}
    >
      <div className="px-8 pb-28.5">{children}</div>
      <div className="flex items-center gap-5 px-8 pt-8 border-t border-[#D6D6D6]">
        <button
          disabled={isLoading}
          type="submit"
          className="text-white bg-[#FB8F42] py-[11.5px] px-4 rounded-[16px]"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
        <Link
          to="/"
          className="p-[11.5px] px-4 border-[#474747] text-[#474747] rounded-[16px] border-2 block"
        >
          Back
        </Link>
      </div>
    </form>
  );
};
