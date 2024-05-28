import React from "react";
import { TSecondaryInput } from "@/types/componentTypes";

const SecondaryInput: React.FC<TSecondaryInput> = ({
  text,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  value,
  name,
  disabled,
  min,
}) => {
  return (
    <div className="text-primary flex flex-col w-[100%">
      <label htmlFor={name} className="text-[#292D32] text-[16px] font-[500] tracking-[-0.02em] ">
        {text}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className="rounded-[8px] border-[1px] border-[#D0D5DD] h-[48px] pl-2 outline-none my-2 bg-[#FAFAFA] text-[16px] placeholder:font-[450] placeholder:text-[15px] placeholder:text-[#A3A3A3]"
        disabled={disabled}
        min={min}
      />
      <p className="text-[12px] text-red-500">{error}</p>
    </div>
  );
};

export default SecondaryInput;
