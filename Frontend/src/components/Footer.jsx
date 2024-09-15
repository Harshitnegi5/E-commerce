import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 mt-40 text-sm ">
      <div className="flex flex-col">
        <img className="mb-5 w-32"  src={assets.logo} alt="Company Logo" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat esse
          quasi molestias minus voluptatem nulla iusto quod sint exercitationem
          animi quos dignissimos ut, laudantium placeat commodi aspernatur saepe
          officia consequuntur.
        </p>
      </div>
      <div>
        <p className="text-xl font-semibold mb-5 text-gray-700">COMPANY</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-semibold mb-5 text-gray-700">Get in Touch</p>
        <ul className="flex flex-col gap-2 text-gray-600">
          <li>Contact Us</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
