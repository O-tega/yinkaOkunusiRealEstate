import React from "react";
import HeroSection from "./HeroSection";
import celebrationCard from "@/assets/images/how-it-works/celebration.png";
import loneTarget from "@/assets/images/how-it-works/Target.png";
import multipleCustomer from "@/assets/images/how-it-works/Group.png";
import upwardGraph from "@/assets/images/how-it-works/graph.png";
import TextCarousel from "./TextCarousel";
// import CardList from "../solutions/components/CardList";
import { Helmet } from "react-helmet";
import LearnMore from "@/components/learnMore";
import FeaturesCard from "@/components/Web/FeaturesCard";
import { Link } from "react-router-dom";
import WhiteButton from "@/components/Button/WhiteButton";
import OurSolution from "@/components/Web/OurSolution";

const HowItWorks: React.FC = () => {
  const info = [
    {
      img: <img src={multipleCustomer} alt="" className="object-cover w-[80%]" />,
      text: "We have a well-represented database of over 3 million Nigerians. You can reach the consumers you need within our diverse audience.",
      title: "MooyiRewards members",
    },
    {
      img: <img src={loneTarget} alt="" className="object-cover w-[60%]" />,
      text: "Navigate our platform with ease. Leverage geographic, demographic, and interest targeting options to hone in on your desired audience.",
      title: "Detailed targeting.",
    },
    {
      img: <img src={upwardGraph} alt="" className="object-cover w-[60%]" />,
      text: "Go beyond survey responses with a call-to-action question and seamlessly convert engaged respondents into valuable leads for future contact.",
      title: "Lead acquisition.",
    },
    {
      img: <img src={celebrationCard} alt="" className="object-cover w-[80%]" />,
      title: "Customer engagement.",
      text: "Create multichannel campaigns to drive engagement, loyalty, and actions - clicks, opt-ins, page views, purchases, feedback, reviews, or shares.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | How it Works.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection />
      <div>
        <div className="md:px-[5rem] px-2">
          <p className="font-secondary md:text-[36px] text-[24px] text-center py-[5rem]">
            Understand your customers, competitors and market better.
          </p>
          <div>
            <LearnMore />
          </div>
        </div>
        <div className="bg-[#141254] mt-[5rem] py-[5rem] " id="ourPanel">
          <p className="font-secondary md:text-[36px] text-[24px] text-center text-white">
            Understand your customers, competitors and market better.
          </p>
          <div className="flex justify-center mt-[3rem]">
            <div className="md:grid grid-cols-2 gap-12 space-y-5 md:space-y-0">
              {info.map((el, i) => (
                <FeaturesCard key={i} title={el.title} text={el.text} img={el.img} id={i} />
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-3 mt-[5rem]">
            <Link to={"https://www.mooyirewards.com"} target={"_blank"}>
              <WhiteButton text={"Learn more about MooyiRewards"} css="text-black" buttonId="hiw_learn_mfc_2" />
            </Link>
          </div>
        </div>
        <div id="audience">
          <OurSolution />
        </div>
        <div className="mt-10 md:px-[5rem] px-2">
          <div className="mt-10">
            <p className="font-secondary text-[32px] text-center hidden md:block">
              Achieve your research goals with our support.
            </p>
            <div className="md:hidden flex justify-center">
              <p className="font-secondary text-[24px] w-[75%] text-center ">Achieve your goals with our support.</p>
            </div>

            <div className="flex justify-center md:px-[4rem] md:my-10 my-5 pb-[4rem]">
              <TextCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
