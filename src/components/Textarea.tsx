import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
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
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        className={`
          border rounded-lg px-4 py-2 min-h-[100px] w-full text-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent
          transition-all duration-200
          ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}
        `}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};