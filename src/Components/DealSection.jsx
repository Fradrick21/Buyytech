import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const products = [
  {
    title: "Smart 4K Television",
    price: 127.49,
    oldPrice: 229.99,
    image: "tv.png",
  },
  {
    title: "SmartView 4K TV 50",
    price: 127.49,
    oldPrice: 229.99,
    image: "samsung-phone-2.png",
  },
  {
    title: "PowerMax Wireless Headphone",
    price: 127.49,
    oldPrice: 229.99,
    image: "headphone.png",
  },
  {
    title: "NoiseFit Pulse Watch",
    price: 127.49,
    oldPrice: 229.99,
    image: "iphone.png",
  },
  {
    title: "X-Tech Bluetooth Laptop",
    price: 127.49,
    oldPrice: 229.99,
    image: "laptop.png",
  },
];

const DealsSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
  AOS.init({
    duration: 900, // global animation duration
    once: true      // animation only once
  });
}, []);

  return (
    <div className="w-full bg-white py-6 px-3 sm:px-4 md:px-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Limited-Time Steals
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            Up to 69% discount for limited time 🔥
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-3">

          {/* VIEW ALL */}
          <a href="#" className="bg-[#113768CC] text-white px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
            View All
          </a>

          {/* CATEGORY FILTERS */}
          <a href="#" className="border px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
            Smart Phones
          </a>
          <a href="#" className="border px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
            Camera
          </a>
          <a href="#" className="border px-3 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
            Headphone
          </a>

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 cursor-pointer" data-aos="fade-up">

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => navigate("/product_details")}
          >

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={item.image}
                alt=""
                className="h-32 sm:h-40 md:h-52 object-contain"
              />
            </div>

            {/* TITLE */}
            <p className="mt-2 text-center text-xs sm:text-sm md:text-base font-medium">
              {item.title}
            </p>

            {/* RATING */}
            <div className="flex items-center justify-center gap-1 mt-1">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
              ))}
              <Star size={12} className="text-gray-300" />
              <span className="text-[10px] text-gray-500">(189)</span>
            </div>

            {/* PRICE */}
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="text-[#113768CC] text-sm font-semibold">
                ₹{item.price}
              </span>
              <span className="line-through text-gray-400 text-xs">
                ₹{item.oldPrice}
              </span>
            </div>

            {/* ACTION */}
            <div className="flex items-center justify-between mt-3 gap-2">

              {/* WISHLIST */}
              <button
                type="button"
                className="p-2 border rounded-full"
                onClick={(event) => event.stopPropagation()}
              >
                <Heart size={16} />
              </button>

              {/* ADD TO CART */}
              <button
                type="button"
                className="flex items-center gap-1 bg-[#113768CC] text-white px-3 py-2 rounded-full text-xs sm:text-sm"
                onClick={(event) => event.stopPropagation()}
              >
                <ShoppingCart size={16} />
                <span className="hidden sm:inline">Add</span>
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default DealsSection;            
