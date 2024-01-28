import React, { useEffect, useState } from "react";
import USAID from "../../assets/USAIDLogo.webp";
import space from "../../assets/SpaceIntLogo.webp";
import TNET from "../../assets/TNETlogo.webp";
import tegeta from "../../assets/tegetaLogo.webp";
import spectre from "../../assets/SpectreLogo.webp";
import TBCleasing from "../../assets/TBCLeasing.webp";
import UFC from "../../assets/UFClogo.webp";
import SliderArrow from "../../assets/sliderArrow";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const PaginationComponent = () => {
  const images = [USAID, space, TNET, tegeta, spectre, TBCleasing, UFC];
  const { width } = useWindowDimensions();
  const itemsPerPage = 3;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [onclickPage, setOnclickPage] = useState(1);
  const [fadeState, setFadeState] = useState("");
  const [isArrow, setIsArrow] = useState(false);
  const [arrowDirection, setArrowDirection] = useState();

  const handleTransitionEnd = (event: any) => {
    if (event.propertyName === "opacity" && fadeState === "fade-out") {
      if (!isArrow) {
        setCurrentPage(onclickPage);
      } else {
        if (arrowDirection === "next") {
          setCurrentPage((prevPage) =>
            prevPage === totalPages ? 1 : prevPage + 1
          );
        } else {
          setCurrentPage((prevPage) =>
            prevPage === 1 ? totalPages : prevPage - 1
          );
        }
      }
      setFadeState("fade-in");
    }
  };

  const handlePageChange = () => {
    setFadeState("fade-out");
    setIsArrow(false);
  };

  const handleArrowClick = (direction: any) => {
    setFadeState("fade-out");
    setIsArrow(true);
    setArrowDirection(direction);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleArrowClick("next");
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentPage]);

  const renderImages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
      <div
        className={`flex flex-col md:block fade-container ${fadeState} items-center space-x-8 `}
        onTransitionEnd={(event) => handleTransitionEnd(event)}
      >
        {images.slice(startIndex, endIndex).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="py-4 md:py-0" />
        ))}
      </div>
    );
  };

  useEffect(() => {
    setFadeState("fade-in");
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex justify-between w-full items-center">
        <div className="ml-12">
          <SliderArrow
            onClick={() => {
              handleArrowClick("prev");
            }}
          />
        </div>
        <div className="mr-12">
          <SliderArrow
            flip={true}
            onClick={() => {
              handleArrowClick("next");
            }}
          />
        </div>
      </div>
      {renderImages()}
      <div className="flex justify-center mt-8 space-x-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full bg-white cursor-pointer transition-colors ${
              currentPage === index + 1 ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => {
              handlePageChange();
              setOnclickPage(index + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PaginationComponent;
