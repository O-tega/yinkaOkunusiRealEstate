import React from "react";

type TcardListProps = {
  title: string;
  desc: string;
  img: React.ReactNode;
  color: string;
};

type TDataListProps = {
  cardList: TcardListProps[];
};

const CardList: React.FC<TDataListProps> = ({ cardList }) => {
  return (
    <div className="md:px-[4rem] px-5 my-[4rem]">
      <div className="mt-10 border border-black rounded-2xl h-full md:flex items-start justify-center w-full cursor-pointer transition-all md:divide-x divide-y md:divide-y-0 divide-black duration-300 delay-75 overflow-hidden ">
        {cardList?.map((item, i) => (
          <div
            key={i}
            className={`${item.color} md:h-[400px] h-full p-5 space-y-2 w-full opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105`}
          >
            <p className={`md:text-[28px] text-[24px] font-secondary transition-all duration-300 tracking-tight `}>
              {item.title}
            </p>
            <p className={`md:text-[18px] text-[16px] transition-all duration-300`}>{item.desc}</p>
            <div className="flex justify-end items-end w-full">{item.img}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
