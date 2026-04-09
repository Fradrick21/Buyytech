import React from "react";

export function CartSummary() {
  const items = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Headphones",
      pack: "1 x Premium unit",
      price: 349.99,
      oldPrice: 399.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Apple Watch Series 9 GPS",
      pack: "1 x Smart wearable",
      price: 429.0,
      oldPrice: 459.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Canon EOS M50 Mark II Camera",
      pack: "1 x Camera body",
      price: 699.99,
      oldPrice: 759.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Samsung 27-inch 4K Smart Monitor",
      pack: "1 x 27-inch display",
      price: 289.99,
      oldPrice: 329.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const vat = subtotal * 0.4;
  const discount = items.reduce(
    (sum, item) => sum + (item.oldPrice - item.price),
    0
  );
  const shipment = 0;
  const tax = 0;
  const total = subtotal + vat + shipment + tax - discount;

  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[28px] sm:p-5">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">Cart Items</h2>

      <div className="rounded-[18px] border border-slate-200 bg-white sm:rounded-[22px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b border-slate-100 px-3 py-3 last:border-b-0 sm:items-center sm:px-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 sm:h-14 sm:w-14">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-semibold text-slate-800">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-slate-500">{item.pack}</p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-sm font-semibold text-emerald-600">
                {"\u20B9"}
                {item.price}
              </p>
              <p className="text-xs text-slate-400 line-through">
                {"\u20B9"}
                {item.oldPrice}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[18px] bg-slate-50 p-4 sm:rounded-[22px] sm:p-5">
        <h3 className="mb-4 text-xl font-semibold text-slate-900">
          Order Summary
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-slate-500">
            <span>Sub-Total</span>
            <span className="font-semibold text-slate-700">
              {"\u20B9"}
              {subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>VAT (40%)</span>
            <span className="font-semibold text-slate-700">
              {"\u20B9"}
              {vat.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Discount</span>
            <span className="font-semibold text-slate-700">
              -{"\u20B9"}
              {discount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Shipment</span>
            <span className="font-semibold text-slate-700">
              {"\u20B9"}
              {shipment.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Tax</span>
            <span className="font-semibold text-slate-700">
              {"\u20B9"}
              {tax.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-5 border-t border-slate-200 pt-4">
          <div className="flex justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>
              {"\u20B9"}
              {total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full rounded-full bg-emerald-700 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
        Proceed to checkout
      </button>
    </div>
  );
}
