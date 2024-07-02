import { useEffect, useState } from "react";
// import onCall from "@/assets/images/mooyi/onCall.png";
import { BsDashLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { ASSETS } from "@/assets/images/Assets";

const carouselData = [
  {
    id: 1,
    title: "Research & insights team support.",
    desc: "Our in-house research and insights team will guide you through a seamless process to help you shape your research and action your findings.",
  },
  {
    id: 2,
    title: "Get expert advice on survey design.",
    desc: "Craft surveys that yield meaningful data. Benefit from expert advice on survey design, question types, structure, and audience targeting.",
  },
  {
    id: 3,
    title: "Monitor your results and share insights.",
    desc: "We'll monitor your survey progress, share best practices, and offer recommendations for punctual completion and high-quality data.",
  },
];

const TextCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [numArray, setNumArray] = useState<number[]>([0]);

  const variant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: "-10%", transition: { duration: 0.8 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
      setNumArray((prevArray) => {
        const nextIndex = prevArray.length >= carouselData.length ? 0 : prevArray.length;
        return nextIndex === 0 ? [0] : [...prevArray, nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSetIndex = (index: number) => {
    setActiveIndex(index);
    setNumArray([index]);
  };

  return (
    <div className="md:flex items-center justify-between w-full md:space-x-16 bg-[#F8FAFF] rounded-xl overflow-hidden">
      <div>
        <img src={ASSETS.howItWorks.support} alt="on call image" className="w-full" />
      </div>
      <div>
        {carouselData.map((item, i) => (
          <div key={i} className="transition-all duration-300 ease-in">
            <div className="pr-10">
              {activeIndex === i ? (
                <motion.div
                  variants={variant}
                  initial="hidden"
                  whileInView="visible"
                  className="md:w-[500px] text-center md:text-left pt-5 md:pt-0"
                >
                  <p className="font-secondary md:text-[24px] text-[20px]">{item.title}</p>
                  <p className="md:text-[20px] text-[16px] font-medium">{item.desc}</p>
                </motion.div>
              ) : null}
            </div>
          </div>
        ))}

        <div className="flex space-x-1 items-center mt-10 justify-center md:justify-start">
          {carouselData.map((item, i) => (
            <div key={i} className={`${numArray.includes(i) ? "text-primary" : "text-black"}`}>
              {i === 2 ? (
                <p onClick={() => handleSetIndex(i)} className="hover:cursor-pointer">
                  0{item.id}
                </p>
              ) : (
                <p className="flex space-x-4 items-center hover:cursor-pointer" onClick={() => handleSetIndex(i)}>
                  0{item.id} <BsDashLg size={50} />
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextCarousel;
