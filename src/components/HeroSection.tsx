import React from "react";
import { motion, useInView } from "framer-motion";
import WhiteButton from "./Button/WhiteButton";
import BlueWhiteButton from "./Button/BlueWhiteButton";
import { ASSETS } from "@/assets/images/Assets";
import chart101 from "@/assets/images/landing/chart101.png";
import chart102 from "@/assets/images/landing/chat102.png";
import chart103 from "@/assets/images/landing/chat103.png";
import chart104 from "@/assets/images/landing/InsightsImg.png";

const HeroSection: React.FC = () => {
  // Define the fade-in and directional variants
  const fadeInVariants = {
    // hidden: {
    //   opacity: 0,
    //   x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
    //   y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    // },
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 1, // Delay based on index
        duration: 1, // Animation duration
        ease: "easeInOut",
      },
    }),
  };

  // Ref to monitor the section's visibility in the viewport
  const ref = React.useRef(null);
  const isInView = useInView(ref); // Trigger only once when in view

  return (
    <div ref={ref} className="w-[100%] mx-auto md:h-full h-[600px]">
      <div className="w-full mx-auto h-full bg-primary pb-[3rem] md:block ">
        <div className="pt-[5rem]">
          <h1 className="md:text-[80px] text-[40px] mx-auto leading-[1.2em] text-white text-center">
            You deserve the upper hand.
          </h1>
          <p className="font-primary md:text-[24px] pt-3 md:mt-0 text-[14px] text-white text-center px-5 md:px-0">
            See what your audience cares about. Build campaigns that matter. Drive engagement that lasts.
          </p>
          <p className="font-[600] md:text-[24px] pt-3 md:mt-0 text-[14px] text-white text-center">
            All from one ethical, data-driven platform.
          </p>
          <div className="flex items-center space-x-7 justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:support@enterscale.com"
              className="flex justify-center mt-5"
            >
              <WhiteButton text={"Book a demo"} css="text-black" buttonId="book_a_demo_1" />
            </a>
            <a href={`/pricing`} className="flex justify-center mt-5">
              <BlueWhiteButton text={"See pricing"} css="text-black" buttonId="see_pricing1" />
            </a>
          </div>
        </div>

        {/* Image animations with 1-second staggered delay */}
        <div className="flex justify-center mt-10 md:mt-[3rem] relative">
          <div className="md:w-[75%] w-[95%] md:min-h-[calc(100vh-130px)] h-[270px] border-[#959DF3] bg-white border-[0.8rem] rounded-[2rem] flex justify-start items-start overflow-hidden">
            <img src={ASSETS.howItWorks.hero} alt="" className="object-cover object-top h-full w-full" />
            {/* Animated images */}
            {isInView && (
              <>
                <motion.div
                  className="absolute bottom-0 right-[1rem] md:w-[450px] hidden md:block"
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={fadeInVariants} // Fade in from the right
                >
                  <img src={chart101} alt="" className="object-cover object-top h-full w-full" />
                </motion.div>

                <motion.div
                  className="absolute top-0 right-[2rem] md:w-[400px] hidden md:block"
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={fadeInVariants} // Fade in from the top
                >
                  <img src={chart104} alt="" className="object-cover object-top h-full w-full" />
                </motion.div>

                <motion.div
                  className="absolute bottom-0 left-[2rem] md:w-[500px] hidden md:block"
                  initial="hidden"
                  animate="visible"
                  custom={2}
                  variants={fadeInVariants} // Fade in from the left
                >
                  <img src={chart102} alt="" className="object-cover object-top h-full w-full" />
                </motion.div>

                <motion.div
                  className="absolute top-0 left-[20rem] md:w-[500px] hidden md:block"
                  initial="hidden"
                  custom={4}
                  animate="visible"
                  variants={fadeInVariants} // Fade in from the bottom
                >
                  <img src={chart103} alt="" className="object-cover object-top h-full w-full" />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
