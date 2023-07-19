import React from "react";

import messengerIcon from "../assets/messenger.svg";
import accordionDownIcon from "../assets/accordion-down.svg";
import notificationsIcon from "../assets/notifications.svg";
import avatarIcon from "../assets/avatar.png";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const backgroundColor = useSelector(
    (state) => state.configuration.configuration.mainColor
  );

  console.log(
    "backgroundColor",
    useSelector((state) => state.configuration.configuration.mainColor)
  );
  return (
    <nav
      style={{ "--custom-bg-color": backgroundColor }}
      className="bg-[var(--custom-bg-color)] p-4 flex"
    >
      <div className="w-1/4 py-2 flex pr-6 justify-end">
        <LogoComponent />
      </div>

      <div className="w-2/4 hidden sm:flex  justify-start">
        <InputComponent />
      </div>

      <div className="w-1/4 hidden sm:flex pr-6 justify-center">
        <HeaderRight />
      </div>
    </nav>
  );
};

const LogoComponent = () => {
  const logoSVG = useSelector(
    (state) => state.configuration.configuration.logo
  );
  return (
    <div>
      <img src={logoSVG} alt="Logo" className="h-8 w-auto ml-4" />
    </div>
  );
};

const InputComponent = () => {
  return (
    <div className="relative  rounded-lg overflow-hidden flex items-center w-full sm:w-2/3">
      <input
        type="text"
        className="hidden sm:block bg-gray-100 text-gray-800 placeholder-gray-500 py-2  pl-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter interests, keyword, company name, etc."
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500 transform scale-x-[-1]"
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
  );
};

const HeaderRight = () => {
  return (
    <div className="flex items-center space-x-6">
      <img src={messengerIcon} alt="Messenger" className="h-6 w-6" />
      <div className="flex items-center space-x-1">
        <span className="text-white text-xl">EN</span>
        <img src={accordionDownIcon} alt="Accordion Down" className="h-4 w-4" />
      </div>
      <img src={notificationsIcon} alt="Notifications" className="h-6 w-6" />
      <div className="flex items-center space-x-1">
        <img
          src={useSelector((state) => state.details.user.profilePicture)}
          alt="Avatar"
          className="h-6 w-6 rounded-full"
        />
        <img src={accordionDownIcon} alt="Accordion Down" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Navbar;
