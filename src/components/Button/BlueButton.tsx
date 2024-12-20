import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
  buttonId: string;
}

const BlueButton: FC<DeepBlueButtonProps> = ({ text, onClick, type = "button", buttonId, disabled = false, css }) => {
  return (
    <button
      className={`text-white transition-fontWeight ease-in-out font-medium rounded-[4px] h-[45px] font-primary transition-all duration-300 ${css} px-6 ${
        disabled
          ? "bg-blue-300  cursor-not-allowed"
          : "bg-primary shadow-sm hover:bg-blue-600 hover:shadow-sm hover:font-semibold active:text-blue-200"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
      id={buttonId}
    >
      {text}
    </button>
  );
};

export default BlueButton;
