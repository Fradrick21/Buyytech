import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    navigate("/login");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-[400px] rounded-xl bg-white p-6 shadow-lg">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
          aria-label="Close register"
        >
          &times;
        </button>

        <h2 className="mb-4 text-xl font-semibold">Sign Up</h2>

        <div className="mb-4 flex justify-center">
          <img src="Login.png" alt="register" className="w-32" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name *"
              className={`w-full rounded-full border px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC] ${
                errors.name ? "border-rose-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="mt-1 px-2 text-sm text-rose-600">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email *"
              className={`w-full rounded-full border px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC] ${
                errors.email ? "border-rose-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="mt-1 px-2 text-sm text-rose-600">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password *"
              className={`w-full rounded-full border px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC] ${
                errors.password ? "border-rose-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="mt-1 px-2 text-sm text-rose-600">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password *"
              className={`w-full rounded-full border px-4 py-2 outline-none focus:ring-2 focus:ring-[#113768CC] ${
                errors.confirmPassword ? "border-rose-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 px-2 text-sm text-rose-600">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#113768CC] py-3 font-semibold text-white transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="my-4 flex items-center gap-3">
          <div className="h-[1px] flex-1 bg-gray-300" />
          <p className="text-sm text-gray-400">Or sign up with</p>
          <div className="h-[1px] flex-1 bg-gray-300" />
        </div>

        <div className="mb-4 flex gap-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-full border py-2 hover:bg-gray-100">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex w-full items-center justify-center gap-2 rounded-full border py-2 hover:bg-gray-100">
            <FaFacebookF className="text-blue-600" /> Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-[#113768CC]"
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
