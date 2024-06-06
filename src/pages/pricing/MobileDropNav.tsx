import { useOutsideClick } from "@/hooks";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MobileDropNav = () => {
  const [dropDown, setDropdown] = useState<number | null>(null);
  const navigate = useNavigate();

  console.log(dropDown);

  const location = useLocation();
  const currentPath = location.pathname;

  const path = currentPath.replace("/pricing/", "");

  const toggleDropdown = (id: number) => {
    console.log("Clicked");
    setDropdown(dropDown === id ? null : id);
  };

  const refer = useOutsideClick(() => toggleDropdown(1));

  return (
    <div>
      <div
        className="w-full h-[45px] border-[1px] rounded-md text-sm flex items-center justify-between px-5 text-primary  border-primary bg-[#EBF1FF] cursor-pointer my-5"
        onClick={() => toggleDropdown(1)}
      >
        <p className="text-sm font-medium ">{path}</p>
        <HiChevronDown />
      </div>
      {dropDown === 1 ? (
        <div
          className="bg-white shadow-activeShadow rounded-[8px] w-full absolute left-0 top-[3rem] cursor-pointer z-[100]"
          ref={refer}
        >
          <p
            className="text-[#737373] hover:bg-gray-200 text-s space-x-2 border-b-[1px] p-3 "
            onClick={() => navigate("/pricing/research-hub")}
          >
            Research Hub
          </p>

          <p
            className="text-[#737373] hover:bg-gray-200 text-s space-x-2 border-b-[1px] p-3 "
            onClick={() => navigate("/pricing/engagement-hub")}
          >
            Customer engagement
          </p>
          <p
            className="text-[#737373] hover:bg-gray-200 text-s cursor-pointer space-x-2 border-b-[1px] p-3 "
            onClick={() => navigate("/pricing/custom")}
          >
            Custom
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default MobileDropNav;
