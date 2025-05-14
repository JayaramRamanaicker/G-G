import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-center "
        style={{ backgroundImage: `url(${assets.contact_bg})` }}
      >
        <div className="w-[1328px] m-auto py-[128px] px-[170px]">
          <h1 className="text-[72px] font-[700] text-center">Contact us</h1>
          <p className="text-[16px] text-center px-52">
            We welcome your questions and feedback. Our team strives to respond
            within 1-2 business days. Please don't hesitate to reach out to us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
