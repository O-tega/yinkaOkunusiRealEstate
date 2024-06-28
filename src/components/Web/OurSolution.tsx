"use client";
import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import { motion } from "framer-motion";
import PrimaryButton from "../Button/PrimaryButton";
import { ROUTES } from "@/constants/externalUrls";

const data = [
  {
    id: 1,
    // cardtext: "Uber-fast responses",
    // title: "Get 100% response rates on your surveys.",
    desc: "Add your existing customer contacts, group them into segments based on user attributes or actions and send compelling messages at the right time to keep them returning.",
    icon: (
      <img
        src={ASSETS.GIFS.addExistingCustomers}
        alt="logos"
        className="w-full  md:w-[387px] border-[1rem] border-[#EBF1FF]"
      />
    ),
  },
  {
    id: 2,
    // cardtext: "Customer acquisition",
    // title: "Invite survey participants to opt in or sign up.",
    desc: "Monitor campaign analytics in real-time and track lead conversion rate and customer engagement metrics, such as frequency of communication and recent interactions.",
    icon: (
      <img
        src={ASSETS.GIFS.realTImeAnalysis}
        alt="logos"
        className="w-full md:w-[387px] border-[1rem] border-[#EBF1FF]"
      />
    ),
  },
  {
    id: 3,
    // cardtext: "Mobile engagement",
    // title: "Manage and reach your customers' all-in-one platform.",
    desc: "Get support for free. Participants typically complete a survey in less than 10 minutes without speeding through.",
    icon: (
      <img src={ASSETS.GIFS.freeSupport} alt="logos" className="w-full md:w-[387px] border-[1rem] border-[#EBF1FF]" />
    ),
  },
  // {
  //   id: 4,
  //   cardtext: "Embedded rewards",
  //   title: "Offer easily redeemable rewards for feedback.",
  //   desc: "Get support for free. Participants typically complete a survey in less than 10 minutes without speeding through.",
  //   icon: <img src={ASSETS.GIFS.EmbeddedRewards} alt="logos" className="w-full md:w-[387px]" />,
  // },
  // {
  //   id: 5,
  //   cardtext: "Intuitive analytics",
  //   title: "Explore your data with simple and intuitive tools.",
  //   desc: "Continuously improve your services and operations with actionable data.",
  //   icon: <img src={ASSETS.GIFS.IntuitiveAnalytics} alt="logos" className="w-full md:w-[387px]" />,
  // },
  // {
  //   id: 6,
  //   cardtext: "Easy collaboration",
  //   mobileText: "",
  //   title: "Involve your team or seek help from our team",
  //   desc: "Get support during the research process - crafting questions or analysing results.",
  //   icon: <img src={ASSETS.GIFS.EasyCollaboration} alt="logos" className="w-full md:w-[387px]" />,
  // },
];

const OurSolution: React.FC = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <div className="bg-[#FAFAFF] md:px-[4rem] px-2 md:py-[6rem] py-5">
      <div>
        <p className="text-center md:text-[40px] text-[28px] font-secondary">
          Get quality feedback from your customers
        </p>
      </div>
      <div className="px-[4rem] hidden md:block">
        {data.map((item, i) =>
          item.id % 2 !== 0 ? (
            <div key={i} className="flex justify-center">
              <div className="grid grid-cols-2 gap-x-[5rem] items-center py-[4rem]">
                <div className=" flex justify-end  ">
                  <div className="w-[75%]">
                    <motion.div
                      variants={variant}
                      initial="hidden"
                      whileInView="visible"
                      className="bg-[#EBF1FF] p-6 rounded-lg"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    {/* <p className="w-full font-secondary text-primary text-[36px]">{item.cardtext}</p> */}
                    {/* <p className="text-[18px]">{item.title}</p> */}
                    <p className="text-[18px] w-[75%] font-medium">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-center">
              <div className=" grid grid-cols-2 gap-x-[5rem] items-center py-[4rem]">
                <div className="flex justify-end ">
                  <div className="w-[76%]">
                    {/* <p className="w-full font-secondary text-primary text-[36px]">{item.cardtext}</p> */}
                    {/* <p className="text-[18px]">{item.title}</p> */}
                    <p className="text-[18px] font-medium">{item.desc}</p>
                  </div>
                </div>

                <div className="w-[75%] ">
                  <motion.div
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-[#EBF1FF] rounded-lg p-6"
                  >
                    {item.icon}
                  </motion.div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <div className=" w-full items-center px-2 space-y-3 mt-5 md:hidden ">
        {data.map((item, i) => (
          <div key={i}>
            <div className=" rounded-xl p-8  space-y-3 hover:cursor-pointer hover:border-primary hover:border hover:shadow-lg transition-all duration-300 delay-75">
              <motion.div
                variants={variant}
                initial="hidden"
                whileInView="visible"
                className="bg-[#EBF1FF] p-6 rounded-lg"
              >
                {item.icon}
              </motion.div>
              {/* <p className="font-secondary text-[24px] text-center pt-3 w-full text-primary">{item.cardtext}</p> */}
              <p className="text-[14px] text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[200px] mx-auto">
        <a href={ROUTES.LOGIN}>
          <PrimaryButton
            type="button"
            text="Get started now"
            css="px-5 rounded-md"
            variant="filled"
            buttonId="hiw_get_started_now_3"
          />
        </a>
      </div>

      {/* <PrimaryButton text="Get started now" variant={"filled"} css="w-[100px]"/> */}
    </div>
  );
};

export default OurSolution;
