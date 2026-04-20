import React, { useState } from "react";
import {
  LayoutGrid,
  ShoppingBag,
  Heart,
  MapPin,
  UserRound,
  KeyRound,
  LogOut,
} from "lucide-react";
import { AddressSection } from "./AddressSection";
import Account_details from "./Account_details";
import Password from "./Password";
import Orders from "./Orders";
import Wishlist from "./Wishlist";

const menuItems = [
  { label: "Dashboard", icon: <LayoutGrid size={18} /> },
  { label: "Orders", icon: <ShoppingBag size={18} /> },
  { label: "Wishlist", icon: <Heart size={18} /> },
  { label: "My Address", icon: <MapPin size={18} /> },
  { label: "My Account", icon: <UserRound size={18} /> },
  { label: "My Password", icon: <KeyRound size={18} /> },
  { label: "Log Out", icon: <LogOut size={18} /> },
];

const desktopPanels = {
  Dashboard: {
    title: "Dashboard",
    description: "Manage your profile, recent orders, saved items, and account settings from one place.",
  },
  Orders: {
    title: "Orders",
    description: "View your order history, track shipment progress, and review completed purchases.",
  },
  Wishlist: {
    title: "Wishlist",
    description: "Keep an eye on products you want to buy later and move them to cart whenever you're ready.",
  },
  "My Address": {
    title: "My Address",
    description: "Add, edit, and manage your saved delivery addresses for faster checkout.",
  },
  "My Account": {
    title: "My Account",
    description: "Update your personal details, email address, password, and communication preferences.",
  },
  "My Password": {
    title: "My Password",
    description: "Change your password securely by entering your current and new password details.",
  },
  "Log Out": {
    title: "Log Out",
    description: "End your session securely from this device whenever you're done shopping.",
  },
};

const Accountlist = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const activePanel = desktopPanels[activeItem];

  return (
    <div className="w-full bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Mobile: simple stacked list */}
          <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm lg:hidden">
          {menuItems.map((item) => {
              const active = activeItem === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveItem(item.label)}
                className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left text-sm font-semibold transition ${
                  active
                      ? "bg-[#113768CC] text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className={active ? "text-white" : "text-gray-500"}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop: polished sidebar + content */}
          <aside className="hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm lg:block">
            <div className="mb-4 rounded-2xl bg-gray-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Account
              </p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                My Dashboard
              </h2>
            </div>

            <div className="space-y-2">
              {menuItems.map((item) => {
                const active = activeItem === item.label;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveItem(item.label)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left text-sm font-semibold transition ${
                      active
                        ? "bg-[#113768CC] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className={active ? "text-white" : "text-gray-500"}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          <section className="hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:block">
            {activeItem === "Orders" ? (
              <Orders />
            ) : activeItem === "Wishlist" ? (
              <Wishlist />
            ) : activeItem === "My Address" ? (
              <AddressSection />
            ) : activeItem === "My Account" ? (
              <Account_details />
            ) : activeItem === "My Password" ? (
              <Password />
            ) : (
              <>
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9488]">
                      {activeItem}
                    </p>
                    <h1 className="mt-3 text-3xl font-bold text-gray-900">
                      {activePanel.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
                      {activePanel.description}
                    </p>
                  </div>

                  <div className="hidden rounded-2xl bg-gray-50 px-5 py-4 text-right xl:block">
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">Active</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">Quick Access</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Update profile or check recent activity
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">Security</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Keep your account details safe and updated
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <p className="text-sm text-gray-500">Orders</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Track purchases and delivery progress
                    </p>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accountlist;
