import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  icon: ReactElement;
  onClick?: () => void;
  disabled: boolean;
};

const IconButton: React.FC<ButtonProps> = ({ text, onClick, type, disabled, icon }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <button
      className={` text-white rounded-[8px] h-[45px] text-[14px] px-6 flex items-center space-x-2 font-[450]  justify-center w-[100%] ${
        disabled ? "bg-[#EBEBEB] text-[#A3A3A3]" : "bg-deepBlue shadow-activeShadow "
      }`}
      onClick={handleClick}
      type={type}
      disabled={disabled || false}
    >
      {text}
      <div className="ml-2">{icon}</div>
    </button>
  );
};

export default IconButton;
