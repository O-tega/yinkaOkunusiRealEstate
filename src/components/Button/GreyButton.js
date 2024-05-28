import React from "react";

const GreyButton = ({ text, onClick, type, disabled }) => {
  return (
    <button
      className={` text-white text-[14px] font-[500] rounded-[8px] h-[40px] px-6 text-[14px] text-black hover:bg-[#d3d3d3] bg-[#EBEBEB]  `}
      onClick={disabled ? null : onClick}
      type={type}
      disabled={disabled || false}
    >
      {text}
    </button>
  );
};

export default GreyButton;
