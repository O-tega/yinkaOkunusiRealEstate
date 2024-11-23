interface IButtonProps {
  type?: "submit" | "reset" | "button";
  text: string;
  variant: "filled" | "transparent" | "outlined" | "danger";
  css?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  buttonId: string;
}

const PrimaryButton = ({
  type,
  text,
  variant,
  css,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  buttonId,
}: IButtonProps) => {
  return (
    <button
      id={buttonId}
      className={`flex h-[45px] w-full items-center justify-center rounded-lg font-bold border disabled:bg-primary-300 active:text-blue-200 px-6 " ${
        variant === "filled" && "border-none bg-blue-400 text-white hover:bg-blue-500"
      } ${variant === "transparent" && " border-none text-black"} ${
        variant === "outlined" && "border border-white text-black"
      } ${
        variant === "danger" && "bg-destructive-50 text-destructive-500"
      } transition-all duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 ${css}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          {leftIcon}
          <p className={`${leftIcon && "ml-2"} ${rightIcon && "mr-2"}`}>{text}</p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default PrimaryButton;
