"use client";
import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import ToggleButton from "@/components/Button/ToogleButton";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "@/service/rates";
import { Helmet } from "react-helmet";
import { ROUTES } from "@/constants/externalUrls";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const conversionRate = rates?.data?.data[0].currencyRates[7].userRate;
  const individualRate = (2 * conversionRate).toFixed(0);
  const otherRate = (4 * conversionRate).toFixed(0);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Get Started Today</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="w-[100%] mx-auto md:h-[calc(100vh-400px)] pb-10 md:pb-0 bg-[#EFF3FF] flex md:items-center overflow-hidden pt-16 md:pt-0 md:relative">
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
          <div className="flex justify-center">
            <div className="md:w-[60%]">
              <p className="text-primary text-center">PRICING</p>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5">
                Get fast and actionable insights from your target market or actual customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:p-[5rem] px-5 py-[5rem] ">
        <p className="text-[32px] font-secondary text-center">Pay-As-You-Go</p>
        <div className="pt-5 flex w-full justify-center items-center space-x-3">
          <p className={`${!toggleValue && "font-bold"}`}>USD</p>
          <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
          <p className={`${toggleValue && "font-bold"}`}>NGN</p>
        </div>
        <div className="md:flex items-center justify-center md:space-x-10 space-y-10 md:space-y-0 mt-10">
          <div className="md:w-[434px] h-[336px] border border-black flex items-center justify-center">
            <div className="w-full flex flex-col items-center space-y-10">
              <p className="font-[700] text-gray-500 text-center">
                <span className="text-[43px] text-primary">
                  {toggleValue ? (
                    <>
                      &#8358;
                      {individualRate.length >= 4
                        ? individualRate.slice(0, 1) + "," + individualRate.slice(1)
                        : individualRate}
                    </>
                  ) : (
                    <>$2</>
                  )}
                </span>
                /response
              </p>
              <p className="text-center text-[18px]">For individuals</p>
              <div className="w-[80%]">
                <Link to={`${ROUTES.LOGIN}`}>
                  <PrimaryButton variant="transparent" text="Get started" css="bg-hoverBlue text-primary font-[700]" />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-[434px] h-[336px] border border-black flex items-center justify-center">
            <div className="w-full flex flex-col items-center space-y-7">
              <p className="font-[700] text-gray-500 text-center">
                <span className="text-[43px] text-primary">
                  {toggleValue ? (
                    <>
                      &#8358;
                      {otherRate.length >= 4 ? otherRate.slice(0, 1) + "," + otherRate.slice(1) : otherRate}
                    </>
                  ) : (
                    <>$4</>
                  )}
                </span>
                /response
              </p>
              <p className="text-center text-[18px] w-[60%]">For Influencers, agents, and small business owners</p>
              <div className="w-[80%]">
                <Link to={`${ROUTES.LOGIN}`}>
                  <PrimaryButton variant="transparent" text="Get started" css="bg-hoverBlue text-primary font-[700]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
