"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo + Back button */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 rounded-full hover:bg-gray-100">
            &lt;
          </button>
          <h1 className="font-['Rage'] text-2xl">TrendTheByte</h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Create new password</h2>
        <p className="text-gray-500 mb-8 text-sm">
          Your new password must be different from previously used password
        </p>

        {/* New Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
          />
          <label
            htmlFor="password"
            className="absolute left-2 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
          >
            Password
          </label>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-3 text-gray-500 hover:text-black"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-8">
          <input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            placeholder=" "
            className="peer w-full border-b-2 border-gray-300 bg-transparent px-2 pt-5 pb-2 text-gray-900 focus:border-black focus:outline-none"
          />
          <label
            htmlFor="confirmPassword"
            className="absolute left-2 top-2 text-gray-400 text-sm transition-all
              peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
          >
            Confirm Password
          </label>
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-2 top-3 text-gray-500 hover:text-black"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Button */}
        <button className="w-full py-3 bg-black text-white text-lg rounded-full hover:bg-gray-900 transition">
          Confirm
        </button>
      </div>
    </div>
  );
}
