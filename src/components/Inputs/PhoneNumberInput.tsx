// // import { countriesData } from "data/country";
// import { countryData } from "@/data/country";
// import React, { useState, ChangeEvent, FocusEvent } from "react";
// import { BiChevronDown } from "react-icons/bi";

// interface PhoneNumberInputProps {
//   name: string;
//   text: string;
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
//   error?: string;
//   setSelectedCode: (code: string) => void;
//   selectedCode: string;
// }

// const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
//   name,
//   text,
//   value,
//   onChange,
//   onBlur,
//   error,
//   setSelectedCode,
//   selectedCode,
// }) => {
//   const [open, setOpen] = useState(false);

//   const toggleDropdown = () => {
//     setOpen(!open);
//   };

//   const handleClick = (code: string) => {
//     setSelectedCode(code);

//     const event = {
//       target: {
//         name: "phone",
//         value: value,
//       },
//     };
//     onChange(event);
//     toggleDropdown();
//   };

//   return (
//     <div className="text-primary flex flex-col w-[100%]">
//       <label htmlFor={name} className="text-[#292D32] text-m font-[500]">
//         {text}
//       </label>

//       <div className="border-[#D0D5DD] border-[1px] flex items-center rounded-[6px] my-2 relative">
//         <div className="flex items-center px-3 space-x-1 cursor-pointer" onClick={toggleDropdown}>
//           <p className="ml-2 text-s">{selectedCode}</p>
//           <BiChevronDown />
//         </div>

//         {open ? (
//           <div className="flex flex-col shadow-xl h-[250px] overflow-y-scroll absolute bg-white z-20 top-[3em]">
//             {countryData.map((el) => {
//               return (
//                 <div
//                   key={el.flag}
//                   className="flex space-x-2 text-ss w-[200px] p-2 border-b-[1px] cursor-pointer"
//                   onClick={() => handleClick(el.number)}
//                 >
//                   <p className="ml-2 w-[40px]">{el.number}</p>
//                   <p className="ml-2">{el.name}</p>
//                 </div>
//               );
//             })}
//           </div>
//         ) : null}

//         <input
//           type="tel"
//           placeholder="8025556792"
//           onChange={onChange}
//           value={value}
//           name="phone"
//           onBlur={onBlur}
//           className="border-l-[1px] rounded-[1px] border-[#D0D5DD] h-[45px] pl-2 outline-none w-[70%] bg-[#FAFAFA] text-m"
//           maxLength={10}
//         />
//       </div>

//
//     </div>
//   );
// };

// export default PhoneNumberInput;
