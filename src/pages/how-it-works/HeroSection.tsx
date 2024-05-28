import React from "react";
import { ASSETS } from "@/assets/images/Assets";

const HeroSection: React.FC = () => {
  return (
    <div className="w-[100%] mx-auto h-[calc(100vh-70px)] bg-[#EFF3FF] flex items-center overflow-hidden">
      <div className="w-full mx-auto md:flex items-center justify-between px-2 md:px-[5rem]">
        <div className="md:w-[40%] text-center md:text-left">
          <p className="text-primary">HOW IT WORKS</p>
          <h1 className="font-secondary text-[32px] md:text-[62px] md:leading-[4rem] leading-7 pt-5 tracking-tight">
            Say hello to faster, easier, and smarter research.
          </h1>
          <p className=" text-[20px] pt-5">
            Learn how Mooyi can help you gather consumer insights from quantitative and qualitative research to help
            grow your business.
          </p>
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
