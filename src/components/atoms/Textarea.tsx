import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface TextareaProps<T extends FieldValues = any> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  placeholder?: string;
}

export const Textarea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  placeholder
}: TextareaProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`
          border rounded-lg px-3 py-2 min-h-[100px] w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};