import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import PremiumPlan from "./PremiumPlan";
import PayAsYouGo from "./PayAsYouGo";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "@/service/rates";
import ToggleButton from "@/components/Button/ToogleButton";
import MobileDropNav from "../MobileDropNav";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const tabs = [
  { name: "Premium plans", value: 0 },
  { name: "Pay-as-you-go", value: 1 },
];

const ResearchHub: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [values, setValues] = useState(0);

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const conversionRate = rates?.data?.data[0].currencyRates[7].userRate;

  const displayTabs = () => {
    switch (values) {
      case 0:
        return <PremiumPlan conversionRate={conversionRate} toggleValue={toggleValue} />;
      case 1:
        return <PayAsYouGo conversionRate={conversionRate} toggleValue={toggleValue} />;
      default:
    }
  };
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[260px] pb-10 md:pb-0 bg-[#EFF3FF] overflow-hidden pt-8 md:pt-0 relative">
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
        <div className="w-full flex justify-center md:px-[5rem] px-4 z-10 tracking-tight relative">
        <div className="absolute top-[5rem] left-[5rem]">
            <Link to="/pricing">
              <div className="flex items-center space-x-3 text-primary underline">
                <span>
                  <IoChevronBackOutline />
                </span>{" "}
                <p>Back to plans</p>{" "}
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-col md:mt-[3rem]">
            <div>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5 md:block hidden">
                Research Hub
              </p>
              <div className="relative md:hidden">
                <MobileDropNav />
              </div>
              <p className=" md:text-[20px] pt-2 text-[16px] text-center">
                Gather valuable insights and reach your target audience with ease.
              </p>
              <div className="pt-4 flex w-full justify-center items-center space-x-3">
                <p className={`${!toggleValue && "font-bold"}`}>USD</p>
                <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
                <p className={`${toggleValue && "font-bold"}`}>NGN</p>
              </div>
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
