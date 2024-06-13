import React, { ReactElement, useState } from "react";

type TFeatures = {
  title: string;
  text: string;
  img: ReactElement;
  id: number;
};

const FeaturesCard: React.FC<TFeatures> = ({ title, text, img, id }) => {
  const [hover, setHover] = useState<null | number>(null);

  const handleHover = (id: number) => {
    setHover(hover === id ? null : id);
  };
  return (
    <div
      className={`bg-white rounded-[20px] md:w-[592px] w-[381px] h-[442px] px-5 pt-5 relative overflow-hidden cursor-pointer`}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => setHover(null)}
    >
      <div className={`px-5 transition-all duration-100 ${
        hover === id ? "scale-105" : ""
      }`}>
        <p className="text-[24px] font-secondary">{title}</p>
        <p className="md:text-[18px] text-[16px]">{text}</p>
      </div>
      <div className="flex justify-center md:block">
        <div
          className={`${
            hover === id ? "bg-[#EBF1FF]" : "bg-[#F5F5F5]"
          } md:w-[315px] md:h-[256px] w-[300px] h-[241px] flex items-end justify-end absolute bottom-0 md:right-10 right-0 rounded-xl`}
        >
          <div className="w-full flex justify-center items-center h-full">{img}</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
