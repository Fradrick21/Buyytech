import React, { useState } from "react";
import {
  CalendarDays,
  Package,
  Truck,
  CreditCard,
  ClipboardList,
} from "lucide-react";

const tabs = ["All", "Processing", "Delivering", "Completed", "Cancelled"];

const orders = [
  {
    id: "#69537",
    status: "Processing",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "$400.00",
    paid: true,
  },
  {
    id: "#69537",
    status: "Cancelled",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "$400.00",
    paid: true,
  },
  {
    id: "#69537",
    status: "Delivering",
    date: "11:12 AM, 24 April, 2027",
    items: "114 Products",
    method: "Free Delivery",
    amount: "$400.00",
    paid: true,
  },
  {
    id: "#69538",
    status: "Completed",
    date: "09:30 AM, 18 April, 2027",
    items: "56 Products",
    method: "Free Delivery",
    amount: "$220.00",
    paid: true,
  },
];

const statusStyles = {
  Processing: "bg-amber-100 text-amber-700",
  Delivering: "bg-sky-100 text-sky-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-rose-100 text-rose-700",
};

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders =
    activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Orders History
        </h2>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-teal-100 text-teal-700"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="space-y-5">
        {filteredOrders.map((order, index) => {
          const badgeClass = statusStyles[order.status] || "bg-gray-100 text-gray-700";

          return (
            <div
              key={`${order.id}-${index}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-gray-700">
                  Order ID: {order.id}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div className="grid gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <CalendarDays size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Order Date:</span>
                    <span>{order.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Order Items:</span>
                    <span>{order.items}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Delivery Method:</span>
                    <span>{order.method}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CreditCard size={16} className="text-gray-500" />
                    <span className="w-28 text-gray-500">Amount Payable:</span>
                    <span>
                      {order.amount} <span className="text-emerald-600">(Paid)</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-3 md:items-end">
                  <button
                    type="button"
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    className="rounded-full bg-[#113768CC] px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Order Again
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredOrders.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
            <ClipboardList className="mx-auto mb-3 text-gray-400" size={28} />
            No orders found in this section.
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
