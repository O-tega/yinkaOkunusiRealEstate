import React from "react";

type TEmpty = {
  img: string;
  title: string;
  subtitle: string;
};

const EmptyState: React.FC<TEmpty> = ({ img, title, subtitle }) => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div className="w-[81px] flex justify-center">
        <img src={img} alt="" />
      </div>
      <div className="text-center mt-2">
        <p className="font-[600] text-[16px]">{title}</p>
        <p className="text-[14px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default EmptyState;
