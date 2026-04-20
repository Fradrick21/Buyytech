import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-500 text-xl cursor-pointer"
          aria-label="Close login"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">Log In</h2>

        {/* Illustration */}
        <div className="flex justify-center mb-4">
          <img
            src="Login.png"
            alt="login"
            className="w-32"
          />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email *"
            className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC]"
          />

          <input
            type="password"
            placeholder="Password *"
            className="w-full border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC]"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <button className="text-[#113768CC] text-sm cursor-pointer">Forgot Password?</button>
        </div>

        {/* Sign In Button */}
        <button className="w-full mt-4 bg-[#113768CC] text-white py-3 rounded-full font-semibold transition cursor-pointer">
          Sign In
        </button>

                {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <p className="text-gray-400 text-sm">Or log in with</p>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="flex items-center justify-center gap-2 w-full border rounded-full py-2 hover:bg-gray-100">
            <FcGoogle size={20} /> Google
          </button>

          <button className="flex items-center justify-center gap-2 w-full border rounded-full py-2 hover:bg-gray-100">
            <FaFacebookF className="text-blue-600" /> Facebook
          </button>
        </div>
        
        {/* Signup */}
        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <span className="text-[#113768CC] font-medium cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
