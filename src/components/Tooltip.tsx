import React, { useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";

type TText={
  text:string
}
const Tooltip:React.FC<TText> = ({text}) => {
  const [show, setShow] = useState(false);

  return (
    <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="cursor-pointer relative">
      <IoMdInformationCircle />
      {show ? (
        <span className="w-[150px] h-auto rounded-[4px] bg-white drop-shadow-md p-2 text-[11px] absolute top-4 z-50">
          {text}
        </span>
      ) : null}
    </div>
  );
};

export default Tooltip;
