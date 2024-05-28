import React from "react";
import { TPrimaryInput } from "@/types/componentTypes";

const PrimaryInput: React.FC<TPrimaryInput> = ({ text, type, placeholder, onChange, onBlur, error, value, name }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-black font-[500]">
        {text}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className="rounded-[8px] border-[1px] border-[#DFE5EC] text-black h-[50px] pl-2 outline-none my-2 bg-[#FAFAFA]"
      />
      <p className="text-[12px] text-red-500">{error}</p>
    </div>
  );
};

export default PrimaryInput;
