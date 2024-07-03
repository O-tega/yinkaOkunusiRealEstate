import React from "react";
import { TOption, TSecondarySelectInput } from "@/types/componentTypes";

const SecondarySelectInput: React.FC<TSecondarySelectInput> = ({ options, name, value, onChange, text }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <label htmlFor={name} className="text-[#292D32] text-[14px] font-[400]">
        {text}
      </label>
      <select
        name={name}
        id=""
        value={value}
        onChange={onChange}
        className="rounded-[8px] bg-[#FAFAFA] border-[1px] border-[##D0D5DD] h-[40px]  pl-2 outline-none my-2"
      >
        {options.map((option: TOption) => (
          <option key={option.value} value={option.value} className="bg-white  text-[#292D32]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SecondarySelectInput;
