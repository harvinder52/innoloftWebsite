import React from "react";
import technologyIcon from "../assets/technologyIcon.svg";
import TRLIcon from "../assets/TRLIcon.svg";
import businessModelIcon from "../assets/businessModelIcon.svg";
import costsIcon from "../assets/costsIcon.svg";
import { useSelector } from "react-redux";

const OfferDetailsCard = () => {
  const businessModels = useSelector((state) => state.details.businessModels);
  const categories = useSelector((state) => state.details.categories);
  const investmentEffort = useSelector(
    (state) => state.details.investmentEffort
  );

  return (
    <div className="bg-white border border-gray p-4">
      <h2 className="text-base text-gray-600 font-bold mb-4">Offer Details</h2>
      <div className="flex flex-col  sm:flex-row">
        <div className="w-full sm:w-1/2 ">
          <div className="mb-5">
            <div className="flex items-center mb-2">
              <img
                src={technologyIcon}
                alt="Technology Icon"
                className="h-5 w-5 mr-2"
              />
              <span className="text-gray-400">Technology</span>
            </div>
            {categories.map((label) => (
              <span
                key={label}
                className="bg-gray-200 text-sm rounded-lg text-gray-400 mx-2 px-2 py-2 inline-block ml-auto mb-2 sm:mb-0"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mb-5">
            <div className="flex items-center mb-2">
              <img src={TRLIcon} alt="TRL Icon" className="h-5 w-5 mr-2" />
              <span className="text-gray-400">TRL</span>
            </div>
            <span className="bg-gray-200 text-sm text-sm rounded-lg text-gray-400 mx-2 px-2 py-2 inline-block ml-auto">
              {useSelector((state) => state.details.TRLvalue)}
            </span>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <div className="mb-5">
            <div className="flex items-center mb-2">
              <img
                src={businessModelIcon}
                alt="Business Model Icon"
                className="h-5 w-5 mr-2"
              />
              <span className="text-gray-400">Business Model</span>
            </div>
            {businessModels.map((label) => (
              <span
                key={label}
                className="bg-gray-200  text-sm rounded-lg text-gray-400 mx-2 px-2 py-2 inline-block ml-auto mb-2 sm:mb-0"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="mb-5">
            <div className="flex items-center mb-2">
              <img src={costsIcon} alt="Costs Icon" className="h-5 w-5 mr-2" />
              <span className="text-gray-400">Costs</span>
            </div>

            <span className="bg-gray-200  text-sm rounded-lg text-gray-400 mx-2 px-2 py-2 inline-block ml-auto">
              {investmentEffort}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailsCard;
