import React from "react";

type TcardListProps = {
  description: string;
  action: string;
  icon: string;
  priceTag: string;
  bgcolor: string;
  borderColor: string;
};

const CardList: React.FC<TcardListProps> = ({ icon, description, action, priceTag, bgcolor, borderColor }) => {
  return (
    <div
      className={`${bgcolor} ${borderColor} border md:h-[250px] mt-5 md:mt-0 h-full p-5 space-y-2 w-full opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg flex flex-col justify-center`}
    >
      <div className="w-[50px] h-[50ox]">
        <img src={icon} alt="" />
      </div>
      <div className="pt-3">
        <p
          className={`md:text-[28px] text-[24px] font-secondary transition-all duration-300 tracking-tight leading-tight `}
        >
          {action}
        </p>
        <p className={`md:text-[18px] text-[16px] pt-4 transition-all duration-300 font-medium`}>{description}</p>
        <div className="flex items-end w-full text-[28px] font-[600]">{priceTag}</div>
      </div>
    </div>
  );
};

export default CardList;
