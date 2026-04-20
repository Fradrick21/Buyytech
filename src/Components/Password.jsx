import React, { useState } from "react";
import { Lock, KeyRound, Eye, EyeOff } from "lucide-react";

const initialState = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Password = () => {
  const [form, setForm] = useState(initialState);
  const [show, setShow] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
    setError("");
  };

  const toggleVisibility = (field) => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.oldPassword || !form.newPassword || !form.confirmPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      setError("New password and retype password do not match.");
      return;
    }

    setError("");
    setSaved(true);
    setForm(initialState);
  };

  const InputField = ({ label, name, value, placeholder }) => (
    <label className="grid gap-2 text-sm font-medium text-gray-700">
      {label}
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 focus-within:border-[#0E9488]">
        <Lock size={18} className="text-gray-400" />
        <input
          type={show[name] ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full outline-none"
        />
        <button
          type="button"
          onClick={() => toggleVisibility(name)}
          className="text-gray-400 transition hover:text-gray-700"
        >
          {show[name] ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </label>
  );

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9488]">
            My Password
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Update Password
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-gray-600">
            Change your password securely by entering your old password and choosing a new one.
          </p>
        </div>

        {saved && (
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Password updated successfully
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2"
      >
        <InputField
          label="Old Password"
          name="oldPassword"
          value={form.oldPassword}
          placeholder="Enter old password"
        />

        <InputField
          label="New Password"
          name="newPassword"
          value={form.newPassword}
          placeholder="Enter new password"
        />

        <div className="lg:col-span-2">
          <InputField
            label="Retype New Password"
            name="confirmPassword"
            value={form.confirmPassword}
            placeholder="Retype new password"
          />
        </div>

        {error && (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700 lg:col-span-2">
            {error}
          </p>
        )}

        <div className="flex flex-wrap gap-3 lg:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-[#113768CC] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <KeyRound size={16} />
            Save Password
          </button>
          <button
            type="button"
            onClick={() => {
              setForm(initialState);
              setError("");
              setSaved(false);
            }}
            className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;
