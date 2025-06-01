"use client";

import { useState } from "react";
import { MdPhone, MdLockOutline} from "react-icons/md";
import { FaGoogle, FaGithub, FaFacebookF, FaEye, FaEyeSlash  } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex-col md:flex-row">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-5 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex justify-start mb-8">
            <Image
              src="/images/dream_logo.jpeg"
              alt="Dream Education Logo"
              width={100}
              height={100}
              priority
              className="h-20 w-auto"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="border border-[#F0F0F0] rounded-lg p-4 bg-[#F0F0F0]">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Phone
                </label>
                <div className="relative">
                  <MdPhone
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                  Password
                </label>
                <div className="relative">
                  <MdLockOutline
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? ( <FaEyeSlash size={18} />) : (<FaEye size={18} />)}
                  </button>
                </div>
              </div>

              <div className="text-right mb-4">
                <Link
                  href="/forgot-password"
                  className="text-xs text-pink-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-1.5 rounded-full transition duration-300"
              >
                LOGIN
              </button>

              {/* or continue with */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-400 text-xs">
                  or continue with
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Social icons */}
              <div className="flex justify-center gap-4">
                <button
                  type="button"
                  className="bg-white p-2 rounded-full shadow hover:shadow-md"
                >
                  <FaGoogle className="text-gray-600" size={16} />
                </button>
                <button
                  type="button"
                  className="bg-white p-2 rounded-full shadow hover:shadow-md"
                >
                  <FaGithub className="text-gray-600" size={16} />
                </button>
                <button
                  type="button"
                  className="bg-white p-2 rounded-full shadow hover:shadow-md"
                >
                  <FaFacebookF className="text-gray-600" size={16} />
                </button>
              </div>

              {/* Signup link */}
              <p className="text-center text-xs text-gray-500 mt-4">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup"
                  className="text-blue-500 font-bold hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right side */}
        <div className="hidden md:flex w-1/2 bg-[#3587CA] rounded-tr-3xl rounded-br-3xl">
          <div className="relative w-full min-h-[300px] md:min-h-full p-10">
            <Image
              src="/images/character.png"
              alt="Character working on laptop while sitting on chair"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
