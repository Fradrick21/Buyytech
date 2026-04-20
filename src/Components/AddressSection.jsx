import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  PencilLine,
  Briefcase,
} from "lucide-react";

export function AddressSection() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      title: "Home Address",
      name: "Fradrick",
      phone: "9384975367",
      email: "gobright@gmail.com",
      location: "Puthur, Tamil Nadu, 620017, India",
      time: "08:00 AM - 11:00 AM or 11:00 AM - 02:00 PM",
      shipping: "Flat Rate Shipment",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    location: "",
    time: "",
    shipping: "",
  });

  const openAddForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      name: "",
      phone: "",
      email: "",
      location: "",
      time: "",
      shipping: "",
    });
    setIsFormOpen(true);
  };

  const openEditForm = (address) => {
    setEditingId(address.id);
    setFormData({
      title: address.title,
      name: address.name,
      phone: address.phone,
      email: address.email,
      location: address.location,
      time: address.time,
      shipping: address.shipping,
    });
    setIsFormOpen(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId === null) {
      setAddresses((prev) => [
        ...prev,
        { ...formData, id: Date.now() || Math.random() },
      ]);
    } else {
      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingId ? { ...address, ...formData } : address
        )
      );
    }

    setIsFormOpen(false);
  };

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6">
      <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3">
        <h2 className="text-lg font-semibold text-slate-900">Address</h2>
        <button
          type="button"
          onClick={openAddForm}
          className="rounded-full bg-[#113768CC] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          Add New Address
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="rounded-[18px] border border-slate-200 bg-white p-4 sm:rounded-[22px] sm:p-5"
          >
            <div className="mb-4 flex flex-col items-start justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
              <h3 className="font-semibold text-slate-800">{address.title}</h3>
              <button
                type="button"
                onClick={() => openEditForm(address)}
                className="flex items-center gap-1 rounded-full bg-[#113768CC] px-3 py-1 text-sm text-white transition hover:opacity-90"
              >
                <PencilLine size={14} />
                Change
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <User size={16} /> {address.name}
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <Phone size={16} /> {address.phone}
              </div>
              <div className="flex items-start gap-2 break-all text-sm text-slate-600 sm:break-normal">
                <Mail size={16} /> {address.email}
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin size={16} /> {address.location}
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <Clock size={16} /> {address.time}
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <Briefcase size={16} /> {address.shipping}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-xl font-semibold text-slate-900">
                {editingId === null ? "Add New Address" : "Edit Address"}
              </h3>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-500"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Title
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Home Address"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Location
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter full address"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Delivery Time
                <input
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="Enter delivery time"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
                Shipping Method
                <input
                  name="shipping"
                  value={formData.shipping}
                  onChange={handleChange}
                  placeholder="Enter shipping method"
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
                />
              </label>

              <div className="mt-2 flex gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-full bg-[#113768CC] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {editingId === null ? "Save Address" : "Update Address"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
