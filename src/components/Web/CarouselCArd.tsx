import React from "react";

type TCarolInfo = {
  img: string;
  title: string;
  text: string;
};

const CarouselCard: React.FC<TCarolInfo> = ({ img, title, text }) => {
  return (
    <div className="space-y-3 mt-2 mx-5">
      <div className="flex items-center justify-center">
        <div className=" md:w-[600px] w-[400px] h-full ">
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>
      <div className="space-y-1 text-center md:text-left">
        <p className="md:text-[17px] font-secondary">{title}</p>
        <div className="flex justify-center md:justify-start">
          <p className="md:text-[16px] text-[14px] md:w-[90%] font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
