import type { UseFormRegister } from "react-hook-form";
import type { TLoginFormDto } from "../model/dtos/login.types";
import type { FC } from "react";

interface ILoginFormFieldProps {
  register: UseFormRegister<TLoginFormDto>;
  label: string;
  name: keyof TLoginFormDto;
  placeholder: string;
  error?: string;
}

export const LoginFormField: FC<ILoginFormFieldProps> = ({
  register,
  label,
  name,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-5">
      <label className="block mb-1.5 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name)}
        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
      />
      {error && (
        <span className="mt-1.5 block text-xs text-red-500">
          {error.toString()}
        </span>
      )}
    </div>
  );
};
