import React from "react";
import { Truck, Headphones, RefreshCcw } from "lucide-react";

const features = [
  {
    icon: <Truck size={24} />,
    title: "Free Shipping",
    desc: "Enjoy the Convenience of Free Shipping on Every Order",
  },
  {
    icon: <Headphones size={24} />,
    title: "24x7 Support",
    desc: "Round-the-Clock Assistance, Anytime You Need It",
  },
  {
    icon: <RefreshCcw size={24} />,
    title: "30 Days Return",
    desc: "Your Satisfaction is Our Priority: Return Any Product Within 30 Days",
  },
];

const Aboutfeatures = () => {
  return (
    <div className="bg-gray-100 py-16">
      
      {/* Background Shape */}
      <div className="bg-pink-200 rounded-[40px] py-16 px-6 relative overflow-hidden">

        {/* Top Curved White Shape */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-gray-100 rounded-b-[60px]" />

        {/* Heading */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Quality is our priority
          </h2>
          <p className="text-gray-600 mt-2">
            Because you deserve nothing less than the best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              
              {/* Icon Circle */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-yellow-100 text-gray-800">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Aboutfeatures;