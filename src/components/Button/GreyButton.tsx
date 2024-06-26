import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
}

const GreyButton: FC<DeepBlueButtonProps> = ({ text, onClick, type = "button", disabled = false, css }) => {
  return (
    <button
      className={`text-blue-800 transition-fontWeight ease-in-out font-medium rounded-[4px] h-[45px] font-primary transition-all duration-300 ${css} px-6 text-[14px] ${
        disabled
          ? "bg-[#EBF1FF]  cursor-not-allowed"
          : "bg-[#EBF1FF] shadow-sm hover:bg-blue-800 hover:shadow-sm hover:text-white active:text-blue-800"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default GreyButton;
