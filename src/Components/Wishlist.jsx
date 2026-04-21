import React from "react";
import { ShoppingCart, Trash2, Minus, Plus } from "lucide-react";

const wishlistItems = [
  {
    name: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    stock: "2 in Stock",
    price: "₹27.48",
    oldPrice: "₹30.25",
    rating: 4,
    reviews: 100,
    image: "🎧",
  },
  {
    name: "Smart Bluetooth Speaker",
    category: "Electronics",
    stock: "2 in Stock",
    price: "₹27.48",
    oldPrice: "₹30.25",
    rating: 4,
    reviews: 100,
    image: "🔊",
  },
  {
    name: "Portable Power Bank",
    category: "Electronics",
    stock: "2 in Stock",
    price: "₹27.48",
    oldPrice: "₹30.25",
    rating: 4,
    reviews: 100,
    image: "🔋",
  },
];

const stars = (count) =>
  Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < count ? "text-yellow-400" : "text-gray-300"}
    >
      ★
    </span>
  ));

const Wishlist = () => {
  return (
    <div className="w-full bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-5 flex flex-col gap-3 border-b border-gray-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
              Wishlist
            </h2>
            <p className="mt-1 text-sm text-gray-500">3 items is selected</p>
          </div>
        </div>

        <div className="space-y-5">
          {wishlistItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="absolute right-4 top-4 h-4 w-4 rounded-sm border border-gray-300 bg-white" />

              <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-start">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
                    {item.image}
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-[#0E9488]">{item.category}</p>

                    <div className="mt-2 flex items-center gap-1 text-sm">
                      {stars(item.rating)}
                      <span className="ml-1 text-gray-500">
                        ({item.reviews})
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-emerald-600">
                      {item.stock}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 lg:pt-1">
                  <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-2">
                    <p className="text-sm text-gray-500 lg:hidden">Price</p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        {item.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {item.oldPrice}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 lg:justify-start lg:gap-2">
                    <p className="text-sm text-gray-500 lg:hidden">Quantity</p>
                    <div className="inline-flex items-center rounded-full border border-gray-200 px-3 py-2">
                      <button
                        type="button"
                        className="text-gray-500 transition hover:text-gray-900"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm font-semibold text-gray-900">
                        1
                      </span>
                      <button
                        type="button"
                        className="text-gray-500 transition hover:text-gray-900"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-300"
                    >
                      Buy Now
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-[#113768CC] px-5 py-2.5 text-sm font-semibold text-white transition"
                    >
                      <ShoppingCart size={16} />
                      Add To Cart
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Trash2 size={15} />
                    Remove
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
