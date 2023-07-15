import React from "react";
import LogoSVG from "../assets/Logo.svg";
import HeaderLeft from "./headerLeft";

const Navbar = () => {
  return (
    <nav className="bg-[var(--custom-bg-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={LogoSVG} alt="Logo" className="h-8 w-auto ml-4" />
          </div>

          <div className="relative rounded-lg overflow-hidden flex items-center w-full sm:w-1/2">
            <input
              type="text"
              className="hidden sm:block bg-gray-100 text-gray-800 placeholder-gray-500 py-2 pr-10 pl-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter interests, keyword, company name, etc."
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-500 transform scaleX(-1)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 13.293l3.994 3.994a1 1 0 01-1.414 1.414l-3.994-3.994a7 7 0 111.414-1.414zM7 13a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="hidden sm:block">
            <HeaderLeft />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
