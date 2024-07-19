import { MultiSelectInputProps, Option } from "@/types/componentTypes";
import { IoClose } from "react-icons/io5";
import Select, { CSSObjectWithLabel, MultiValue, RemoveValueActionMeta } from "react-select";

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
    multiValue: (base: CSSObjectWithLabel) => ({
      ...base,
      display: "none",
    }),
  };

  const handleRemove = (option: Option) => {
    const updatedOptions = value?.filter((item) => item.value !== option.value) || [];
    if (onChange) {
      const actionMeta: RemoveValueActionMeta<Option> = {
        action: "remove-value",
        removedValue: option,
      };
      onChange(updatedOptions as MultiValue<Option>, actionMeta);
    }
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
      <div className="flex flex-wrap items-center gap-1 mt-1">
        {value?.map((option) => (
          <div key={option.value} className="flex items-center bg-gray-100 px-2 py-1 min-w-fit rounded-md text-[12px]">
            <span>{option.label?.toString()?.slice(0, 4)} ...</span>
            <button onClick={() => handleRemove(option)} style={{ marginLeft: "10px" }}>
              <IoClose />
            </button>
          </div>
        ))}
      </div>

      {error && (
        <small className="text-red-500 text-xs transition-all duration-300" data-testid="error message">
          {error}
        </small>
      )}
    </div>
  );
};

export default SelectMultiple;
