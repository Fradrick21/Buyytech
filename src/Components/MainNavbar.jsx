import React, { useState } from "react";
import {
  User,
  ChevronDown,
  LogIn,
  UserPlus,
  KeyRound,
  Lock,
  ShieldCheck,
  Search,
  ShoppingCart,
  Heart,
} from "lucide-react";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Login", icon: <LogIn size={16} /> },
    { name: "Register", icon: <UserPlus size={16} /> },
    { name: "Forgot Password", icon: <KeyRound size={16} /> },
    { name: "Set Password", icon: <Lock size={16} /> },
    { name: "OTP Verification", icon: <ShieldCheck size={16} /> },
  ];

  return (
    <div className="w-full bg-gray-100 py-3 md:py-4">
      {/* CONTAINER */}
      <div className="w-full flex flex-col md:flex-row md:items-center gap-4 px-4 md:px-6">
        {/* 🔹 TOP ROW (LOGO + RIGHT ICONS MOBILE) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* MOBILE RIGHT ICONS */}
          <div className="flex items-center gap-3 md:hidden">
            {/* ACCOUNT ICON */}
            <div className="relative" onClick={() => setOpen(!open)}>
              <div className="bg-yellow-400 p-2 rounded-full">
                <User size={18} />
              </div>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 top-12 w-48 bg-white shadow-lg rounded-md z-50">
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CART ICON */}
            <div className="bg-yellow-400 p-2 rounded-full">
              <ShoppingCart size={18} />
            </div>

            {/* WISHLIST ICON */}
            <div className="bg-yellow-400 p-2 rounded-full">
              <Heart size={18} />
            </div>
          </div>
        </div>

        {/* 🔹 SEARCH BAR */}
        <div className="w-full md:flex-1">
          <div className="flex items-center w-full bg-white border rounded-full px-4 py-3 md:px-5 md:py-4">
            <input
              type="text"
              placeholder="Search for the Items"
              className="flex-1 outline-none text-sm md:text-base"
            />
            <Search className="text-gray-500" size={20} />
          </div>
        </div>

        {/* 🔹 RIGHT SIDE (DESKTOP ONLY) */}
        <div className="hidden md:flex items-center gap-8 min-w-[260px] justify-end">
          {/* WISHLIST */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-yellow-400 p-3 rounded-full">
              <Heart size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Wishlist</p>
              <p className="font-medium">0 Items</p>
            </div>
          </div>

          {/* CART */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-yellow-400 p-3 rounded-full">
              <ShoppingCart size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Cart</p>
              <p className="font-medium">0 Items</p>
            </div>
          </div>

          {/* ACCOUNT */}
          <div
            className="relative flex items-center gap-3 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div className="bg-yellow-400 p-3 rounded-full">
              <User size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Account</p>
              <p className="font-medium flex items-center gap-1">
                Login <ChevronDown size={14} />
              </p>
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute top-full mt-2 right-0 w-52 bg-white shadow-lg rounded-md z-50">
                {menu.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 border-b last:border-none"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
