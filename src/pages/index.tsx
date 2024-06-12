import HeroSection from "@/components/HeroSection";
import { useRef } from "react";
import { ASSETS } from "@/assets/images/Assets";
import lrLine from "@/assets/images/mooyi/lrLine.png";
import rlLine from "@/assets/images/mooyi/rlLine.png";
import { motion } from "framer-motion";
import SingleCarousel from "@/components/SingleCarousel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import enterscaleWhite from "@/assets/images/logos/enterscaleColored.png";
import kiboWhite from "@/assets/images/logos/kiboColored.png";
import flutterwaveWhite from "@/assets/images/logos/flutterCOlored.png";
import wicrypt from "@/assets/images/logos/wicryptColored.png";
import Mpower from "@/assets/images/logos/mPowerColored.png";

import customerIcon from "@/assets/images/icons/customerIcon.png";
import boxIcon from "@/assets/images/icons/boxIcon.png";
import graphIcon from "@/assets/images/icons/graphIcon.png";
import statisticsIcon from "@/assets/images/icons/statisticsIcon.png";
import InfoCard from "@/components/Web/InfoCard";

import feedbackCard from "@/assets/images/landing/feedbackCard.png";
import clanederCard from "@/assets/images/landing/clanederCard.png";
import fieldResearchCard from "@/assets/images/landing/fieldResearchCard.png";
import graphCard from "@/assets/images/landing/graphCard.png";
import insightCard from "@/assets/images/landing/insightCard.png";
import onboardCard from "@/assets/images/landing/onboardCard.png";
import surveyCreated from "@/assets/images/landing/surveyCreated.png";
import CarouselCard from "@/components/Web/CarouselCArd";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ROUTES } from "@/constants/externalUrls";

const LandingPage = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const logos = [
    {
      name: "flutter wave",
      logo: <img src={flutterwaveWhite} alt="logos" className="w-[150px] md:w-[250px]" />,
    },
    {
      name: "M-power",
      logo: (
        <div>
          <img src={Mpower} alt="logos" className="w-[150px] md:w-[180px]" />
        </div>
      ),
    },
    {
      name: "Enterscale",
      logo: <img src={enterscaleWhite} alt="logos" className="w-[100px] md:w-[180px]" />,
    },
    {
      name: "wicrypt",
      logo: <img src={wicrypt} alt="logos" className="w-[80px] md:w-[130px]" />,
    },
    {
      name: "kiboWhite",
      logo: <img src={kiboWhite} alt="logos" className="w-[80px] md:w-[130px]" />,
    },
  ];

  const infoCard = [
    {
      title: "Feedback from real humans.",
      text: "Get insights from our panel or your customers, partners, and employees. Our respondents have various reasons for participating.",
      link: "#",
      img: customerIcon,
    },
    {
      title: "Incentives for participation.",
      text: "Gift participants rewards such as airtime, data, cash, or gift vouchers and spend less time on follow-up and more time taking action.",
      link: "#",
      img: boxIcon,
    },
    {
      title: "Data you can count on.",
      text: "There are no fake answers. We’ve built multiple levels of quality control into Mooyi, blending human and AI checks for consistently reliable results.",
      link: "#",
      img: statisticsIcon,
    },
    {
      title: "Research expertise on tap.",
      text: "Upskill yourself in our Learning Hub or hire our in-house team of research and insights experts for more complex projects.",
      link: "#",
      img: graphIcon,
    },
  ];

  const carolInfo = [
    {
      img: surveyCreated,
      title: "Create any type of survey in minutes.",
      text: "Find the right audience for any research campaign in days, not weeks — from our panel.",
    },
    {
      img: graphCard,
      title: "Monitor your brand and competitors.",
      text: "Track key brand metrics to help you understand your reputation, fame and positioning.",
    },
    {
      img: fieldResearchCard,
      title: "Launch field research from your desk.",
      text: "Get footage and highlights from people in the streets, malls, markets, and other public spaces.",
    },
    {
      img: onboardCard,
      title: "Onboard new customers from surveys.",
      text: "Invite participants from our audience to join your contact book and nurture them over time.",
    },
    {
      img: insightCard,
      title: "Gain valuable customer insights.",
      text: "Learn more about your customers to develop personas and deliver personalised experiences.",
    },
    {
      img: feedbackCard,
      title: "Curate User Experiences and Feedback",
      text: "Build trust and grow credibility with customer ratings and reviews you can repurpose.",
    },
    {
      img: clanederCard,
      title: "Reinvent Your Events",
      text: "Transform your events with technology. Get answers to repeat memorable experiences for all.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef = useRef<any>(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi for Business | Growth made easy.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection />

      <div className="bg-[#F8F6FC]">
        <div className="text-center py-[5em] flex justify-center">
          <div>
            <p className="md:text-[20px]">We're trusted by some of the fastest growing startups in Africa.</p>
            <div className="flex items-center space-x-7 mt-3">
              {logos.map((item, i) => (
                <div key={i}> {item.logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9FE] py-[3rem]">
        <div className="mt-2 md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <p className="text-primary font-secondary md:text-[36px] text-[28px] md:pb-[5rem] pb-[5rem] text-center">
            How it works
          </p>
          <div className="md:flex items-center md:space-x-[10rem] px-2">
            <div className="w-[400px] hidden md:block">
              <p className="text-wrap">
                Don’t worry about low participation. Our 3m database, simple user experience, and comprehensive rewards
                system can help boost participation.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div className="flex justify-center md:flex-col">
                <img src={ASSETS.GIFS.engagementRates} alt="Gif image" className="md:w-[415px] w-[380px]" />
              </div>
            </motion.div>
            <div className="md:w-[400px] px-2 pt-3 md:px-0 text-center md:text-left text-[14px] md:hidden">
              <p className="text-wrap">
                Don’t worry about low participation. Our 3m database, simple user experience, and comprehensive rewards
                system can help boost participation.
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
                Set screening questions for participants so you only get responses from the audience you need.
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
                Target distinct segments, such as business professionals, hoteliers, online merchants, grocery shoppers,
                freelancers, and mobile money customers.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div>
                <img src={ASSETS.GIFS.TargetAudience} alt="Gif image" className="w-[415px]" />
              </div>
            </motion.div>
            <div className="md:w-[480px] pt-3 text-[14px] text-center px-2 md:hidden">
              <p className="text-wrap">
                Target distinct segments, such as business professionals, hoteliers, online merchants, grocery shoppers,
                freelancers, and mobile money customers.
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
                Enjoy additional features like branching logic questions, retargeting survey respondents, and one-click
                results filtering.
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
                Follow up with interested survey participants. Convert their interest into loyalty with personalised
                SMS, email and voice campaigns.
              </p>
            </div>
            <motion.div variants={variant} initial="hidden" whileInView="visible">
              <div>
                <img src={ASSETS.GIFS.lastgif} alt="Gif image" className="w-[415px]" />
              </div>
            </motion.div>
            <div className="w-[400px] text-[14px] text-center px-2 md:hidden">
              <p className="text-wrap">
                Follow up with interested survey participants. Convert their interest into loyalty with personalised
                SMS, email and voice campaigns.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to="mailto:support@enterscale.com">
              <PrimaryButton type="button" text="Request Demo" css="rounded-md" variant="filled" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141254] h-[370px] relative">
        <div className="md:flex items-center justify-between h-full">
          <div className="">
            <img src={ASSETS.LandingPage.surevyPreview} alt="" className="md:w-[653px] w-[403px] bottom-0 absolute" />
          </div>
          <div className="md:w-[50%] flex items-center pt-5">
            <h1 className="md:w-[82%] w-full text-center md:text-left text-white md:text-[32px] text-[20px]">
              Mooyi uses a network of 3m Africans to gather authentic insights, feedback, and reviews that help attract
              new customers and improve your offerings.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-[6rem] bg-[#F9F9FE]">
        <div className="md:flex items-start justify-between">
          <div className="md:grid grid-cols-2 gap-4 gap-y-[3rem] md:ml-[3rem] px-5 md:px-0 space-y-[3rem] md:space-y-0">
            {infoCard.map((el, i) => (
              <InfoCard key={i} title={el.title} text={el.text} link={el.link} img={el.img} />
            ))}
          </div>
          <div className="flex justify-end mt-[3rem] md:mt-0">
            <div className="md:w-[580px] w-[412px] pl-5 md:pl-0">
              <img src={ASSETS.LandingPage.appHome} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[7rem] py-[5rem] md:py-[5rem]">
        <div className="md:flex items-center justify-between">
          <p className="md:text-[40px] text-[24px] font-secondary pb-10 text-center md:text-left">
            What Are You Trying to Get Done?
          </p>
          <div className="flex items-center space-x-5 justify-center md:justify-end ">
            <div
              className={`rounded-full flex items-center justify-center p-1 border-primary border text-primary cursor-pointer`}
              onClick={handlePrevious}
            >
              <IoIosArrowRoundBack size={20} />
            </div>
            <div
              className={`rounded-full flex items-center justify-center p-1 border-primary border text-primary cursor-pointer`}
              onClick={handleNext}
            >
              <IoIosArrowRoundForward size={20} />
            </div>
          </div>
        </div>
        <div className="mt-2 ml-[2rem] md:ml-0">
          <Carousel responsive={responsive} arrows={false} ref={carouselRef}>
            {carolInfo?.map((item, i) => <CarouselCard key={i} title={item.title} text={item.text} img={item.img} />)}
          </Carousel>
        </div>
        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to={`${ROUTES.LOGIN}/register`}>
              <PrimaryButton type="button" text="Get started now" css="rounded-md" variant="filled" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#141254] md:h-[408px] h-[273px] relative">
        <div className="md:flex justify-between h-full">
          <div className="md:w-[50%] flex items-center md:pt-5 pt-[3rem] pl-3">
            <h1 className="md:w-[90%]  md:pl-[7rem] w-[70%] md:text-left text-white md:text-[40px] text-[20px]">
              Outpace your competitors with real-time access to market insights.
            </h1>
          </div>
          <div className="hidden md:block">
            <img
              src={ASSETS.LandingPage.surveyGraph}
              alt=""
              className="md:w-[457px] w-[403px] bottom-0 right-[15rem] absolute"
            />
            <img
              src={ASSETS.LandingPage.surveyPiechart}
              alt=""
              className="md:w-[244px] w-[403px] top-0 right-[10rem] absolute"
            />
          </div>
          <div className="md:hidden">
            <img src={ASSETS.LandingPage.surveyGraphCombined} alt="" className="w-[278px] bottom-0 right-0 absolute" />
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
          <SingleCarousel />
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
