import React from "react";

type TInfo = {
  title: string;
  text: string;
  // subTitle: string;
  icon: string;
};

const InfoText: React.FC<TInfo> = ({ title, text, icon }) => {
  return (
    <div className="space-y-3 text-center md:text-left">
      <div className="flex justify-center md:block"></div>
      <div className="flex flex-col items-center md:block">
        <div className="w-[40px] h-[40px] md:hidden">
          <img src={icon} alt="" />
        </div>
        <p className="md:text-[24px] text-[18px] font-[600] text-blue-800">{title}</p>
        {/* <p className="md:text-[18px] text-[16px]  font-secondary">{subTitle}</p> */}
        <p className="md:text-[18px] w-[80%] text-[12px]   pt-2 font-medium">{text}</p>
      </div>
    </div>
  );
};

export default InfoText;
