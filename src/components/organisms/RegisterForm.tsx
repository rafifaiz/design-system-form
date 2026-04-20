import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define form data type
interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
  eventCategory: string;
  bio: string;
}

// Zod validation schema
const registerSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  eventCategory: z.string().min(1, "Pilih kategori event"),
  bio: z.string().min(10, "Bio minimal 10 karakter").max(200, "Bio maksimal 200 karakter")
});

// Komponen Input
const Input = ({ label, name, register, error, type = "text", placeholder }: any) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-gray-700 text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`
          border rounded-lg px-4 py-2 w-full text-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent
          transition-all duration-200
          ${error ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'}
        `}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Komponen PasswordInput
const PasswordInput = ({ label, name, register, error }: any) => {
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

// Komponen Select
const Select = ({ label, name, register, error, options }: any) => {
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
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
};

// Komponen Textarea
const Textarea = ({ label, name, register, error, placeholder }: any) => {
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

// Komponen Button
const Button = ({ label, type = "button", variant = "primary", isLoading = false, onClick }: any) => {
  const baseStyle = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-gradient-to-r from-red-800 to-red-700 text-white hover:from-red-900 hover:to-red-800 disabled:from-red-300 disabled:to-red-300 shadow-md hover:shadow-lg",
    outline: "border-2 border-red-700 text-red-700 hover:bg-red-50 disabled:opacity-50"
  };
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${isLoading ? "cursor-not-allowed" : ""}`}
    >
      {isLoading ? "⏳ Memproses..." : label}
    </button>
  );
};

export const RegisterForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("📝 Data Registrasi:", data);
    alert("✅ Registrasi berhasil! Selamat datang di Invofest!");
    setIsLoading(false);
    reset();
  };

  const eventOptions = [
    { label: " Invofest 2024 - Main Event", value: "invofest" },
    { label: " Workshop AI & Machine Learning", value: "ai" },
    { label: " React Conference Indonesia", value: "react" },
    { label: " Startup Weekend Invofest", value: "startup" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-red-50 py-10 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Selamat Datang
          </h1>
          <p className="text-gray-500 mt-2">Silakan daftar untuk acara Invofest</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <Input
              label="Nama Lengkap"
              name="fullName"
              register={register}
              error={errors.fullName?.message}
              placeholder="Masukkan nama lengkap Anda"
            />

            <Input
              label="Email"
              name="email"
              register={register}
              error={errors.email?.message}
              type="email"
              placeholder="email@anda.com"
            />

            <PasswordInput
              label="Password"
              name="password"
              register={register}
              error={errors.password?.message}
            />

            <Select
              label="Kategori Event"
              name="eventCategory"
              register={register}
              error={errors.eventCategory?.message}
              options={eventOptions}
            />

            <Textarea
              label="Bio Singkat"
              name="bio"
              register={register}
              error={errors.bio?.message}
              placeholder="Ceritakan sedikit tentang Anda..."
            />

            <div className="flex gap-3 mt-4">
              <Button 
                type="submit" 
                label="Daftar Sekarang" 
                variant="primary"
                isLoading={isLoading}
              />
              <Button 
                type="button" 
                label="Reset" 
                variant="outline"
                onClick={() => reset()}
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          <p>© 2025 Invofest - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};