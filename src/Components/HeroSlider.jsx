import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

import girlWasher from "../assets/girl-washer.jpeg";
import fridgeImg from "../assets/fridge-banner.jpeg";
import tv1 from "../assets/1.jpeg";
import tv2 from "../assets/2.jpeg";
import tv3 from "../assets/3.jpeg";
import tv4 from "../assets/4.jpeg";

const slides = [
  {
    id: 1,
    offer: "25% OFF",
    title: "Experience a Smarter, More Convenient Home.",
    description:
      "Smart lights, security systems, speakers, and IoT devices designed to bring convenience and intelligence to your everyday life.",
    bgColor: "#9fc5d6",
    image: girlWasher,
  },
  {
    id: 2,
    offer: "30% OFF",
    title: "Upgrade Your Kitchen With Premium Appliances.",
    description:
      "Discover stylish and energy-efficient appliances made to simplify your daily life.",
    bgColor: "#f2c9a5",
    image: fridgeImg,
  },
  {
    id: 3,
    offer: "40% OFF",
    title: "Enjoy Next-Level Entertainment At Home.",
    description:
      "Bring cinematic viewing, immersive audio, and smart control into your living room.",
    bgColor: "#b8d8c2",
    image: tv1,
  },
  {
    id: 4,
    offer: "35% OFF",
    title: "Upgrade Your Viewing Experience.",
    description:
      "Crystal clear visuals and immersive sound for your home entertainment.",
    bgColor: "#d6b8d8",
    image: tv2,
  },
  {
    id: 5,
    offer: "20% OFF",
    title: "Smart Devices for Everyday Life.",
    description:
      "Upgrade your home with the latest smart devices and automation tools.",
    bgColor: "#c2d8f0",
    image: tv3,
  },
  {
    id: 6,
    offer: "50% OFF",
    title: "Big Savings on Electronics.",
    description: "Get amazing deals on TVs, appliances, and home electronics.",
    bgColor: "#f0c2c2",
    image: tv4,
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="w-full py-4">
      {/* CONTAINER */}
      <div
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[32px] transition-all duration-700"
        style={{ backgroundColor: slides[current].bgColor }}
      >
        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          <ChevronLeft size={28} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        >
          <ChevronRight size={28} />
        </button>

        {/* CONTENT */}
        <div className="grid min-h-[500px] grid-cols-1 items-center px-6 py-6 md:grid-cols-2 md:px-16 lg:min-h-[600px]">

          {/* TEXT */}
          <div className="z-10 max-w-[680px] text-center md:text-left transition-all duration-500">
            <div className="mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="text-xl font-semibold text-white md:text-2xl">
                Exclusive offer
              </span>
              <span className="rounded-full bg-lime-300 px-4 py-1 text-sm font-semibold text-slate-800">
                {slides[current].offer}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              {slides[current].title}
            </h1>

            <p className="mt-6 text-base text-white/90 md:text-lg">
              {slides[current].description}
            </p>

            <button className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 hover:bg-yellow-500 w-full md:w-auto">
              Shop Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>

          {/* IMAGE (HIDDEN IN MOBILE) */}
          <div className="hidden md:flex items-end justify-end">
            <img
              src={slides[current].image}
              alt="banner"
              className="h-[320px] md:h-[420px] lg:h-[500px] object-contain transition-all duration-700"
            />
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-t-[40px] bg-white px-10 py-4 shadow-md">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-16 bg-teal-600"
                  : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;