import React from "react";
import Arrow from "../../assets/arrow";

interface CousrseProps {
  title: string;
  registationOnGoing: boolean;
  img: string;
}

const Course: React.FC<CousrseProps> = (props) => {
  return (
    <div className="border border-[#555555] mb-4">
      <div className="aspect-ratio-16 aspect-ratio-9">
        <img src={props.img} alt={props.title} className="h-auto w-full" />
      </div>
      <div className="p-4 text-white">
        <span className="flex mt-4">{props.title}</span>
        <span className="flex mt-8 text-custom">
          რეგისტრაცია
          {props.registationOnGoing ? "მიმდინარეობს" : "დასრულებულია"}
        </span>
        <div className="flex items-center text-[#00AEF3] mt-28 cursor-pointer transition-all duration-300">
        <Arrow />
        <span className="ml-2 transition-all duration-300 hover:text-[#0c5975]">კურსის დეტალები</span>
      </div>
      </div>
    </div>
  );
};

export default Course;
