import { ICheckboxProps } from "@/types/componentTypes";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const CheckBox: React.FC<ICheckboxProps> = ({ checked, onChange, name }) => {
  return (
    <label className="flex items-center relative h-[16px] w-[16px]  transition-all duration-300 cursor-pointer">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none  border-[1px] border-borderGrey checked:border-darkGreen checked:bg-blue-800 peer rounded-sm bg-white h-[16px] w-[16px] transition-all duration-300 "
      />
      <GiCheckMark className="absolute text-xs text-white  hidden peer-checked:block transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all duration-300 " />
    </label>
  );
};

export default CheckBox;
