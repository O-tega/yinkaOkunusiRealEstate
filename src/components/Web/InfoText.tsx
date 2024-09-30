import React from "react";

type TInfo = {
  title: string;
  text: string;
  subTitle: string;
};

const InfoText: React.FC<TInfo> = ({ title, text, subTitle }) => {
  return (
    <div className="space-y-3 text-center md:text-left">
      <div className="flex justify-center md:block"></div>
      <div>
        <p className="md:text-[24px] font-[600] text-blue-800">{title}</p>
        <p className="md:text-[18px] font-secondary">{subTitle}</p>
        <p className="md:text-[18px] w-[80%]  pt-2 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default InfoText;
