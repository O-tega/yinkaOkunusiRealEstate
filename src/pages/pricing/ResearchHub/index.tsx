import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import PremiumPlan from "./PremiumPlan";
import PayAsYouGo from "./PayAsYouGo";

const tabs = [
  { name: "Premium plans", value: 0 },
  { name: "Pay-as-you-go", value: 1 },
];

const ResearchHub: React.FC = () => {
  const [values, setValues] = useState(0);

  const displayTabs = () => {
    switch (values) {
      case 0:
        return <PremiumPlan />;
      case 1:
        return <PayAsYouGo />;
      default:
    }
  };
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[calc(100vh-400px)] pb-10 md:pb-0 bg-[#EFF3FF] overflow-hidden pt-16 md:pt-0 relative">
        <div>
          <img
            src={faqBackground}
            alt="background img"
            className="w-full object-cover h-full absolute top-0 hidden md:block"
          />
        </div>
        <div>
          <img
            src={faqBgMobile}
            alt="background img"
            className="w-full object-cover h-[400px] absolute top-0 z-0 md:hidden"
          />
        </div>
        <div className="w-full flex justify-center md:px-[5rem] px-4 z-10 tracking-tight">
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5">
                Research Hub
              </p>
              <p className=" md:text-[20px] pt-5 text-[16px] text-center">
                Streamline your research with our all-in-one platform.
              </p>
            </div>
            <div className="md:flex items-center space-x-7 mt-7"></div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="flex justify-center">
            <div className="flex items-center space-x-5">
              {tabs.map((el, i) => (
                <div
                  className={`flex item-center border rounded-t-md border-b-0 cursor-pointer px-5 py-2 ${
                    values === el.value ? "border-primary text-primary" : ""
                  }`}
                  onClick={() => setValues(el.value)}
                  key={i}
                >
                  {el.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>{displayTabs()}</div>
    </div>
  );
};

export default ResearchHub;
