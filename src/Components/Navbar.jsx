import { Headphones, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#113768CC] text-white text-xs md:text-sm lg:text-lg font-semibold py-3">

      {/* CONTAINER */}
      <div className="w-full flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between px-3 sm:px-4 lg:px-6 gap-2 md:gap-3">

        {/* 🔹 LEFT */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">

          {/* SUPPORT */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Headphones size={14} />
            <span className="hidden sm:inline">Need Support?</span>
          </div>

          {/* PHONE */}
          <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-[10px] sm:text-xs md:text-sm">
            (480) 555-0103
          </span>
        </div>

        {/* 🔹 CENTER (DESKTOP ONLY) */}
        <div className="hidden lg:flex items-center gap-2 justify-center">
          <span>Fashion Category</span>
          <span className="bg-yellow-400 text-black py-1 px-2 rounded-full text-sm">
            25% OFF
          </span>
          <span>Today</span>
        </div>

        {/* 🔹 RIGHT */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:justify-end text-[10px] sm:text-xs md:text-sm">
          <span
            className="cursor-pointer hover:text-yellow-300 md:border-r md:border-white md:px-3 lg:px-4"
            onClick={() => navigate("/about")}
          >
            About us
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 md:border-r md:border-white md:px-3 lg:px-4"
            onClick={() => navigate("/myaccount")}
          >
            My Account
          </span>
          <span
            className="cursor-pointer hover:text-yellow-300 md:border-r md:border-white md:px-3 lg:px-4"
            onClick={() => navigate("/wishlist")}
          >
            Wishlist
          </span>
          <span className="cursor-pointer hover:text-yellow-300">
            Track Order
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
