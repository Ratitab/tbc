import React, { useState } from "react";
import BellowArrow from "../../assets/belowArrow";

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element | any[];
  html: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, html }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderAnswer = () => {
    if (html) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: answer.toString().slice(1, -1) }}
        />
      );
    } else {
      return <div>{answer}</div>;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex border-b border-[#353131] flex-col w-full justify-between cursor-pointer pb-6 mt-6"
    >
      <div className="flex justify-between w-full">
        <span className="text-customFAQ whitespace-nowrap inline-block">
          {question}
        </span>
        <div
          className={`transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BellowArrow />
        </div>
      </div>

      {isOpen && (
        <div className="pb-2 mt-5 transition-max-height overflow-hidden max-h-[100vh] ease-in-out">
          {renderAnswer()}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
