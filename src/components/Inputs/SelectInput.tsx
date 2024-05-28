import React from "react";
import { TSelectInput } from "@/types/componentTypes";

const SelectInput: React.FC<TSelectInput> = ({ options, name, value, onChange, css, disabled, defaultValue }) => {
  return (
    <div className="text-primary flex flex-col w-[100%]">
      {/* <label htmlFor={name} className="text-grey sm:text-[16px] text-[12px]">{text}</label> */}
      <select
        name={name}
        disabled={disabled || false}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`rounded-[8px] border-[1px] pl-2 outline-none my-2 bg-[#FAFAFA] ${css}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white cursor-pointer">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
