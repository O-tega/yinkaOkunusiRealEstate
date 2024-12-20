import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const ModalWithoutClose: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="bg-modalGrey backdrop-blur-[2px]  fixed top-0 bottom-0 left-0 justify-center h-[100vh] w-full flex md:items-center items-end z-[50]  ">
      <div className="bg-white text-[#292D32] rounded-[8px] md:w-auto w-[90%] drop-shadow-md">{children}</div>
    </div>
  );
};

export default ModalWithoutClose;
