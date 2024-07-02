import React from "react";

type TCarolInfo = {
  img: string;
  title: string;
  text: string;
};

const CarouselCard: React.FC<TCarolInfo> = ({ img, title, text }) => {
  return (
    <div className="space-y-3 mt-2">
      <div className="w-[369px] h-[288px] flex items-center justify-center">
        <img src={img} alt="" className="object-cover" />
      </div>
      <div className="space-y-1">
        <p className="md:text-[20px] font-secondary">{title}</p>
        <p className="md:text-[16px] w-[90%] font-medium">{text}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
