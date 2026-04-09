import React, { useState } from "react";

export function PaymentSection() {
  const [selected, setSelected] = useState("bank");

  const options = [
    {
      id: "bank",
      label: "Bank Transfer",
      description:
        "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    { id: "cod", label: "Cash on Delivery" },
    { id: "check", label: "Check Payment" },
    { id: "card", label: "Credit Card", trailing: "VISA" },
  ];

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Payment</h2>

      <div className="space-y-3">
        {options.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`cursor-pointer rounded-[18px] border p-4 transition sm:rounded-[22px] ${
              selected === opt.id
                ? "border-emerald-300 bg-emerald-50/50"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                    selected === opt.id
                      ? "border-emerald-500"
                      : "border-slate-300"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      selected === opt.id ? "bg-emerald-500" : "bg-transparent"
                    }`}
                  />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {opt.label}
                </span>
              </div>

              {opt.trailing ? (
                <span className="text-base font-bold italic text-blue-700 sm:text-lg">
                  {opt.trailing}
                </span>
              ) : null}
            </div>

            <input
              type="radio"
              checked={selected === opt.id}
              readOnly
              className="hidden"
            />

            {selected === opt.id && opt.description ? (
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {opt.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
