import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string;
  buttonId: string;
}

const BlueWhiteButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  buttonId,
  disabled = false,
  css,
}) => {
  return (
    <button
      className={` font-primary  transition-all duration-300  font-medium rounded-[8px] h-[45px] ${css} px-6 border border-white font-bold hover:bg-white hover:border-blue-800 hover:text-blue-800 text-white  ${
        disabled ? "opacity-[0.6] cursor-not-allowed" : "bg-blue-800  hover:font-bold"
      }`}
      id={buttonId}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default BlueWhiteButton;
