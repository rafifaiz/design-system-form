import { useState } from "react";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface PasswordInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
}

export const PasswordInput = <T extends FieldValues>({
  label,
  name,
  register,
  error
}: PasswordInputProps<T>) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          className={`
            border rounded-lg px-4 py-2 w-full pr-24 text-gray-700
            focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent
            transition-all duration-200
            ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}
          `}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-red-700 hover:text-red-800 font-medium"
        >
          {show ? "Sembunyikan" : "Lihat"}
        </button>
      </div>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};