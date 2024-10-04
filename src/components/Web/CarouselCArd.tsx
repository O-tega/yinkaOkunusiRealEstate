import React from "react";

type TCarolInfo = {
  img: string;
  title: string;
  text: string;
};

const CarouselCard: React.FC<TCarolInfo> = ({ img, title, text }) => {
  return (
    <div className="space-y-3 mt-2">
      <div className="flex items-center justify-center">
        <div className=" w-[450px] h-full ">
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>
      <div className="space-y-1 text-center">
        <p className="md:text-[20px] font-secondary">{title}</p>
        <div className="flex justify-center">
          <p className="md:text-[16px] md:w-[90%] w-[70%] font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
