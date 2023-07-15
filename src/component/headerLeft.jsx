import React from "react";
import messengerIcon from "../assets/messenger.svg";
import accordionDownIcon from "../assets/accordion-down.svg";
import notificationsIcon from "../assets/notifications.svg";
import avatarIcon from "../assets/messenger.svg";

const HeaderLeft = () => {
  return (
    <div className="flex items-center space-x-6">
      <img src={messengerIcon} alt="Messenger" className="h-6 w-6" />
      <div className="flex items-center space-x-1">
        <span className="text-white text-xl">EN</span>
        <img src={accordionDownIcon} alt="Accordion Down" className="h-4 w-4" />
      </div>
      <img src={notificationsIcon} alt="Notifications" className="h-6 w-6" />
      <div className="flex items-center space-x-1">
        <img src={avatarIcon} alt="Avatar" className="h-6 w-6 rounded-full" />
        <img src={accordionDownIcon} alt="Accordion Down" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default HeaderLeft;
