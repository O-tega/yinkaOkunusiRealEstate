import React from "react";
import { Link } from "react-router-dom";

type TInfo = {
  img: string;
  title: string;
  text: string;
  link: string;
};

const InfoCard: React.FC<TInfo> = ({ img, title, text, link }) => {
  return (
    <div className="space-y-3 text-center md:text-left">
      <div className="flex justify-center md:block">
        <div className="rounded-full bg-[#EBF1FF] w-[48px] h-[48px] p-2 flex items-center justify-center">
          <img src={img} alt="" className="object-cover" />
        </div>
      </div>
      <div>
        <p className="md:text-[20px] font-secondary">{title}</p>
        <p className="md:text-[16px] md:w-[80%] font-medium">{text}</p>
      </div>
      <div className="text-primary underline">
        <Link to={link}>More</Link>
      </div>
    </div>
  );
};

export default InfoCard;
