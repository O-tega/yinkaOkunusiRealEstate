import React from "react";
import { TPrimaryInput } from "@/types/componentTypes";

const PrimaryInput: React.FC<TPrimaryInput> = ({
  text,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  value,
  name,
  css,
}) => {
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
        className={`${css} rounded-[8px] border-[1px] border-[#DFE5EC] text-black h-[40px] pl-2 outline-none my-2 bg-[#FAFAFA] ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <small className="text-red-500 text-xs transition-all duration-300">{error}</small>}
    </div>
  );
};

export default PrimaryInput;
