import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const HeroDealsBanner = () => {
  const [timeLeft, setTimeLeft] = useState(268 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      days,
      hours: String(hours).padStart(2, "0"),
      mins: String(mins).padStart(2, "0"),
      secs: String(secs).padStart(2, "0"),
    };
  };

  const { days, hours, mins, secs } = formatTime(timeLeft);

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 py-8 md:py-10">

      {/* GRADIENT BACKGROUND */}
      <div className="rounded-2xl md:rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 py-10 sm:py-12 md:py-16 flex justify-center items-center">

        {/* CENTER CARD */}
        <div className="bg-white rounded-2xl md:rounded-3xl px-5 sm:px-8 md:px-10 py-8 md:py-12 text-center max-w-2xl w-full">

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-3">
            Hurry! Limited Deals
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mb-6 md:mb-8">
            Cases you love, prices you'll love more.
          </p>

          {/* TIMER */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap mb-6 md:mb-8">

            <div className="bg-green-500 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl text-center w-[70px] sm:w-[80px] md:w-24">
              <p className="text-xs sm:text-sm">Days</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{days}</p>
            </div>

            <div className="bg-yellow-300 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl text-center w-[70px] sm:w-[80px] md:w-24">
              <p className="text-xs sm:text-sm">Hours</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{hours}</p>
            </div>

            <div className="bg-pink-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl text-center w-[70px] sm:w-[80px] md:w-24">
              <p className="text-xs sm:text-sm">Mins</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{mins}</p>
            </div>

            <div className="bg-teal-300 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl text-center w-[70px] sm:w-[80px] md:w-24">
              <p className="text-xs sm:text-sm">Secs</p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold">{secs}</p>
            </div>

          </div>

          {/* BUTTON (NOW <a>) */}
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[#113768CC] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-teal-800 transition w-full sm:w-auto"
          >
            Shop Now
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </div>
  );
};

export default HeroDealsBanner;