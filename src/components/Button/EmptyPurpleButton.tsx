import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
}

const EmptyPurpleButton: FC<DeepBlueButtonProps> = ({ text, onClick, type = "button", disabled = false, css }) => {
  return (
    <button
      className={`text-white transition-fontWeight ease-in-out font-medium rounded-[8px] h-[45px] font-primary ${css} px-6 text-[14px] ${
        disabled
          ? "bg-deepBlue opacity-[0.44]  cursor-not-allowed"
          : "bg-transparent  border-[1px] hover:shadow-sm border-white text-white hover:text-deepBlue hover:bg-white  hover:font-bold"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default EmptyPurpleButton;
