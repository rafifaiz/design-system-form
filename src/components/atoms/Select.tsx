import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface SelectProps<T extends FieldValues = any> {
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
      <label className="font-medium text-gray-700">{label}</label>
      <select
        {...register(name)}
        className={`
          border rounded-lg px-3 py-2 w-full
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
      >
        <option value="">Pilih Kategori Event</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};