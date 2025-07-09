import React from "react";
import { assets } from "../assets/assets";

const GenerateButton = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">
        See the magic. Try now
      </h1>
      <button className="flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full cursor-pointer">
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>
    </div>
  );
};

export default GenerateButton;
