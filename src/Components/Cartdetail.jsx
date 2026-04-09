import React, { useState } from "react";
import { Minus, Plus, Trash2, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialCart = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    price: 349.99,
    oldPrice: 399.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Apple Watch Series 9 GPS",
    price: 429.0,
    oldPrice: 459.0,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Canon EOS M50 Mark II Camera",
    price: 699.99,
    oldPrice: 759.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Samsung 27-inch 4K Smart Monitor",
    price: 289.99,
    oldPrice: 329.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
  },
];

export default function Cartdetail() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const vat = subtotal * 0.4;
  const total = subtotal + vat;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
        <div className="h-full rounded-xl bg-white p-4 shadow sm:p-5 lg:col-span-2">
          <h2 className="mb-4 text-xl font-semibold">Shopping Cart</h2>

          <div className="mb-2 hidden grid-cols-[minmax(0,1.8fr)_0.7fr_0.9fr_0.8fr_0.5fr] gap-4 rounded-2xl bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-700 lg:grid">
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Total Price</p>
            <p className="text-center">Action</p>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 border-b py-4 last:border-b-0 lg:grid lg:grid-cols-[minmax(0,1.8fr)_0.7fr_0.9fr_0.8fr_0.5fr] lg:items-center lg:gap-4 lg:px-2"
            >
              <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                <img
                  src={item.image}
                  alt=""
                  className="h-20 w-20 shrink-0 rounded-lg object-cover"
                />

                <div className="min-w-0">
                  <h3 className="font-medium leading-6">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Color: Black, Size: 250ML
                  </p>
                  <p className="text-sm text-gray-400">Available: 2</p>
                  <div className="text-sm text-yellow-400">4.0 rating (118)</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:contents">
                <div className="rounded-xl bg-gray-50 px-3 py-2 text-left sm:text-center lg:min-w-[88px] lg:bg-transparent lg:px-0 lg:py-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400 lg:hidden">
                    Price
                  </p>
                  <p className="font-semibold lg:text-center">₹{item.price}</p>
                  <p className="text-sm text-gray-400 line-through lg:text-center">
                    ₹{item.oldPrice}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-full border px-3 py-2 lg:mx-auto lg:w-fit lg:py-1">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400 lg:hidden">
                    Qty
                  </span>
                  <Minus
                    size={16}
                    className="cursor-pointer"
                    onClick={() => updateQuantity(item.id, "dec")}
                  />
                  <span>{item.quantity}</span>
                  <Plus
                    size={16}
                    className="cursor-pointer"
                    onClick={() => updateQuantity(item.id, "inc")}
                  />
                </div>

                <div className="flex items-center rounded-xl bg-gray-50 px-3 py-2 font-semibold lg:justify-center lg:bg-transparent lg:px-0 lg:py-0">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400 lg:hidden">
                      Total
                    </p>
                    <p className="lg:text-center">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 rounded-xl bg-gray-50 px-3 py-2 text-gray-500 lg:justify-center lg:bg-transparent lg:px-0 lg:py-0">
                  <Heart className="cursor-pointer" size={18} />
                  <Trash2
                    className="cursor-pointer"
                    size={18}
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex h-full flex-col rounded-xl bg-white p-4 shadow sm:p-5">
          <div className="mb-4 rounded-2xl bg-blue-100 p-3 text-center text-sm text-black sm:rounded-full">
            Spend ₹60.00 for Free Shipping
          </div>

          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>

          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 rounded-full border px-4 py-2 outline-none sm:rounded-l-full sm:rounded-r-none"
            />
            <button className="rounded-full bg-[#113768CC] px-4 py-2 text-white sm:rounded-l-none sm:rounded-r-full">
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Sub-Total</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>VAT (40%)</span>
              <span>₹{vat.toFixed(2)}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Select State
              </label>
              <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none">
                <option>Select your state</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Andhra Pradesh</option>
                <option>Telangana</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Enter Pincode
              </label>
              <input
                type="text"
                placeholder="Enter delivery pincode"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-start gap-2 text-sm sm:items-center">
              <input type="checkbox" />
              <span>
                I agree with the <span className="text-blue-500">Terms</span> and{" "}
                <span className="text-blue-500">Conditions</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="mt-4 w-full rounded-full bg-[#113768CC] py-3 text-white"
            >
              Proceed to checkout
            </button>

            <button className="mt-3 w-full rounded-full border py-3">
              Continue Shopping {"->"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
