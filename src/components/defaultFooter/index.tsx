import React from "react";
import TbcLogoFooter from "../../assets/Asset 1@2x.webp";
import fcLogo from "../../assets/facebookLogo.webp";
import youtubeLogo from "../../assets/youtubeLogo.webp";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#1a1e1f] flex justify-center">
      <div className="max-w-4xl w-full flex justify-between py-16 px-5 md:px-0">
        <div>
          <img src={TbcLogoFooter} alt="tbclogo" className="flex md:hidden" />
          <div>
            <img src={TbcLogoFooter} alt="tbclogo" className="hidden md:flex" />
            <h2 className="text-[#f4f4f4]">
              <span className="inline-block mt-4">
                © 2023 ყველა უფლება დაცულია
              </span>
              <span className="hover:text-[#9a9a9a] transition-colors duration-300 cursor-pointer block mt-4">
                წესები და პირობები
              </span>
            </h2>
          </div>
        </div>

        <div className="flex justify-between md:flex-col">
          <div className="flex justify-end space-x-2">
            <a
              href="https://www.facebook.com/tbcbank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fcLogo} alt="facebook logo" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeLogo} alt="youtube logo" />
            </a>
          </div>
          <button className="bg-[#00AEF3] mt-4 text-white rounded-xl py-2 px-4 w-[170px] hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap">
            <a href="mailto:itacademy@tbcbank.com.ge">მოგვწერეთ</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
