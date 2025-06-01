"use client";

import { useState } from "react";
import { MdPhone, MdLockOutline, MdEmail } from "react-icons/md";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-2">
      <div className="flex flex-col md:flex-row w-full max-w-5xl max-h-[100vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
          <div className="flex justify-start mb-4">
            <Image
              src="/images/dream_logo.jpeg"
              alt="Dream Education Logo"
              width={70}
              height={70}
              priority
              className="h-16 w-auto"
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="border border-[#F0F0F0] rounded-lg p-4 bg-[#F0F0F0] space-y-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Phone
                </label>
                <div className="relative">
                  <MdPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
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

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-10 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                    tabIndex={-1}
                  >
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              {/* <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 text-sm font-semibold mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleInput}
                    required
                    className="w-full pl-10 pr-4 py-2 bg-[#C0DBEA] text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div> */}

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition duration-300"
              >
                SIGN UP
              </button>

              {/* Or continue with */}
              <div className="flex items-center my-2">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-2 text-gray-400 text-xs">or continue with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <button type="button" className="bg-white p-2 rounded-full shadow hover:shadow-md">
                  <FaGoogle className="text-gray-600" size={16} />
                </button>
                <button type="button" className="bg-white p-2 rounded-full shadow hover:shadow-md">
                  <FaGithub className="text-gray-600" size={16} />
                </button>
                <button type="button" className="bg-white p-2 rounded-full shadow hover:shadow-md">
                  <FaFacebookF className="text-gray-600" size={16} />
                </button>
              </div>

              {/* Login link */}
              <p className="text-center text-xs text-gray-500 mt-2">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-500 font-bold hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden md:block md:w-1/2 bg-[#3587CA] relative">
          <div className="relative w-full h-full p-6">
            <Image
              src="/images/character.png"
              alt="Character working on laptop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
