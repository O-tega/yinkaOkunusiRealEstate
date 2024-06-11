import React from "react";

type TFeatures = {
  title: string;
  text: string;
  img: string;
};

const FeaturesCard: React.FC<TFeatures> = ({ title, text, img }) => {
  return (
    <div className="bg-white rounded-[20px] md:w-[592px] w-[381px] h-[442px] px-5 pt-5 relative overflow-hidden">
      <div className="px-5">
        <p className="text-[24px] font-secondary">{title}</p>
        <p className="md:text-[18px] text-[16px]">{text}</p>
      </div>
      <div className="flex justify-center md:block">
        <div className="bg-[#EBF1FF] w-[315px] flex items-end justify-end absolute bottom-0 md:right-10 right-0">
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
