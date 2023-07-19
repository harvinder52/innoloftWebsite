import React from "react";
import homeIcon from "../assets/home.svg";
import organizationsIcon from "../assets/organizations.svg";
import groupIcon from "../assets/group.svg";
import accordionDownGrayIcon from "../assets/accordionDownGray.svg";
import avatarIcon from "../assets/avatar.png";
import { useSelector } from "react-redux";

export default function ProfileMenu() {
  let companyName = useSelector((state) => state.details.company.name);

  let name =
    useSelector((state) => state.details.user.firstName) +
    " " +
    useSelector((state) => state.details.user.lastName);
  console.log(useSelector((state) => state));
  return (
    <div className="max-w-sm ">
      <div className="p-4 border border-gray">
        <div className="flex items-start">
          <div className="flex items-center">
            <img
              src={useSelector((state) => state.details.user.profilePicture)}
              alt="Avatar"
              className="h-20 w-20 rounded-full"
            />
            <div className=" pl-4">
              <h2 className="text-base text-gray-600">{name}</h2>
              <p className="text-sm text-gray-400">{companyName}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul className="space-y-6 py-4">
            <li className="flex items-center">
              <img src={homeIcon} alt="Home Icon" className="h-5 w-5" />
              <span className="text-base pl-4 text-gray-400">Home</span>
            </li>
            <li className="flex items-center">
              <img src={groupIcon} alt="Members Icon" className="h-5 w-5" />
              <span className="text-base pl-4 text-gray-400">Members</span>
            </li>
            <li className="flex items-center">
              <img
                src={organizationsIcon}
                alt="Organizations Icon"
                className="h-5 w-5"
              />
              <span className="text-base pl-4 text-gray-400">
                Organizations
              </span>
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
