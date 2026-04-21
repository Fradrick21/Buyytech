import React from "react";

const stats = [
  {
    title: "Quick Access",
    text: "Update profile or check recent activity",
  },
  {
    title: "Security",
    text: "Keep your account details safe and updated",
  },
  {
    title: "Orders",
    text: "Track purchases and delivery progress",
  },
];

const Accountlist = () => {
  return (
    <div className="w-full bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9488]">
              Dashboard
            </p>
            <h1 className="mt-3 text-3xl font-bold text-gray-900">
              My Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">
              Manage your profile, recent orders, saved items, and account settings from one place.
            </p>
          </div>

          <div className="hidden rounded-2xl bg-gray-50 px-5 py-4 text-right xl:block">
            <p className="text-sm text-gray-500">Status</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">Active</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="mt-2 text-lg font-semibold text-gray-900">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accountlist;
