import { useState } from "react";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface PasswordInputProps<T extends FieldValues = any> {
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
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          {...register(name)}
          className={`
            border rounded-lg px-3 py-2 w-full pr-14
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${error ? 'border-red-500' : 'border-gray-300'}
          `}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
        >
          {show ? "🙈 Hide" : "👁️ Show"}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};