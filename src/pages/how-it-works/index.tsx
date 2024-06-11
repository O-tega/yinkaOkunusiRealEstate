import React from "react";
import HeroSection from "./HeroSection";
import celebrationCard from "@/assets/images/how-it-works/celebrationCard.png";
import loneTarget from "@/assets/images/how-it-works/loneTarget.png";
import multipleCustomer from "@/assets/images/how-it-works/multipleCustomer.png";
import upwardGraph from "@/assets/images/how-it-works/upwardGraph.png";
import TextCarousel from "./TextCarousel";
// import CardList from "../solutions/components/CardList";
import { Helmet } from "react-helmet";
import LearnMore from "@/components/learnMore";
import FeaturesCard from "@/components/Web/FeaturesCard";
import { Link } from "react-router-dom";
import WhiteButton from "@/components/Button/WhiteButton";

const HowItWorks: React.FC = () => {
  // const cardData = [
  //   {
  //     title: "Build your survey.",
  //     desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
  //     img: buildSurvey,
  //   },
  //   {
  //     title: "Uncover insights fast.",
  //     desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
  //     img: uncoverInsight,
  //   },
  //   {
  //     title: "Gather feedback.",
  //     desc: "Get started with our intuitive survey builder, professionally crafted survey templates and audience panel for your convenience.",
  //     img: gatherFeedback,
  //   },
  // ];

  // const responseData = [
  //   {
  //     title: "MooyiRewards members.",
  //     desc: "We have a well-represented database of over 3 million Nigerians. You can reach the consumers you need within our diverse audience.",
  //     img: <img src={mooyiRewardsMemebers} alt="logos" className="w-[80px] md:w-[150px] pt-10" />,

  //     color: "bg-[#ECFEF5]",
  //   },
  //   {
  //     title: "Detailed targeting.",
  //     desc: "Navigate our platform with ease. Leverage geographic, demographic, and interest targeting options to hone in on your desired audience precisely.",
  //     img: <img src={mooyiTarget} alt="logos" className="w-[80px] md:w-[100px] pt-10" />,
  //     color: "bg-[#EBF1FF]",
  //   },
  //   {
  //     title: "Lead acquisition.",
  //     desc: "Go beyond survey responses with a call-to-action question and seamlessly convert engaged respondents into valuable leads for future contact.",
  //     img: <img src={mooyiProjection} alt="logos" className="w-[80px] md:w-[100px] pt-10" />,

  //     color: "bg-[#FEFAE8]",
  //   },
  // ];

  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [cardData.length]);

  const info = [
    {
      img: multipleCustomer,
      text: "We have a well-represented database of over 3 million Nigerians. You can reach the consumers you need within our diverse audience.",
      title: "MooyiRewards members",
    },
    {
      img: loneTarget,
      text: "Navigate our platform with ease. Leverage geographic, demographic, and interest targeting options to hone in on your desired audience.",
      title: "Detailed targeting.",
    },
    {
      img: upwardGraph,
      text: "Go beyond survey responses with a call-to-action question and seamlessly convert engaged respondents into valuable leads for future contact.",
      title: "Lead acquisition.",
    },
    {
      img: celebrationCard,
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
        <div className="bg-[#141254] mt-[5rem] py-[5rem]">
          <p className="font-secondary md:text-[36px] text-[24px] text-center text-white">
            Understand your customers, competitors and market better.
          </p>
          <div className="flex justify-center mt-[3rem]">
            <div className="md:grid grid-cols-2 gap-12 space-y-5 md:space-y-0">
              {info.map((el, i) => (
                <FeaturesCard key={i} title={el.title} text={el.text} img={el.img} />
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-3 mt-[5rem]">
            <Link to={"mailto:support@enterscale.com"}>
              <WhiteButton text={"Learn more about MooyiRewards"} css="text-black" />
            </Link>
          </div>
        </div>
        <div className="mt-10 md:px-[5rem] px-2">
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
