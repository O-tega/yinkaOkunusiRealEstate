"use client";
import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    cardtext: "Uber-fast responses",
    title: "Get 100% response rates on your surveys.",
    desc: "Outpace your competitors with quick access to consumer data in real time.",
    icon: (
      <img
        src={ASSETS.GIFS.UberFastResponses}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
  {
    id: 2,
    cardtext: "Customer acquisition",
    title: "Invite survey participants to opt in or sign up.",
    desc: "Launch surveys that not only provide insights but also help generate leads.",
    icon: (
      <img
        src={ASSETS.GIFS.CustomerAcquisition}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
  {
    id: 3,
    cardtext: "Mobile engagement",
    title: "Manage and reach your customers' all-in-one platform.",
    desc: "Send beautiful emails and SMS to nurture leads and drive conversions.",
    icon: (
      <img
        src={ASSETS.GIFS.MobileEngagement}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
  {
    id: 4,
    cardtext: "Embedded rewards",
    title: "Offer easily redeemable rewards for feedback.",
    desc: "Spend less time on the admin part of surveys and more digesting responses.",
    icon: (
      <img
        src={ASSETS.GIFS.EmbeddedRewards}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
  {
    id: 5,
    cardtext: "Intuitive analytics",
    title: "Explore your data with simple and intuitive tools.",
    desc: "Continuously improve your services and operations with actionable data.",
    icon: (
      <img
        src={ASSETS.GIFS.IntuitiveAnalytics}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
  {
    id: 6,
    cardtext: "Easy collaboration",
    mobileText: "",
    title: "Involve your team or seek help from our team",
    desc: "Get support during the research process - crafting questions or analysing results.",
    icon: (
      <img
        src={ASSETS.GIFS.EasyCollaboration}
        alt="logos"
        className="w-full md:w-[387px]"
      />
    ),
  },
];

const OurSolution: React.FC = () => {
  // const [onHover, setHover] = useState(0);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const handleHover = (index: number) => {
  //   setHover(index);
  //   scrollToCard(index);
  // };

  // const scrollToCard = (index: number) => {
  //   const container = containerRef.current;
  //   const card = cardRefs.current[index];
  //   if (!container || !card) return;

  //   const cardWidth = card.offsetWidth;
  //   const scrollLeft = container.scrollLeft;
  //   const containerWidth = container.clientWidth;
  //   const cardLeft = card.offsetLeft;

  //   if (
  //     cardLeft < scrollLeft ||
  //     cardLeft + cardWidth > scrollLeft + containerWidth
  //   ) {
  //     container.scrollTo({
  //       left: cardLeft,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <div className="bg-[#FAFAFF] md:px-[4rem] px-2 md:py-[6rem] py-5">
      {/* <div>
        <p className="text-primary text-center text-[20px]">Our Solutions</p>
      </div> */}
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
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <p className="w-full font-secondary text-primary text-[36px]">
                      {item.cardtext}
                    </p>
                    <p className="text-[18px]">{item.title}</p>
                    <p className="text-[18px] w-[75%]">{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-center">
              <div className=" grid grid-cols-2 gap-x-[5rem] items-center py-[4rem]">
                <div className="flex justify-end ">
                  <div className="w-[76%]">
                    <p className="w-full font-secondary text-primary text-[36px]">
                      {item.cardtext}
                    </p>
                    <p className="text-[18px]">{item.title}</p>
                    <p className="text-[18px]">{item.desc}</p>
                  </div>
                </div>
                <div className="">
                  <div className="w-full">
                    <motion.div
                      variants={variant}
                      initial="hidden"
                      whileInView="visible"
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )
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
                className=""
              >
                {item.icon}
              </motion.div>
              <p className="font-secondary text-[24px] text-center pt-3 w-full text-primary">
                {item.cardtext}
              </p>
              <p className="text-[14px] text-center">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolution;
