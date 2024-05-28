import React from "react";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Search from "./Search";

type HeroSectionProps = {
  title: string;
  desc: string;
  desktopImg: string;
  handleSearch: (text: string) => void;
};

const FaqHero: React.FC<HeroSectionProps> = ({ title, desc, desktopImg, handleSearch }) => {
  return (
    <div className="w-[100%] mx-auto md:h-[calc(100vh-70px)] pb-10 md:pb-0 bg-[#EFF3FF] flex md:items-center overflow-hidden pt-16 md:pt-0 md:relative">
      <div>
        <img
          src={desktopImg}
          width={1500}
          height={1500}
          alt="background img"
          className="w-full object-cover h-full absolute top-0 hidden md:block"
        />
      </div>
      <div>
        <img
          src={faqBgMobile}
          width={1500}
          height={1500}
          alt="background img"
          className="w-full object-cover h-[400px] absolute top-0 z-0  md:hidden"
        />
      </div>
      <div className="w-full mx-auto md:flex items-center justify-between md:px-[5rem] px-4 z-10 tracking-tight">
        <div className="flex justify-center">
          <div className="md:w-[48%]">
            <p className="font-secondary md:text-[48px] text-center text-[32px] md:leading-[4rem] pt-5">{title}</p>
            <p className=" md:text-[20px] pt-5 text-[16px] text-center">{desc}</p>
            <Search handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
