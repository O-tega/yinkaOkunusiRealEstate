import { FC, MouseEvent } from "react";

interface DeepBlueButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  css?: string
}

const EmptyButton: FC<DeepBlueButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  css
}) => {
  return (
    <button
      className={`font-primary  transition ease-in-out  font-medium rounded-[8px] h-[45px] ${css} px-6 text-[14px] ${
        disabled
          ? "opacity-[0.6] cursor-not-allowed"
          : "bg-transparent  border-[1px] text white  shadow-sm  hover:font-bold transition "
      }`}
      onClick={disabled ? undefined : onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default EmptyButton;
