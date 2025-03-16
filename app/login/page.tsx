"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Bagian Kiri: Form Login */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-16">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1">Selamat Datang</h2>
            <p className="text-gray-500">
              Jelajahi Berbagai Event Tradisional Melalui Website Kami
            </p>
          </div>

          {/* Form Input */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan Email Anda"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Kata Sandi
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="••••••"
              />
            </div>

            {/* Checkbox dan Lupa Password */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Ingat Saya
                </label>
              </div>
              <a
                href="#"
                className="text-[#6F4E37] text-sm hover:text-[#5d4230] transition duration-300"
              >
                Lupa Kata Sandi
              </a>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full bg-[#6F4E37] text-white py-2 rounded-md hover:bg-[#5d4230] transition duration-300 mb-4"
            >
              Login
            </button>

            {/* Google Login Button with online icon */}
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition duration-300 mb-6"
            >
              <img
                src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Login Dengan Google
            </button>
          </form>

          {/* Daftar Sekarang */}
          <p className="text-center text-sm text-gray-500">
            Tidak Punya Akun?{" "}
            <a
              href="/register"
              className="text-[#6F4E37] text-sm hover:text-[#5d4230] transition duration-300"
            >
              Daftar Sekarang
            </a>
          </p>
        </div>
      </div>

      {/* Bagian Kanan: Gambar */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/art1.jpeg')",
        }}
      ></div>
    </div>
  );
}
