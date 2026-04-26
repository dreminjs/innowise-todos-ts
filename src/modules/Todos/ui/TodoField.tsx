import type { FC } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { TTodoFormSchema } from "../model/interfaces/todo.interface";

interface ITodoFieldProps {
  id: string;
  label: string;
  register: UseFormRegister<TTodoFormSchema>;
  error: string;
  name: keyof TTodoFormSchema;
}

export const TodoField: FC<ITodoFieldProps> = ({
  id,
  label,
  register,
  error,
  name,
}) => {
  return (
    <div className="max-w-xl">
      <label
        className="font-semibald mb-3 leading-6 text-[#414141] font-montserrat font-semibold block"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        placeholder="content..."
        className="p-3.75 border-2 border-[#D5D5D5] block rounded-2 rounded-[8px] w-full max-w-xl"
        id={id}
        {...register(name)}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
};
