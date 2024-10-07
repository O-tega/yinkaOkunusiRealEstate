import React from "react";

type TcardListProps = {
  type: string;
  amount: string;
};

const AdditionalPriceTag: React.FC<TcardListProps> = ({ type, amount }) => {
  return (
    <div
      className={`border bg-[#EBF1FF] h-full p-5 space-y-2 w-full opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg flex flex-col justify-center`}
    >
      <div className="pt-3">
        <p
          className={`md:text-[20px] text-[16px] font-secondary transition-all duration-300 tracking-tight leading-tight `}
        >
          {type}
        </p>
        <div className="flex items-end w-full text-[40px] font-[600] mt-10">{amount}</div>
        <p className={`md:text-[18px] text-[16px] transition-all duration-300 font-medium`}>per response</p>
      </div>
    </div>
  );
};

export default AdditionalPriceTag;
