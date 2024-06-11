import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="w-[100%] mx-auto h-[calc(100vh-70px)] bg-[#EFF3FF] flex items-center overflow-hidden">
      <div className="w-full mx-auto md:flex items-center justify-between px-2 md:px-[5rem]">
        <div className="md:w-[40%] text-center md:text-left">
          <p className="text-primary">HOW IT WORKS</p>
          <h1 className="font-secondary text-[32px] md:text-[62px] md:leading-[4rem] leading-7 pt-5 tracking-tight">
            Say hello to faster, easier, and smarter growth.
          </h1>
          <p className=" text-[20px] pt-5">
            Learn how Mooyi™ can help you gather insights from quantitative and qualitative research and automate
            mobile campaigns to help grow your business.
          </p>
          <div className="flex justify-center md:block">
            <div className="md:w-[30%] w-[50%] mt-5">
              <Link to="mailto:you@yourdomain.com" target="_blank" rel="noopener noreferrer">
                <PrimaryButton type="button" text="Book a demo" css="px-5 rounded-md" variant="filled" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center relative mt-10 md:mt-0">
          <div>
            <div className="">
              <img src={ASSETS.GIFS.howItWorks} alt="example pic" className="w-[700px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
