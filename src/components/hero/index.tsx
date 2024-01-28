import React from "react";
import photo from "../../assets/mainBodyImage.webp";

const Hero: React.FC = () => {
  const heroStyle = {
    backgroundImage: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: '352px'
  };

  return (
    <section className="flex justify-center relative" style={heroStyle}>
      <div className="max-w-4xl w-full px-5 md:px-0">
        <h3 className=" font-extrabold text-white translate-y-1/2">
          <span className="text-4xl block">TBC x USAID</span>
          <span className="mt-6 text-3xl block">
            ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
