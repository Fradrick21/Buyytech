import React from "react";
import { useLocation } from "react-router-dom";
import Accountlist from "../Components/Accountlist";
import { AddressSection } from "../Components/AddressSection";
import Account_details from "../Components/Account_details";
import Password from "../Components/Password";

const Myaccount = () => {
  const location = useLocation();
  const section = location.state?.section;
  const wrapSection = (content) => (
    <div className="w-full bg-gray-50 px-4 py-8 md:px-6 lg:px-8">
      <div className="w-full">{content}</div>
    </div>
  );

  if (section === "My Address") {
    return wrapSection(<AddressSection />);
  }

  if (section === "My Password") {
    return wrapSection(<Password />);
  }

  if (section === "My Account") {
    return wrapSection(<Account_details />);
  }

  return (
    <Accountlist></Accountlist>
  );
};

export default Myaccount;
