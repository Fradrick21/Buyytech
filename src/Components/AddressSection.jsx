import React from "react";
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
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-6">
      <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-3">
        <h2 className="text-lg font-semibold text-slate-900">Address</h2>
        <button className="text-sm font-medium text-emerald-600">
          Add New Address
        </button>
      </div>

      <div className="rounded-[18px] border border-slate-200 bg-white p-4 sm:rounded-[22px] sm:p-5">
        <div className="mb-4 flex flex-col items-start justify-between gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
          <h3 className="font-semibold text-slate-800">Home Address</h3>
          <button className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-500">
            <PencilLine size={14} />
            Change
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-2 text-sm text-slate-600">
            <User size={16} /> Fradrick
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600">
            <Phone size={16} /> 9384975367
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600 break-all sm:break-normal">
            <Mail size={16} /> gobright@gmail.com
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600">
            <MapPin size={16} /> Puthur, Tamil Nadu, 620017, India
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600">
            <Clock size={16} /> 08:00 AM - 11:00 AM or 11:00 AM - 02:00 PM
          </div>

          <div className="flex items-start gap-2 text-sm text-slate-600">
            <Briefcase size={16} /> Flat Rate Shipment
          </div>
        </div>
      </div>
    </div>
  );
}
