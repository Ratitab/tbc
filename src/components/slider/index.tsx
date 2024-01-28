import React from "react";
import ImageSlider from "./imageSlider";

const Slider: React.FC = () => {
  return (
    <div className="h-auto md:h-80 bg-[#2b2b2b] flex flex-col px-5 md:px-0 pb-16">
      <div className="max-w-4xl w-full m-auto">
        <h3 className="text-white text-2xl whitespace-nowrap py-8 text-left">
          პროექტის პარტნიორები
        </h3>
      </div>
      <ImageSlider />
    </div>
  );
};

export default Slider;
