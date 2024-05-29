import HeroSection from "@/components/HeroSection";
import OurSolution from "@/components/Web/OurSolution";
import LearnMore from "@/components/learnMore";
import { ASSETS } from "@/assets/images/Assets";
import lrLine from "@/assets/images/mooyi/lrLine.png";
import rlLine from "@/assets/images/mooyi/rlLine.png";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  // if (isLoading) {
  //   return <PreLoader text="Loading" />;
  // }
  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi for Business | Growth made easy.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection />

      <div className="bg-[#F8F6FC]">
        <div className="text-center py-[7em]">
          <h1 className=" md:text-[40px] text-[28px] leading-8 md:leading-none px-2 md:w-[60%] text-primary mx-auto">
            Customers are your best growth advisors.
          </h1>
          <p className="font-light sm:w-[45%] text-[24px] w-[80%] hidden md:block mx-auto">
            Let them guide you to sell more.
          </p>
          <p className="font-light text-[16px] w-[80%] pt-3 mx-auto md:hidden">
            They hold the key to what you need to improve and innovate.
          </p>
        </div>
      </div>
      <div>
        <OurSolution />
      </div>
      <div>
        <LearnMore />
      </div>
      <div className="bg-[#F9F9FE] py-[8rem]">
        <div className="mt-10 md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <p className="text-primary font-secondary md:text-[36px] text-[28px] md:pb-[10rem] pb-[5rem] text-center">
            Don’t worry about low engagement rates
          </p>
          <div className="md:flex items-center md:space-x-[10rem] px-2">
            <div className="w-[400px] hidden md:block">
              <p className="text-wrap">
                Our predictive sample engine, simple survey screens and comprehensive rewards system help boost
                participation.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div className="flex justify-center md:flex-col">
                <img src={ASSETS.GIFS.engagementRates} alt="Gif image" className="md:w-[415px] w-[380px]" />
              </div>
            </motion.div>
            <div className="md:w-[400px] px-2 pt-3 md:px-0 text-center md:text-left text-[14px] md:hidden">
              <p className="text-wrap">
                Our predictive sample engine, simple survey screens and comprehensive rewards system help boost
                participation.
              </p>
            </div>
          </div>
          <div className="my-5 px-2 md:px-0">
            <img src={rlLine} width={500} height={500} alt="Gif image" className="md:w-[415px] w-[207px]" />
          </div>
        </div>
        <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <div className="md:flex items-center md:space-x-[10rem]">
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div className="flex justify-center md:flex-none">
                <img src={ASSETS.GIFS.setScreeningQuestions} alt="Gif image" className="md:w-[415px] w-[380px]" />
              </div>
            </motion.div>
            <div className="md:w-[400px] px-2 pt-3 md:pt-0 text-center text-[16px] md:px-0 md:text-left md:text-[20px]">
              <p className="text-wrap ">
                Set screening questions for participants so you only get responses from the exact audience you need.
              </p>
            </div>
          </div>
          <div className="my-5 px-2 md:px-0">
            <img src={lrLine} width={500} height={500} alt="Gif image" className="md:w-[415px] w-[207px]" />
          </div>
        </div>
        <div className="md:px-[4rem] px-2 md:flex flex-col items-center text-[20px]">
          <div className="md:flex items-center md:space-x-[10rem]">
            <div className="md:w-[480px] hidden md:block">
              <p className="text-wrap">
                Target distinct segments such as business professionals, hoteliers, online merchants, grocery shoppers,
                and mobile money customers.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div>
                <img src={ASSETS.GIFS.TargetAudience} alt="Gif image" className="w-[415px]" />
              </div>
            </motion.div>
            <div className="md:w-[480px] pt-3 text-[14px] text-center px-2 md:hidden">
              <p className="text-wrap">
                Target distinct segments such as business professionals, hoteliers, online merchants, grocery shoppers,
                and mobile money customers.
              </p>
            </div>
          </div>
          <div className="my-5 px-2 md:px-0 flex justify-center">
            <img src={rlLine} width={500} height={500} alt="Gif image" className="md:w-[415px] w-[207px]" />
          </div>
        </div>
        <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <div className="md:flex items-center md:space-x-[10rem]">
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div className="flex justify-center md:flex-none">
                <img src={ASSETS.GIFS.EnBranchingLogicQuestions} alt="Gif image" className="md:w-[415px] w-[380px]" />
              </div>
            </motion.div>
            <div className="md:w-[480px] px-2 pt-3 md:pt-0 text-center text-[16px] md:px-0 md:text-left md:text-[20px]">
              <p className="text-wrap">
                Enjoy additional features such as branching logic questions, retargeting survey respondents, and
                one-click results filtering by demographic criteria.
              </p>
            </div>
          </div>
          <div className="my-5 px-2 md:px-0">
            <img src={lrLine} width={500} height={500} alt="Gif image" className="md:w-[415px] w-[207px]" />
          </div>
        </div>
        <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <div className="md:flex items-center md:space-x-[10rem]">
            <div className="w-[400px] hidden md:block">
              <p className="text-wrap">
                Participants typically complete a survey in less than 10 minutes without speeding through.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div>
                <img src={ASSETS.GIFS.lastgif} alt="Gif image" className="w-[415px]" />
              </div>
            </motion.div>
            <div className="w-[400px] text-[14px] text-center px-2 md:hidden">
              <p className="text-wrap">
                Participants typically complete a survey in less than 10 minutes without speeding through.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20  md:space-y-3 px-2 md:px-0">
        <p className=" text-center md:text-[40px] text-[28px] font-secondary md:px-[25rem] leading-10">
          Engage guests with live event games and feedback surveys.
        </p>
        <p className="md:text-[20px] md:px-[25rem] text-center text-[14px]">
          Flutterwave used the platform to register merchants and shoppers at their trade fair, incentivising them to
          participate and share their feedback about their event experience.
        </p>
        <div className="md:px-[4rem] pt-10 pb-[4rem]">
          <Carousel />
        </div>
        <div className="flex justify-center pb-16">
          <div className="md:w-[15%]">
            <Link to="mailto:support@enterscale.com">
              <PrimaryButton type="button" text="Request Demo" css="rounded-md" variant="filled" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
` `;

export default LandingPage;
