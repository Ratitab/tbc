import React from "react";
import Hero from "../../components/hero";
import About from "../../components/about";
import CourseList from "../../components/courseList";
import Slider from "../../components/slider";
import FAQ from "../../components/FAQ";

const TbcXUsaid: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <div className="">
        <div className="bg-[#161616]">

        <CourseList />
        </div>
        <div className="">

        <Slider />
        </div>
        <FAQ />

      </div>

    </div>
  );
};

export default TbcXUsaid;
