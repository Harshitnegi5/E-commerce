import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center w-full justify-between py-5 font-medium ">
      <NavLink to={"/"}>
        <img src={assets.logo} className="w-36" alt="" />
      </NavLink>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${isActive ? "border-b-2 border-gray-700" : ""} `
          }
        >
          <p className="font-medium font-[monument]">HOME</p>
        </NavLink>
        <NavLink
          to="/Collection"
          className={({ isActive }) =>
            ` ${isActive ? "border-b-2 border-gray-700" : ""} `
          }
        >
          <p className="font-medium font-[monument]">COLLECTION</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` ${isActive ? "border-b-2 border-gray-700" : ""} `
          }
        >
          <p className="font-medium font-[monument]">ABOUT</p>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            ` ${isActive ? "border-b-2 border-gray-700" : ""} `
          }
        >
          <p className="font-medium font-[monument]">CONTACT</p>
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

      <div
        className={` h-screen absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
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
            className={({ isActive }) =>
              `py-2 pl-6 border font-semibold ${
                isActive && "bg-black text-white"
              } font-[monument]`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border font-semibold ${
                isActive && "bg-black text-white"
              } font-[monument]`
            }
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border font-semibold ${
                isActive && "bg-black text-white"
              } font-[monument]`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border font-semibold ${
                isActive && "bg-black text-white"
              } font-[monument]`
            }
            to="/contatc"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;