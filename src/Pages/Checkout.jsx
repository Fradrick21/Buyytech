import React from "react";
import { AddressSection } from "../Components/AddressSection";
import { PaymentSection } from "../Components/PaymentSection";
import { CartSummary } from "../Components/CartSummary";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-3 py-4 sm:px-6 sm:py-6 lg:px-10">
      <div className="grid w-full gap-4 lg:gap-6 xl:grid-cols-[minmax(0,1.8fr)_380px]">
        <div className="space-y-4 sm:space-y-5">
          <AddressSection />
          <PaymentSection />
        </div>

        <div className="xl:sticky xl:top-6 xl:self-start">
          <CartSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
