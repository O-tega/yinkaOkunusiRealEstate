import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string
}

const SecondaryButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  css
}) => {
  return (
    <button
      className={`text-purple transition-fontWeight ease-in-out font-medium rounded-[8px] h-[45px] font-primary ${css} px-6 text-[14px] ${
        disabled
          ? "bg-[#5F0BDD] opacity-[0.44]  cursor-not-allowed"
          : "bg-[#E0D7EE] shadow-sm hover:bg-[#D4C4EC] hover:shadow-sm hover:font-bold"
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;


