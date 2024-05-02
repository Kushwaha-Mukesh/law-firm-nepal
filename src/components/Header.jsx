"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex justify-around items-center pt-4 relative">
      <div>
        <img
          className="w-20 h-20 rounded-full"
          src="law-firm-logo.jpg"
          alt="logo-img"
        />
      </div>
      <div className="w-1/2 md:flex justify-between hidden">
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Home
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          About Us
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Services
        </span>
        <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
          Contact Us
        </span>
      </div>
      {showMenu ? (
        <RxCross2
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      ) : (
        <RxHamburgerMenu
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      )}

      {showMenu && (
        <div className="w-[200px] flex flex-col items-start gap-6 py-6 px-2 absolute top-20 right-0 h-screen bg-[#2b2324]">
          <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
            Home
          </span>
          <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
            About Us
          </span>
          <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
            Services
          </span>
          <span className="hover:bg-[#cc998b] rounded-lg text-[#F5F5DC] px-2 py-1 cursor-pointer">
            Contact Us
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
