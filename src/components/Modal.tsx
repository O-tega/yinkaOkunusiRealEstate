import React from "react";
import { FaTimes } from "react-icons/fa";
import { TModal } from "@/types/componentTypes";

const Modal: React.FC<TModal> = ({ children, title, onClose }) => {
  return (
    <div className="bg-grey fixed top-0 bottom-0 left-0 h-[100vh] w-full flex justify-center items-center z-[999]">
      <div className="bg-white text-[#292D32] rounded-[8px] p-6">
        <div className="flex items-center justify-between">
          <p className="text-[24px] font-[700]">{title || null}</p>
          <div
            className="text-[#737373] bg-[#ECECECB2] h-[30px] w-[30px] flex items-center justify-center rounded-full text-[20px] cursor-pointer"
            onClick={onClose}
          >
            <FaTimes className="w-[10px] " />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
