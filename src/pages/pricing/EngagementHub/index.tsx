import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Plans from "./Plans";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "@/service/rates";
import ToggleButton from "@/components/Button/ToogleButton";
import MobileDropNav from "../MobileDropNav";
import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const EngagementHub: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [values, setValues] = useState(0);

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const conversion = rates?.data?.data[0].currencyRates;

  const getUserRateByCode = (codeName) => {
    const currency = conversion?.find((rate) => rate.code === codeName);
    return currency ? currency.userRate : null;
  };

  const conversionRate = getUserRateByCode("USD-NGN");

  console.log(conversionRate);

  const tabs = [
    { name: "Starter plan", value: 0 },
    { name: "Business plan", value: 1 },
    { name: "Pro plan", value: 2 },
  ];
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[260px] pb-3 md:pb-0 bg-[#EFF3FF] overflow-hidden pt-16 md:pt-0 relative">
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
          <div className="absolute top-[3rem] left-[5rem] hidden md:block">
            <Link to="/pricing">
              <div className="flex items-center space-x-3 text-primary underline">
                <span>
                  <IoChevronBackOutline />
                </span>{" "}
                <p>Back to plans</p>{" "}
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight hidden md:block">
                Engagement Hub
              </p>
              <div className="relative md:hidden">
                <MobileDropNav />
              </div>
              <div className="flex justify-center">
                <p className="text-[16px] md:text-[20px] text-center px-3 mt-3">
                  Engage your customers with our robust bulk SMS, email, and robocall solution.
                </p>
              </div>
              <div className="pt-5 flex w-full justify-center items-center space-x-3">
                <p className={`${!toggleValue && "font-bold"}`}>USD</p>
                <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
                <p className={`${toggleValue && "font-bold"}`}>NGN</p>
              </div>
            </div>
            <div className="md:flex items-center space-x-7 mt-7"></div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
          <div className="flex items-center border-b justify-center space-x-4 mt-5 md:hidden">
            {tabs.map((el, i) => (
              <div
                key={i}
                className={`border-b ${
                  values === el.value ? "border-primary border-b-[2px] font-[500]" : "text-gray-500"
                }`}
                onClick={() => setValues(el.value)}
              >
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Plans conversionRate={conversionRate} values={values} toggleValue={toggleValue} />
      </div>
    </div>
  );
};

export default EngagementHub;
