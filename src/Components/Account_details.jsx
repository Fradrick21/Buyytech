import React, { useState } from "react";
import { UserRound, Mail, Phone, MessageCircle } from "lucide-react";

const initialProfile = {
  name: "Fradrick",
  email: "gobright@gmail.com",
  mobile: "9384975367",
  whatsapp: "9384975367",
};

const Account_details = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [saved, setSaved] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9488]">
            My Account
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Update Account Details
          </h2>
          <p className="mt-2 max-w-2xl text-base leading-7 text-gray-600">
            Keep your name, email, mobile number, and WhatsApp number up to date.
          </p>
        </div>

        {saved && (
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Profile updated successfully
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:grid-cols-2"
      >
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Name
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 focus-within:border-[#0E9488]">
            <UserRound size={18} className="text-gray-400" />
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your name"
            />
          </div>
        </label>

        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Email
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 focus-within:border-[#0E9488]">
            <Mail size={18} className="text-gray-400" />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter your email"
            />
          </div>
        </label>

        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Mobile
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 focus-within:border-[#0E9488]">
            <Phone size={18} className="text-gray-400" />
            <input
              type="tel"
              name="mobile"
              value={profile.mobile}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter mobile number"
            />
          </div>
        </label>

        <label className="grid gap-2 text-sm font-medium text-gray-700">
          WhatsApp
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 focus-within:border-[#0E9488]">
            <MessageCircle size={18} className="text-gray-400" />
            <input
              type="tel"
              name="whatsapp"
              value={profile.whatsapp}
              onChange={handleChange}
              className="w-full outline-none"
              placeholder="Enter WhatsApp number"
            />
          </div>
        </label>

        <div className="flex flex-wrap gap-3 lg:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-[#113768CC] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={() => setProfile(initialProfile)}
            className="rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Account_details;
