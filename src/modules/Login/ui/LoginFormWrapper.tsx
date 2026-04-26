import type { FC, ReactNode } from "react";

interface ILoginFormWrapper {
  children: ReactNode;
}

export const LoginFormWrapper: FC<ILoginFormWrapper> = ({ children }) => {
  return (
    <div className="mx-auto my-8 max-w-sm rounded-xl border border-gray-200 bg-white px-8 pt-8 pb-7 shadow-sm">
      <h3 className="mb-7 text-lg font-medium text-gray-900">Sign in</h3>
      {children}
    </div>
  );
};
