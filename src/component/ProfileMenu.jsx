import React from "react";
import homeIcon from "../assets/home.svg";
import organizationsIcon from "../assets/organizations.svg";
import groupIcon from "../assets/group.svg";
import accordionDownGrayIcon from "../assets/accordionDownGray.svg";
import avatarIcon from "../assets/avatar.png";

export default function ProfileMenu() {
  return (
    <div className="max-w-sm">
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex items-center">
            <img
              src={avatarIcon}
              alt="Avatar"
              className="h-20 w-20 rounded-full"
            />
            <div className=" pl-4">
              <h2 className="text-3xl text-gray-600">Harv Lamsir</h2>
              <p className="text-xl text-gray-500">Innoloft Gmbh</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul className="space-y-6 py-4">
            <li className="flex items-center">
              <img src={homeIcon} alt="Home Icon" className="h-5 w-5" />
              <span className="text-xl pl-4 text-gray-500">Home</span>
            </li>
            <li className="flex items-center">
              <img src={groupIcon} alt="Members Icon" className="h-5 w-5" />
              <span className="text-xl pl-4 text-gray-500">Members</span>
            </li>
            <li className="flex items-center">
              <img
                src={organizationsIcon}
                alt="Organizations Icon"
                className="h-5 w-5"
              />
              <span className="text-xl pl-4 text-gray-500">Organizations</span>
              <img
                src={accordionDownGrayIcon}
                alt="Accordion Down Icon"
                className="h-5 w-5 ml-32 text-gray-500"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
