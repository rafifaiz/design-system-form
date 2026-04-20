import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../atoms/input";
import { PasswordInput } from "../atoms/PasswordInput";
import { Select } from "../atoms/Select";
import { Textarea } from "../atoms/Textarea";
import { Button } from "../atoms/Button";

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
    console.log("Data Registrasi:", data);
    alert("Registrasi berhasil! Selamat datang di Invofest!");
    setIsLoading(false);
    reset();
  };

  const eventOptions = [
    { label: "Invofest 2024 - Main Event", value: "invofest" },
    { label: "Workshop AI & Machine Learning", value: "ai" },
    { label: "React Conference Indonesia", value: "react" },
    { label: "Startup Weekend Invofest", value: "startup" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-50 to-red-50 py-10 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Selamat Datang
          </h1>
          <p className="text-gray-500 mt-2">Silakan daftar untuk acara Invofest</p>
        </div>

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

        <div className="text-center mt-6 text-xs text-gray-400">
          <p>© 2026 Invofest - All rights reserved by Mister_L</p>
        </div>
      </div>
    </div>
  );
};