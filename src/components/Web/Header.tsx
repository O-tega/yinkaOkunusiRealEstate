import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Logo from "@/assets/images/MooyiFBLogo.svg";
import MobileNav from "./MobileNav";
import BlueButton from "../Button/BlueButton";
import { BiChevronDown } from "react-icons/bi";
import { useOutsideClick } from "@/hooks";
import SolutionList from "./SolutionList";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "How it works", link: "/how-it-works" },
    { name: "Solutions", link: "#" },
    { name: "Pricing", link: "/pricing" },
    { name: "FAQs", link: "/faq" },
  ];

  const [dropDown, setDropdown] = useState(false);
  const clickRef = useOutsideClick(() => {
    setDropdown(false);
  });

  const toggleDropdown = () => {
    setDropdown(!dropDown);
  };

  return (
    <div className={`w-[100%] font-primary bg-white fixed z-50 mb-[70px]`}>
      <div
        className="w-[90%] h-[70px] mx-auto flex justify-between items-center 
      py-4 lg:py-0 z-50"
      >
        <div className="items-center justify-between w-[50%] flex" ref={clickRef}>
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[100px]" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4 lg:space-x-6 whitespace-nowrap">
              {links.map((items, i) => (
                <li key={i} className="hover:text-primary">
                  <div>
                    {items.name === "Solutions" ? (
                      <div className="flex items-center space-x-1 cursor-pointer" onClick={() => toggleDropdown()}>
                        <p>{items.name}</p>
                        <div>
                          <BiChevronDown size={20} />
                        </div>
                      </div>
                    ) : (
                      <Link to={items.link}>{items.name}</Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              dropDown ? "opacity-1 visible translate-y-0" : "opacity-0 invisible -translate-y-6"
            } transition-all duration-300 ease-in-out absolute z-40 top-[4.4rem] left-[31rem] w-full max-w-[400px] h-[550px] bg-white border border-strokeColor rounded-b-2xl shadow-card overflow-hidden`}
          >
            <SolutionList onClick={() => toggleDropdown()} />
          </div>
        </div>

        <div className="flex sm:hidden ">
          {showMenu ? null : <HiOutlineMenuAlt4 onClick={() => setShowMenu(!showMenu)} size={25} />}
        </div>

        <div className="hidden sm:flex space-x-4  items-center font-[500]">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blog.mooyi.africa"
            className="py-[16px]  rounded-[30px] hover:deepBlue"
          >
            Blog
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UC-KbRjjhExwbHkOurEtdNFQ"
            className="py-[16px]  rounded-[30px] hover:deepBlue"
          >
            Tutorials
          </a>

          <Link to={`${ROUTES.LOGIN}`} className="py-[16px] rounded-[30px] text-primary" id="header_login">
            Login
          </Link>
          <a href={`${ROUTES.LOGIN}/register`} className="cursor-pointer">
            <BlueButton text="Sign up" css="w-[120px]" buttonId="header_signup" />
          </a>
        </div>
      </div>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
