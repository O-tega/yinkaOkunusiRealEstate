import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import uncoverInsight from "@/assets/images/mooyi/uncoverInsight.png";
import buildSurvey from "@/assets/images/mooyi/buildSurvey.png";
import gatherFeedback from "@/assets/images/mooyi/gatherFeedback.png";
import mooyiRewardsMemebers from "@/assets/images/mooyi/mooyiRewardsMemebers.png";
import mooyiTarget from "@/assets/images/mooyi/mooyiTarget.png";
import mooyiProjection from "@/assets/images/mooyi/mooyiProjection.png";
import { motion, AnimatePresence } from "framer-motion";
import BlueButton from "@/components/Button/BlueButton";
import TextCarousel from "./TextCarousel";
import CardList from "../solutions/components/CardList";
import { Helmet } from "react-helmet";

const HowItWorks: React.FC = () => {
  const cardData = [
    {
      title: "Build your survey.",
      desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
      img: buildSurvey,
    },
    {
      title: "Uncover insights fast.",
      desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
      img: uncoverInsight,
    },
    {
      title: "Gather feedback.",
      desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
      img: gatherFeedback,
    },
  ];

  const responseData = [
    {
      title: "MooyiRewards members.",
      desc: "We have a well-represented database of over 3 million Nigerians. You can reach the consumers you need within our diverse audience.",
      img: <img src={mooyiRewardsMemebers} alt="logos" className="w-[80px] md:w-[150px] pt-10" />,

      color: "bg-[#ECFEF5]",
    },
    {
      title: "Detailed targeting.",
      desc: "Navigate our platform with ease. Leverage geographic, demographic, and interest targeting options to hone in on your desired audience precisely.",
      img: <img src={mooyiTarget} alt="logos" className="w-[80px] md:w-[100px] pt-10" />,
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Lead acquisition.",
      desc: "Go beyond survey responses with a call-to-action question and seamlessly convert engaged respondents into valuable leads for future contact.",
      img: <img src={mooyiProjection} alt="logos" className="w-[80px] md:w-[100px] pt-10" />,

      color: "bg-[#FEFAE8]",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cardData.length]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | How it Works.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection />
      <div className="md:px-[5rem] px-2">
        <div className="flex justify-center py-10">
          <p className="font-secondary text-[32px] py-[5rem] hidden md:block">
            Effortlessly Gather Insights and Master Your Growth.
          </p>
          <p className="font-secondary text-[28px] text-center md:hidden ">
            Let Curiosity Guide You and Master Growth.
          </p>
        </div>
        <div className="flex justify-center w-full overflow-hidden h-[450px] relative">
          <AnimatePresence initial={false}>
            {cardData.map((item, i) =>
              activeIndex === i ? (
                <motion.div
                  className="md:flex justify-center absolute md:space-x-16 space-y-5 md:space-y-0 items-center min-w-full transition-all ease-in duration-300 animate-fadeInRight"
                  key={i}
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "-100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:hidden">
                    <img src={item.img} width={500} height={500} alt="image" />
                  </div>
                  <div className="flex flex-col justify-center md:w-[35%] text-center md:text-left">
                    <p className="md:text-[28px] text-[24px] font-secondary">{item.title}</p>
                    <p className="md:text-[20px] text-[16px]">{item.desc}</p>
                  </div>
                  <div className=" md:flex justify-end hidden">
                    <img src={item.img} width={500} height={500} alt="image" />
                  </div>
                </motion.div>
              ) : null,
            )}
          </AnimatePresence>
        </div>
        <div className="mt-10">
          <p className="font-secondary text-[32px] text-center hidden md:block">
            Get Quality Responses from Your Ideal Audience.
          </p>
          <p className="font-secondary text-[32px] text-center md:hidden">
            Harness The Collective Wisdom Of The People.
          </p>
          <CardList cardList={responseData} />
          <div className="mt-10 flex justify-center">
            <BlueButton text="Learn more about our panel" />
          </div>
          <div className="mt-10">
            <p className="font-secondary text-[32px] text-center hidden md:block">
              Achieve Your Research Goals with Our Support.
            </p>
            <p className="font-secondary text-[28px] text-center md:hidden">Achieve Your Goals with Our Support.</p>

            <div className="flex justify-center px-[4rem] my-10 pb-[4rem]">
              <TextCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
