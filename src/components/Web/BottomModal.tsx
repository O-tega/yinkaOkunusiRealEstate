import React, { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const BottomModal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="bg-modalGrey backdrop-blur-[2px]  fixed bottom-0 left-0 w-full z-[50] ">
      <div className="bg-white text-[#292D32] p-6 md:w-auto">{children}</div>
    </div>
  );
};

export default BottomModal;
