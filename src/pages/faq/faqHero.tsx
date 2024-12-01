import React from "react";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Search from "./Search";

type HeroSectionProps = {
  title: string;
  desc: string;
  desktopImg: string;
  handleSearch?: (text: string) => void;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
};

const FaqHero: React.FC<HeroSectionProps> = ({ title, desc, desktopImg, search }) => {
  return (
    <div className="w-[100%] mx-auto md:h-[60vh] h-[50vh] pb-10 md:pb-0 bg-black flex pt-16 md:pt-0 md:relative">
      <div>
        <img
          src={desktopImg}
          width={1500}
          height={1500}
          alt="background img"
          className="w-full object-cover h-full absolute top-0 hidden md:block opacity-30"
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
      <div className="w-full md:flex justify-center md:px-[5rem] md:mt-[6rem] px-4 z-10 tracking-tight">
        <div className="flex flex-col items-center">
          <p className="font-secondary md:text-[48px] text-center text-[32px] text-white md:leading-[4rem] pt-5">
            {title}
          </p>
          <div className="md:w-full relative">
            <p className=" md:text-[20px] pt-2 text-[16px] text-white text-center">{desc}</p>
            {search === undefined ? null : (
              <div className="absolute w-full mt-10">
                <Search />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHero;
