import React from "react";
import Course from "./course";
import data from "./data";

const CourseList: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl px-5 md:px-0">
        <div className="text-color-[#DBDBDB] text-white text-2xl mt-8">
          სასწავლო კურსები
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 ">
          {data.map((course) => (
            <Course
              key={course.title}
              title={course.title}
              img={course.img}
              registationOnGoing={course.isOnGoing}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
