import React from "react";
import { motion } from "framer-motion";

type TInfo = {
  title: string;
  text: string;
  count: number;
  id: number;
  icon: string;
};

const InfoText: React.FC<TInfo> = ({ title, text, icon, count, id }) => {
  return (
    <>
      <motion.div
        className={`space-y-3 px-5 pt-2 pb-5 rounded-lg hidden md:block text-center md:text-left ${
          count === id ? "bg-blue-100" : ""
        }`}
        animate={{
          scale: count === id ? 1.05 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex justify-center md:block"></div>
        <div className="flex flex-col items-center md:block">
          <div className="w-[300px] md:hidden">
            <img src={icon} alt="" />
          </div>
          <p className={`md:text-[24px] text-[18px] font-[600] ${count === id ? "text-blue-800" : "text-black"}`}>
            {title}
          </p>
          <p className="md:text-[18px] w-full text-[12px] pt-2 font-medium">{text}</p>
        </div>
      </motion.div>
      <div className={`space-y-3 p-2 rounded-lg md:hidden text-center md:text-left `}>
        <div className="flex justify-center md:block"></div>
        <div className="flex flex-col items-center md:block">
          <div className="w-[340px] md:hidden">
            <img src={icon} alt="" />
          </div>
          <p className={`md:text-[24px] text-[18px] font-[600] mt-5`}>{title}</p>
          <p className="md:text-[18px] w-[80%] text-[12px] pt-2 font-medium">{text}</p>
        </div>
      </div>
    </>
  );
};

export default InfoText;
