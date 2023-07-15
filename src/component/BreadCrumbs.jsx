import React from "react";
import homeIcon from "../assets/home.svg";
import chevronRightIcon from "../assets/chevronRightGray.svg";

const BreadCrumbs = () => {
  const title = "Intelligent Finite Elements in Structural mechanics";
  return (
    <nav className="text-sm">
      <ol className="list-none p-0 flex">
        <li className="flex items-center">
          <img
            src={homeIcon}
            alt="Home Icon"
            className="h-4 w-4 text-gray-500 mx-2"
          />
        </li>
        <li className="flex items-center">
          <img
            src={chevronRightIcon}
            alt="Chevron Right Icon"
            className="h-4 w-4 text-gray-500 mx-0"
          />
          <a href="/products" className="text-gray-500 hover:text-gray-700">
            Offer
          </a>
        </li>
        <li className="flex items-center">
          <img
            src={chevronRightIcon}
            alt="Chevron Right Icon"
            className="h-4 w-4 text-gray-500 mx-2"
          />
          <span className="text-gray-700 overflow-ellipsis whitespace-nowrap">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
