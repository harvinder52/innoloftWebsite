import React from "react";
import Image from "../assets/image.png";

const HeroContainer = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="relative">
        <img
          src={Image}
          className="w-full h-auto lightgray 50% / cover no-repeat"
        />
        <div className="absolute top-0 left-0">
          <button className="bg-blue-500 text-white py-4 px-4 rounded-tl-[20%] rounded-tl-none">
            P
          </button>
          <button className="bg-white text-black py-4 px-6 rounded-br-[20%] rounded-bl-none ">
            Patent
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-gray-700 font-open-sans font-medium text-base leading-6">
          Intelligent Finite Elements in Structural mechanics
        </div>
        <div className="text-gray-600 py-2 font-normal text-sm leading-7">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
