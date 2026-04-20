import type { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface SelectProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  options
}: SelectProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <select
        {...register(name)}
        className={`
          border rounded-lg px-4 py-2 w-full text-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent
          transition-all duration-200
          ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}
        `}
      >
        <option value="">Pilih Kategori Event</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};