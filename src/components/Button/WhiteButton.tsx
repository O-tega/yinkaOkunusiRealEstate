import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
}

const WhiteButton: FC<DeepBlueButtonProps> = ({ text, onClick, type = "button", disabled = false, css }) => {
  return (
    <button
      className={` font-primary  transition-all duration-300  font-medium rounded-[8px] h-[45px] ${css} px-6 text-[14px] border border-black font-bold hover:bg-blue-600 hover:text-white hover:border-none ${
        disabled ? "opacity-[0.6] cursor-not-allowed" : "bg-white  shadow-sm  hover:font-bold"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
