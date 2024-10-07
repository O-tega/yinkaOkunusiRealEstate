"use client";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown } from "react-icons/bi";
import brandTracking from "@/assets/images/mooyi/brandTracking.png";
import mooyiCode from "@/assets/images/mooyi/mooyiCode.png";
import mooyiCustomer from "@/assets/images/mooyi/mooyiCustomer.png";
import mooyiEvent from "@/assets/images/mooyi/mooyiEvent.png";
import mooyiMutliCustomer from "@/assets/images/mooyi/mooyiMultiCustomer.png";
import mooyiPaintbucket from "@/assets/images/mooyi/mooyiPaintbucket.png";
import mooyiPiechart from "@/assets/images/mooyi/mooyiPiechart.png";
import mooyidocument from "@/assets/images/mooyi/mooyidocument.png";
import customerEngagementIcon from "@/assets/images/oursolutions/customerEngagementIcon.png";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const backdrop = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

// const menuAnimate = {
//   scale: [1, 2, 2, 1, 1],
//   rotate: [0, 0, 270, 270, 0],
//   borderRadius: ["20%", "20%", "50%", "50%", "20%", "50%"],
// };

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.6,
    },
  },
  visible: {
    y: "0vh",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
};

// const listy = {
//   visible: {
//     y: "0",
//     opacity: 1,
//     delay: 5,
//     transition: {
//       delay: 0.5,
//       duration: 0.6,
//     },
//   },
// };

// const hover = {
//   scale: 1.3,
//   originX: 0,
//   color: "#000",
// };

type TMenu = {
  showMenu: boolean;
  setShowMenu: (arg: boolean) => void;
};

const MobileNav: React.FC<TMenu> = ({ showMenu, setShowMenu }) => {
  // const navigate = useNavigate();
  const links = [
    { name: "Home", link: "/" },
    { name: "Why Mooyi", link: "/why-mooyi" },
    // { name: "Solutions", link: "#" },
    { name: "Mooyi Rewards", link: "https://www.mooyirewards.com/" },
    { name: "Pricing", link: "/pricing" },
    { name: "FAQs", link: "/faq" },
    // { name: "Tutorials", link: "#" },
  ];

  const solutionData = [
    {
      name: "Brand Tracking ",
      symbol: brandTracking,
      link: "/solutions/brand-tracking",
    },
    {
      name: "Customer Feedback",
      symbol: mooyidocument,
      link: "/solutions/customer-feedback",
    },
    {
      name: "Customer Profiling",
      symbol: mooyiCustomer,
      link: "/solutions/customer-profiling",
    },
    {
      name: "Market Analysis",
      symbol: mooyiPiechart,
      link: "/solutions/market-analysis",
    },
    {
      name: "New Product Development",
      symbol: mooyiCode,
      link: "/solutions/product-development",
    },
    {
      name: "Lead Acquisition",
      symbol: mooyiMutliCustomer,
      link: "/solutions/lead-acquisition",
    },
    {
      name: "Customer Engagement",
      symbol: customerEngagementIcon,
      link: "/solutions/customer-engagement",
    },
    {
      name: "Creative Testing",
      symbol: mooyiPaintbucket,
      link: "/solutions/creative-testing",
    },
    {
      name: "Event Feedback",
      symbol: mooyiEvent,
      link: "/solutions/event-feedback",
    },
  ];

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShowMenu(false)}>
      {showMenu && (
        <div className=" ">
          <motion.div
            variants={backdrop}
            animate="visible"
            initial="hidden"
            exit="hidden"
            className="fixed w-full top-16 overflow-y-scroll left-0 flex items-center justify-center"
          >
            <motion.div
              variants={modal}
              className=" mx-auto w-full overflow-y-scroll  bg-white pt-[1em] rounded-md p-5"
            >
              <div className="flex justify-between">
                <div>Menu</div>
                <div onClick={() => setShowMenu(false)}>
                  <IoClose />
                </div>
              </div>
              <div className="">
                <ul className={`space-y-4 w-full`}>
                  {links.map((link, i) =>
                    link.name === "Solutions" ? (
                      <div key={i} className="" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <div className="flex items-center justify-between cursor-pointer">
                          <p>{link.name}</p>
                          <div>
                            <BiChevronDown size={20} />
                          </div>
                        </div>
                        {toggleDropdown ? (
                          <div className="pt-5">
                            <p className="px-2 font-medium">use cases</p>
                            <ul>
                              {solutionData.map((solLink, i) => (
                                <Link to={solLink.link} key={i} onClick={() => setShowMenu(false)}>
                                  <div className="flex items-center space-x-5  hover:bg-hoverBlue cursor-pointer p-3 rounded-lg transition-all duration-300">
                                    <img src={solLink.symbol} width={24} height={24} alt="symbol" />
                                    <p>{solLink.name}</p>
                                  </div>
                                </Link>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      <Link
                        key={i}
                        to={link.link}
                        target={link.name !== "MooyiRewards" ? "" : "_blank"}
                        rel="noreferrer"
                      >
                        <div className="rounded-md mt-3 hover:bg-hoverBlue">{link.name}</div>
                      </Link>
                    ),
                  )}

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://blog.usemooyi.com"
                    className="flex items-center space-x-5  hover:bg-hoverBlue cursor-pointer rounded-lg transition-all duration-300"
                  >
                    Blog
                  </a>
                </ul>
              </div>
              <div className="mt-5 space-y-4">
                <Link to={`${ROUTES.LOGIN}/register`} id="header_login">
                  <PrimaryButton
                    text="Sign up"
                    variant="filled"
                    // onClick={() => navigate(`${ROUTES.LOGIN}/register`)}
                    buttonId="header_signup"
                  />
                </Link>

                <a href={`${ROUTES.LOGIN}`} className="cursor-pointer">
                  <PrimaryButton
                    text="Log in"
                    variant="transparent"
                    css="bg-white text-primary drop-shadow"
                    // onClick={() => navigate(`${ROUTES.LOGIN}`)}
                    buttonId="header_login"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
