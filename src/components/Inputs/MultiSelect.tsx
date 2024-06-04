import { MultiSelectInputProps } from "@/types/componentTypes";
import React from "react";
import Select, { CSSObjectWithLabel } from "react-select";

const SelectMultiple: React.FC<MultiSelectInputProps> = ({
  options,
  name,
  value,
  onChange,
  css,
  defaultValue,
  disabled,
  error,
}) => {
  const style = {
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      backgroundColor: "transparent",
      width: "100%",
    }),
  };
  return (
    <div className=" flex flex-col w-full relative">
      <Select
        name={name}
        isMulti={true}
        value={value}
        defaultValue={defaultValue}
        isDisabled={disabled}
        onChange={onChange}
        options={options}
        styles={style}
        data-testid="select-input"
        className={` ${css} rounded-[4px] border-borderGrey border-[1px] h-[40px] outline-none bg-[#FAFAFA] text-xs text-darkGrey appearance-none bg-transparent  focus:border-darkGreen ${
          disabled ? "border-gray-100 bg-gray-100 cursor-not-allowed" : "cursor-pointer"
        }`}
      />

      {error && (
        <small className="text-red-500 text-xs transition-all duration-300" data-testid="error message">
          {error}
        </small>
      )}
    </div>
  );
};

export default SelectMultiple;
