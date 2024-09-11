import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({ size }) => {
  const [sideNav, setSideNav] = useState(false);

  return (
    <div className="fixed z-50 w-full top-0 left-0 bg-white">
      <div className="flex justify-between py-[20px] px-[25px] text-[18px] font-semibold border-b relative">
        <div>
          <Link to="/">
            <p className="cursor-pointer">
              yum<span className="text-[#fbc531]">Food</span>
            </p>
          </Link>
        </div>

        <div>
          <ul className="sm:flex gap-8 hidden cursor-pointer text-[14px]">
            <Link to="/">
              <li className="hover:text-[#fbc531]">Home</li>
            </Link>
            <Link to="/aboutus">
              <li className="hover:text-[#fbc531]">About Us</li>
            </Link>
            <Link to="/ourfood">
              <li className="hover:text-[#fbc531]">OurFood</li>
            </Link>
            <Link to="/signin">
              <li className="hover:text-[#fbc531]">Sign In</li>
            </Link>
          </ul>
        </div>

        {sideNav ? (
          <div className=" bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10">
            <RxCross2
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => setSideNav(!sideNav)}
            />

            <ul className="flex gap-11 cursor-pointer flex-col">
              <Link to="/">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Home
                </li>
              </Link>
              <Link to="/aboutus">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  About Us
                </li>
              </Link>
              <Link to="/ourfood">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  OurFood
                </li>
              </Link>
              <Link to="/signin">
                <li
                  className="hover:text-[#fbc531]"
                  onClick={() => setSideNav(!sideNav)}
                >
                  Sign In
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="flex gap-5">
          <p>
            <RxHamburgerMenu
              size={30}
              className="cursor-pointer block sm:hidden"
              onClick={() => setSideNav(!sideNav)}
            />
          </p>
          <p>
            <Link to="/cart">
              <span className="flex justify-center items-center text-base">{size}</span>
              <FaCartShopping size={25} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
