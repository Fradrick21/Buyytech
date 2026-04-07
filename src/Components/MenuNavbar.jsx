import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, LayoutGrid, Headphones, Menu, X } from "lucide-react";

const MenuNavbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categoryRef = useRef(null);

  const menus = [
    { name: "Home", dropdown: false },
    { name: "About Us", dropdown: true },
    { name: "Shop", dropdown: true },
    { name: "Sellers", dropdown: true },
    { name: "Mega Menu", dropdown: true },
    { name: "Blog", dropdown: true },
    { name: "Pages", dropdown: true },
    { name: "Contact", dropdown: false },
  ];

  const categories = [
    "Computers",
    "Laptops",
    "Computer Components",
    "Laptop & Computer Accessories",
    "Storage Devices",
    "Networking Devices",
    "Monitors & Displays",
    "Printers & Scanners",
    "CCTV & Security Systems",
    "Mobile & Tablet Accessories",
    "Audio & Entertainment",
    "Gaming Accessories",
    "Smart Devices",
    "Power & Backup",
    "Office & IT Essentials"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white border-t border-b border-gray-200 text-sm md:text-base lg:text-lg font-semibold">

      {/* 🔹 DESKTOP + TABLET */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-6 py-3">

        {/* CATEGORY */}
        <div ref={categoryRef} className="relative flex-shrink-0">
          <button
            type="button"
            className="bg-[#113768CC] text-white px-4 lg:px-5 py-2 lg:py-3 rounded-md flex items-center gap-2 cursor-pointer whitespace-nowrap"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <LayoutGrid size={18} />
            <span className="hidden sm:inline">Explore All Categories</span>
            <ChevronDown size={16} />
          </button>

          {categoryOpen && (
            <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-100 bg-white p-2 shadow-lg">
              {categories.map((category) => (
                <p
                  key={category}
                  className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-[#113768CC]"
                >
                  {category}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* MENUS */}
        <div className="flex items-center gap-3 md:gap-4 lg:gap-8 flex-wrap justify-center">
          {menus.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer whitespace-nowrap"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 hover:text-teal-700 text-sm lg:text-base">
                {item.name}
                {item.dropdown && <ChevronDown size={14} />}
              </div>

              {item.dropdown && activeDropdown === index && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md w-40 z-50">
                  <p className="px-4 py-2 hover:bg-gray-100">Option 1</p>
                  <p className="px-4 py-2 hover:bg-gray-100">Option 2</p>
                  <p className="px-4 py-2 hover:bg-gray-100">Option 3</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SUPPORT */}
        <div className="hidden lg:flex items-center gap-3 whitespace-nowrap">
          <div className="bg-gray-100 p-3 rounded-full">
            <Headphones size={18} />
          </div>
          <div>
            <p className="text-sm text-gray-500">24/7 Support</p>
            <p className="font-medium">888-777-999</p>
          </div>
        </div>

      </div>

      {/* 🔹 MOBILE HEADER */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">

        {/* CATEGORY */}
        <button
          className="bg-[#113768CC] text-white px-3 py-2 rounded-md flex items-center gap-2"
          onClick={() => setCategoryOpen(!categoryOpen)}
        >
          <LayoutGrid size={16} />
          <span>Categories</span>
          <ChevronDown size={14} />
        </button>

        {/* MENU BUTTON */}
        <button onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 MOBILE MENU */}
      {(open || categoryOpen) && (
        <div className="md:hidden px-4 pb-4 space-y-3">

          {categoryOpen && (
            <div className="space-y-1 rounded-xl border border-gray-200 bg-gray-50 p-3">
              <p className="mb-2 text-sm font-semibold text-gray-800">All Categories</p>
              {categories.map((category) => (
                <p
                  key={category}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-white"
                >
                  {category}
                </p>
              ))}
            </div>
          )}

          {open && (
            <>
              {menus.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between items-center py-2 border-b cursor-pointer"
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown size={16} />}
                  </div>

                  {item.dropdown && activeDropdown === index && (
                    <div className="pl-4 py-2 space-y-1 text-sm text-gray-600">
                      <p>Option 1</p>
                      <p>Option 2</p>
                      <p>Option 3</p>
                    </div>
                  )}
                </div>
              ))}

              {/* SUPPORT */}
              <div className="flex items-center gap-3 pt-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Headphones size={16} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">24/7 Support</p>
                  <p className="font-medium text-sm">888-777-999</p>
                </div>
              </div>
            </>
          )}

        </div>
      )}
    </div>
  );
};

export default MenuNavbar;
