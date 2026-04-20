import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"; 

const categories = [
  {
    lines: ["Drones &", "Accessories"],
    image: "drone.png",
  },
  {
    lines: ["Phones,", "Tablets &", "Accessories"],
    image: "iphone.png",
  },
  {
    lines: ["Laptops &", "Computers"],
    image: "tablet.png",
  },
  {
    lines: ["Power Banks &", "Chargers"],
    image: "power-bank.png",
  },
  {
    lines: ["Apple", "Products"],
    image: "ipad-2.png",
  },
  {
    lines: ["Wearable", "Cameras &", "Action Cams"],
    image: "action-cam.png",
  },
  {
    lines: ["Gaming", "Consoles"],
    image: "game-pad.png",
  },
  {
    lines: ["Home", "Appliances"],
    image: "washing-machine.png",
  },
  {
    lines: ["Televisions &", "Home Theater"],
    image: "tv.png",
  },
  {
    lines: ["Game", "Controller"],
    image: "playstation.png",
  },
  {
    lines: ["Storage &", "Digital Devices"],
    image: "storage.png",
  },
  {
    lines: ["Audio", "Equipment's"],
    image: "earpods.png",
  },
];

function CategoryGrid() {
   useEffect(() => {
    AOS.init({
      duration: 900, // global animation duration
      once: true      // animation only once
    });
  }, []);

  return (
    <div className="w-full px-3 py-8 sm:px-4 md:px-6 lg:px-8">
      
      <div className="mx-auto grid w-full max-w-[1700px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 md:gap-5 lg:grid-cols-6 lg:gap-6" data-aos="fade-up">

        {categories.map((item, index) => (
          <div
            key={index}
            className="
              group flex flex-col md:flex-row items-center gap-3
              rounded-[14px] md:rounded-[18px]
              border border-slate-200 bg-white
              px-3 py-3 sm:px-4 sm:py-4 md:px-4 md:py-5
              shadow-sm transition
              hover:-translate-y-1 hover:shadow-lg
              cursor-pointer
              overflow-hidden
              text-center md:text-left
            "
          >
            
            {/* IMAGE */}
            <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-16 md:w-16 flex items-center justify-center rounded-lg overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.lines.join(" ")}
                className="h-full w-full object-contain transition group-hover:scale-105"
              />
            </div>

            {/* TEXT */}
            <p className="flex-1 min-w-0 text-sm sm:text-base md:text-[17px] font-semibold leading-[1.4] text-slate-900 group-hover:text-blue-600 break-words">
              {item.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default CategoryGrid;