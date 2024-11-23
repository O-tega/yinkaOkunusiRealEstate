import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Logo from "@/assets/images/favicon.png";
import MobileNav from "./MobileNav";
import { BiChevronDown } from "react-icons/bi";
import { useOutsideClick } from "@/hooks";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Our services", link: "/our-service" },
    { name: "To let", link: "/properties" },
    { name: "For sale", link: "/properties" },
    { name: "Blog", link: "https://blog.usemooyi.com" },
    { name: "Contact us", link: "https://blog.usemooyi.com" },
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
        <div className="items-center justify-between w-[55%] flex" ref={clickRef}>
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-[50px]" />
            </Link>
            <p className="text-[12px]">
              Yinka Okunusi <br /> And Associates
            </p>
          </div>
        </div>

        <div className="flex sm:hidden ">
          {showMenu ? null : <HiOutlineMenuAlt4 onClick={() => setShowMenu(!showMenu)} size={25} />}
        </div>

        <div className="hidden sm:flex space-x-4  items-center font-[500]">
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
                      <>
                        {" "}
                        {items.name !== "Mooyi Rewards" ? (
                          <Link rel="noreferrer" to={items.link}>
                            {items.name}
                          </Link>
                        ) : (
                          <a target={"_blank"} rel="noreferrer" href={items.link}>
                            {items.name}
                          </a>
                        )}{" "}
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <Link to={`${ROUTES.LOGIN}`} className="py-[16px] rounded-[30px] text-primary" id="header_login">
            Login
          </Link>
          <a href={`${ROUTES.LOGIN}/register`} className="cursor-pointer">
            <BlueButton text="Sign up" css="w-[120px]" buttonId="header_signup" />
          </a> */}
        </div>
      </div>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Header;
