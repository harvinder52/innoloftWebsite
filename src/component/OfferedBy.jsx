import React from "react";
import avatarIcon from "../assets/avatar.png";
import LogoGroup from "../assets/Logogroup.svg";
import locationIcon from "../assets/location.svg";
import { useSelector } from "react-redux";

export default function OfferedBy() {
  const company = useSelector((state) => state.details.company);
  const name =
    useSelector((state) => state.details.user.firstName) +
    " " +
    useSelector((state) => state.details.user.lastName);
  let profilePicture = useSelector(
    (state) => state.details.user.profilePicture
  );
  let address = null;

  if (
    company &&
    company.address &&
    company.address.street &&
    company.address.house &&
    company.address.zipCode &&
    company.address.city &&
    company.address.city.name &&
    company.address.country &&
    company.address.country.name
  ) {
    address = `${company.address.street} ${company.address.house}, ${company.address.zipCode},\n${company.address.city.name}, ${company.address.country.name}`;
  }
  console.log(
    "company and street",
    useSelector((state) => state.details.company),
    useSelector((state) => state.details.user)
  );
  return (
    <div className="rounded overflow-hidden border border-gray p-4 h-full">
      <h2 className="text-base  text-gray-600 mb-2">Offered By</h2>
      <img className="py-4 h-20 w-320" src={company.logo} alt="Avatar" />
      <div className="flex items-start">
        <div className="flex items-center">
          <img
            src={profilePicture}
            alt="Avatar"
            className="h-20 w-20 rounded-full"
          />
          <div className="pl-4">
            <h2 className="text-sm text-gray-600">{name}</h2>
            <p className="text-sm text-gray-400">{company.name}</p>
          </div>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex items-center">
          <img
            src={locationIcon}
            alt="Location"
            className="h-5 w-5 rounded-full"
          />
          <div className="pl-2 py-6">
            <p className="text-sm font-normal text-gray-400 mb-2 leading-5">
              {address}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2535985434646!2d6.084173315996207!3d50.77814217952307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d7a4c2a20707%3A0x9a8e4806a3fcf27b!2sJ%C3%BClicher%20Stra%C3%9Fe%2072A%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sus!4v1631046310019!5m2!1sen!2sus"
          className="w-50 h-48"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
