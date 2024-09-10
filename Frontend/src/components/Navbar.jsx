import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium ">

      <Link to={"/"}>
      <img src={assets.logo} className="w-36" alt="" />

      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col gap-1 items-center">
          <p className="font-medium font-[monument]">HOME</p>
          <hr className="w-20 border-0 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col gap-1 items-center">
          <p className="font-medium font-[monument]">COLLECTION</p>
          <hr className="w-20 border-0 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="about" className="flex flex-col gap-1 items-center">
          <p className="font-medium font-[monument]">ABOUT</p>
          <hr className="w-20 border-0 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col gap-1 items-center">
          <p className="font-medium font-[monument]">CONTACT</p>
          <hr className="w-20 border-0 h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          className="w-5 h-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="hidden  group-hover:block absolute right-0 pt-4    ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="cart">10</p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      <div className={` h-screen absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-5 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              className=" h-4 rotate-180"
              alt=""
            />
            <p className="font-medium font-[monument]">Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border font-semibold font-[monument]"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-2 font-semibold font-[monument]"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-2 font-semibold font-[monument]"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border-2 font-semibold font-[monument]"
            to="/contact"
          >
            CONTACT{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
