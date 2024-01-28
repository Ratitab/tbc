import React, { useState, useEffect } from "react";
import TbcSvg from "../../assets/tbcSvg";
import { routes } from "../../utils/routes";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const DefaultHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(width, 'width')

  return (
    <header
      className={`flex justify-center bg-[#1A1E1F] h-[84px] z-50 sticky top-0 ${
        isScrolled ? "opacity-95 shadow-md" : ""
      }`}
    >
      <div className="max-w-4xl w-full flex justify-between p-5">
        <div className="flex items-center">
          <TbcSvg />
        </div>
        {/* <nav className="text-[#f0ffff] flex items-center">
          <ul className="flex space-x-12 whitespace-nowrap">
            {routes.map((route) => (
              <li
                key={route.id}
                className="text-custom hover:text-[#00AEF3] cursor-pointer transition-colors duration-300"
              >
                {route.label}
              </li>
            ))}
          </ul>
        </nav> */}
        {width > 768 ? (
          <nav className="text-[#f0ffff] flex items-center">
            <ul className="flex space-x-12 whitespace-nowrap">
              {routes.map((route) => (
                <li
                  key={route.id}
                  className="text-custom hover:text-[#00AEF3] cursor-pointer transition-colors duration-300"
                >
                  {route.label}
                </li>
              ))}
            </ul>
          </nav>
        ) : (
          <div className="text-[#f0ffff] cursor-pointer" onClick={toggleMenu}>
            ☰
          </div>
        )}
      </div>
    </header>
  );
};

export default DefaultHeader;
