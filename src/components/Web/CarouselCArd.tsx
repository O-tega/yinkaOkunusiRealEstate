import React from "react";

type TCarolInfo = {
  img: string;
  title: string;
  text: string;
};

const CarouselCard: React.FC<TCarolInfo> = ({ img, title, text }) => {
  return (
    <div className="space-y-3 mt-2">
      <div className="2xl:w-[450px] w-[369px] h-[288px] flex items-center justify-center">
        <img src={img} alt="" className="object-cover" />
      </div>
      <div className="space-y-1 2xl:pt-7">
        <p className="md:text-[20px] font-secondary">{title}</p>
        <p className="md:text-[16px] md:w-[90%] w-[70%] font-medium">{text}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
