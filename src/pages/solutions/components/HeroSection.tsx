import React from "react";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  type: string;
  title: string;
  desc: string;
  img: string;
  desktopImg: string;
  watchTutorialId: string;
  getInTouchId: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ type, title, desc, img, desktopImg, watchTutorialId, getInTouchId }) => {
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
      <div className="w-full mx-auto md:flex items-center justify-between md:px-[5rem] px-4 z-10 tracking-tight">
        <div className="md:w-[45%]">
          <p className="text-primary text-center md:text-left">{type}</p>
          <h1 className="font-secondary md:text-[62px] text-center md:text-left  text-[32px] md:leading-[4rem] pt-5">
            {title}
          </h1>
          <p className=" md:text-[20px] md:pr-[7rem] pt-5 text-[16px] text-center md:text-left">{desc}</p>
          <div className="flex items-center space-x-5 pt-10 justify-center md:justify-start">
            <div>
              <Link
                to="https://www.youtube.com/channel/UC-KbRjjhExwbHkOurEtdNFQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryButton
                  type="button"
                  text="Watch tutorial"
                  css="bg-black text-white px-5 rounded-sm"
                  variant="transparent"
                  buttonId={watchTutorialId}
                />
              </Link>
            </div>
            <div>
              <Link to="mailto:you@yourdomain.com" target="_blank" rel="noopener noreferrer">
                <PrimaryButton type="button" text="Get in touch" css="px-5 rounded-sm" variant="filled" buttonId={getInTouchId} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-5">
          <img src={img} alt="brand tracking image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
