import React from "react";
import { Truck, Headphones, RefreshCcw, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Truck size={28} />,
    title: "Free Shipping",
    desc: "Enjoy the Convenience of Free Shipping on Every Order",
  },
  {
    icon: <Headphones size={28} />,
    title: "24x7 Support",
    desc: "Round-the-Clock Assistance, Anytime You Need It",
  },
  {
    icon: <RefreshCcw size={28} />,
    title: "30 Days Return",
    desc: "Your Satisfaction is Our Priority: Return Any Product Within 30 Days",
  },
  {
    icon: <DollarSign size={28} />,
    title: "Secure Payment",
    desc: "Seamless Shopping Backed by Safe and Secure Payment Options",
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-[#28558fcc] px-6 py-16 lg:mx-6">
      
      {/* Top Curved White Section */}
      <div className="absolute top-0 left-1/2 flex h-[120px] w-[72%] max-w-3xl -translate-x-1/2 flex-col items-center justify-center rounded-b-[80px] bg-white px-6 text-center shadow-sm sm:w-[66%] md:w-[58%] lg:w-[52%]">
        <h2 className="text-2xl md:text-3xl font-bold">
          Quality is our priority
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Because you deserve nothing less than the best.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-100 text-black mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
