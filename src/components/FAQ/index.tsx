import React from "react";
import { FAQCopy } from "./FAQtexts";
import FAQItem from "./FAQItem";

const FAQ: React.FC = () => {
  return (
    <div className="text-[#f4f4f4] bg-[#161616] flex justify-center">
      <div className="w-full max-w-4xl py-20 px-5 md:px-0">
        <div className="flex justify-between text-xl font-thin mb-8">
          <h2 className="text-2xl whitespace-nowrap">
            ხშირად დასმული კითხვები
          </h2>
          <span className="text-[#00AEF3] hover:text-[#A9A9A9] cursor-pointer transition-colors duration-300 whitespace-nowrap hidden md:inline-block">
            ყველა კითხვა
          </span>
        </div>

        {FAQCopy.map((copy) => (
          <FAQItem
            question={copy.label}
            answer={copy.content}
            html={copy.HTML}
          />
        ))}

      </div>
    </div>
  );
};

export default FAQ;
