import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-[#2b2b2b] flex justify-center py-16">
      <div className="max-w-4xl w-full px-5 md:px-0">
        <div className="text-left text-white   lg:text-xl whitespace-normal antialiased">

          <span className="text-[#f4f4f4] text-[28px] tracking-normal	leading-9">
            „ TBC x USAID - ტექნოლოგიური განათლებისთვის “ პროგრამა
            საინფორმაციო ტექნოლოგიებით დაინტერესებულ ადამიანებს გთავაზობთ სრულად
            დაფინანსებულ ონლაინ საგანმანათლებლო პრაქტიკულ კურსებს
            სხვადასხვა ICT მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ
            შესაძლებლობა დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
          </span>
        </div>
        <div className="mt-16">
          <span className="flex text-[#00AEF3] text-2xl whitespace-nowrap font-bold">
            გაიგე მეტი
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
