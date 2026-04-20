import React, { useState } from "react";
import { Search } from "lucide-react";

const faqData = [
  {
    category: "SHOPPING",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We're always here to help you. Whether you have a question, need support, or just want to learn more about our services, our team is ready to assist you every step of the way.",
      },
      {
        q: "How can I track my order?",
        a: "You can track your order from your dashboard under 'My Orders' section.",
      },
      {
        q: "How long will it take to receive my order?",
        a: "Delivery times depend on your location and the shipping method selected at checkout. Most orders arrive within a few business days.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we offer international shipping to selected countries. Shipping availability and delivery time may vary by destination.",
      },
      {
        q: "Can I cancel or modify my order?",
        a: "You can request changes or cancellation before the order has been processed. Once it is packed or shipped, changes may no longer be possible.",
      },
      {
        q: "Do I need an account to place an order?",
        a: "No, you can place an order as a guest. However, creating an account makes it easier to track orders and manage your details.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeTab] = useState("SHOPPING");
  const [openIndex, setOpenIndex] = useState(null);

  const currentData = faqData.find((item) => item.category === activeTab);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-[#113768CC] text-white rounded-2xl py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-sm mb-6">Find quick answers to common questions.</p>

        {/* Search */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 max-w-3xl mx-auto">
          <Search className="text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full outline-none text-black"
          />
        </div>
      </div>

      {/* Questions */}
      <div className="mx-auto mt-6 max-w-7xl">
        {currentData.questions.map((item, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm"
          >
            <div
              onClick={() => toggle(index)}
              className="flex cursor-pointer items-center justify-between"
            >
              <h4 className="text-xl font-semibold">
                {index + 1}. {item.q}
              </h4>
              <span className="text-2xl leading-none">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "mt-4 max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-500">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
