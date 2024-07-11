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
      logo: <img src={flutterwaveWhite} alt="logos" className="w-[120px] md:w-[250px]" />,
    },
    {
      name: "M-power",
      logo: (
        <div>
          <img src={Mpower} alt="logos" className="w-[80px] md:w-[180px]" />
        </div>
      ),
    },
    {
      name: "Enterscale",
      logo: <img src={enterscaleWhite} alt="logos" className="w-[80px] md:w-[180px]" />,
    },
    {
      name: "wicrypt",
      logo: <img src={wicrypt} alt="logos" className="w-[60px] md:w-[130px]" />,
    },
    {
      name: "kiboWhite",
      logo: <img src={kiboWhite} alt="logos" className="w-[60px] md:w-[130px]" />,
    },
  ];

  const infoCard = [
    {
      title: "Feedback from real humans.",
      text: "Get insights from our panel or your customers, partners, and employees. Our respondents have various reasons for participating.",
      link: "/how-it-works",
      img: customerIcon,
    },
    {
      title: "Incentives for participation.",
      text: "Gift participants rewards such as airtime, data, cash, or gift vouchers and spend less time on follow-up and more time taking action.",
      link: "/how-it-works",
      img: boxIcon,
    },
    {
      title: "Data you can count on.",
      text: "There are no fake answers. We’ve built multiple levels of quality control into Mooyi, blending human and AI checks for consistently reliable results.",
      link: "/how-it-works",
      img: statisticsIcon,
    },
    {
      title: "Research expertise on tap.",
      text: "Reach out if you have any questions or need our assistance. Our team of experts is on standby to help you make your research project successful.",
      link: "/how-it-works",
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
      title: "Curate user experiences and feedback",
      text: "Build trust and grow credibility with customer ratings and reviews you can repurpose.",
    },
    {
      img: clanederCard,
      title: "Reinvent your events",
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
      breakpoint: { max: 450, min: 0 },
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
      <div className="bg-white">
        <div className="text-center py-[3em] flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="md:text-[20px] md:w-[60%] font-medium">
                The best teams use Mooyi to gain deep insights into their market, enhance their value proposition and
                accelerate their growth.
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-7 space-y-2 mt-3 px-1">
              {logos.map((item, i) => (
                <div key={i}> {item.logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F9F9FE] py-[3rem]">
        <div className="mt-2 md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <p className="font-secondary md:text-[40px] text-[28px] md:pb-[5rem] pb-[5rem] text-center">How it works</p>
        </div>
        <div className="flex justify-center">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="md:flex items-center md:space-x-[5rem] px-2">
                <div className="w-[500px] hidden md:block">
                  <p className="text-wrap font-medium md:text-[20px]">
                    Don’t worry about low participation. Our extensive database, simple user experience, and
                    comprehensive rewards system can help boost participation.
                  </p>
                </div>
                <motion.div variants={variant} initial="hidden" whileInView="visible">
                  <div className="flex justify-start md:flex-col">
                    <img
                      src={ASSETS.GIFS.lessParticipationWorry}
                      alt="Gif image"
                      className="md:w-[500px] w-[380px] border-[1rem] border-[#EBF1FF]"
                    />
                  </div>
                </motion.div>
                <div className="md:w-[400px] px-2 pt-3 md:px-0 text-center md:text-left text-[14px] font-medium md:hidden">
                  <p className="text-wrap">
                    Don’t worry about low participation. Our extensive database, simple user experience, and
                    comprehensive rewards system can help boost participation.
                  </p>
                </div>
              </div>
              <div className="my-5 px-2 md:px-0">
                <img src={rlLine} alt="Gif image" className="md:w-[415px] h-[100px] w-[207px]" />
              </div>
            </div>
            <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px] font-medium">
              <div className="md:flex items-center md:space-x-[5rem]">
                <motion.div variants={variant} initial="hidden" whileInView="visible">
                  <div className="flex justify-center md:flex-none">
                    <img
                      src={ASSETS.GIFS.SetScreeningQuestionsforParticipants}
                      alt="Gif image"
                      className="md:w-[500px] w-[380px]  border-[1rem] border-[#EBF1FF]"
                    />
                  </div>
                </motion.div>
                <div className="md:w-[450px] px-2 pt-3 md:pt-0 text-center text-[16px] md:px-0 md:text-left md:text-[20px]">
                  <p className="text-wrap ">
                    Enjoy advanced features like built-in templates, branching logic questions, respondent retargeting,
                    and survey result filtering for a seamless experience.{" "}
                  </p>
                </div>
              </div>
              <div className="my-5 px-2 md:px-0">
                <img src={lrLine} alt="Gif image" className="md:w-[415px] h-[100px] w-[207px]" />
              </div>
            </div>
            <div className="md:px-[4rem] px-2 md:flex flex-col items-center text-[20px] font-medium">
              <div className="md:flex items-center md:space-x-[5rem]">
                <div className="md:w-[480px] hidden md:block">
                  <p className="text-wrap">
                    Reach distinct segments like business owners, hoteliers, online merchants, freelancers, and mobile
                    money users to gain tailored insights and drive targeted growth.
                  </p>
                </div>
                <motion.div variants={variant} initial="hidden" whileInView="visible">
                  <div>
                    <img
                      src={ASSETS.GIFS.targetDistinctSegment}
                      alt="Gif image"
                      className="w-[500px]  border-[1rem] border-[#EBF1FF]"
                    />
                  </div>
                </motion.div>
                <div className="md:w-[480px] pt-3 text-[14px] text-center px-2 md:hidden">
                  <p className="text-wrap">
                    Reach distinct segments like business owners, hoteliers, online merchants, freelancers, and mobile
                    money users to gain tailored insights and drive targeted growth.
                  </p>
                </div>
              </div>
              <div className="my-5 px-2 md:px-0 flex justify-center">
                <img src={rlLine} alt="Gif image" className="md:w-[415px] h-[100px] w-[207px]" />
              </div>
            </div>
            <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px] font-medium">
              <div className="md:flex items-center md:space-x-[5rem]">
                <motion.div variants={variant} initial="hidden" whileInView="visible">
                  <div className="flex justify-center md:flex-none">
                    <img
                      src={ASSETS.GIFS.EnjoyAdditionalFeature}
                      alt="Gif image"
                      className="md:w-[500px] w-[380px]  border-[1rem] border-[#EBF1FF]"
                    />
                  </div>
                </motion.div>
                <div className="md:w-[480px] px-2 pt-3 md:pt-0 text-center text-[16px] md:px-0 md:text-left md:text-[20px] font-medium">
                  <p className="text-wrap">
                    Enjoy advanced features like built-in templates, branching logic questions, respondent retargeting,
                    and survey result filtering for a seamless experience.
                  </p>
                </div>
              </div>
              <div className="my-5 px-2 md:px-0">
                <img src={lrLine} alt="Gif image" className="md:w-[415px] h-[100px] w-[207px]" />
              </div>
            </div>
            <div className="md:px-[4rem] px-2 flex flex-col items-center text-[20px] font-medium">
              <div className="md:flex items-center md:space-x-[5rem]">
                <div className="w-[490px] hidden md:block">
                  <p className="text-wrap">
                    Follow up with interested survey participants nurture their interest through personalised mobile
                    campaigns, and build lasting customer relationships and engagement.
                  </p>
                </div>
                <motion.div variants={variant} initial="hidden" whileInView="visible">
                  <div>
                    <img
                      src={ASSETS.GIFS.followUpIntrestedParticipant}
                      alt="Gif image"
                      className="w-[500px]  border-[1rem] border-[#EBF1FF]"
                    />
                  </div>
                </motion.div>
                <div className="w-[400px] text-[14px] text-center px-2 md:hidden">
                  <p className="text-wrap">
                    Follow up with interested survey participants nurture their interest through personalised mobile
                    campaigns, and build lasting customer relationships and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to="mailto:support@enterscale.com">
              <PrimaryButton
                type="button"
                text="Request Demo"
                css="rounded-md"
                variant="filled"
                buttonId="home_request_demo_2"
              />
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
            <h1 className="md:w-[82%] w-full text-center md:text-left text-white md:text-[32px] text-[20px] font-medium">
              Mooyi uses a network of 3m people to gather authentic insights, feedback, and reviews that help attract
              new customers and improve your offerings.
            </h1>
          </div>
        </div>
      </div>
      <div className="py-[6rem] bg-[#F9F9FE]">
        <div className="md:flex items-start space-x-3 justify-between ml-7">
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
        <div className="mt-2 ml-[1rem] md:ml-0">
          <Carousel responsive={responsive} arrows={false} ref={carouselRef}>
            {carolInfo?.map((item, i) => <CarouselCard key={i} title={item.title} text={item.text} img={item.img} />)}
          </Carousel>
        </div>
        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to={`${ROUTES.LOGIN}/register`}>
              <PrimaryButton
                type="button"
                text="Get started now"
                css="rounded-md"
                variant="filled"
                buttonId="home_get_started_now_3"
              />
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
        <p className=" text-center md:text-[40px] text-[28px] font-secondary md:px-[19rem] leading-10">
          Check-in your guests and engage them with live event games and feedback surveys.
        </p>
        <p className="md:text-[20px] md:px-[18rem] text-center text-[14px]">
          Flutterwave used the platform to register merchants and shoppers at their trade fair, incentivising them to
          participate and share their feedback about their event experience.
        </p>
        <div className="md:px-[4rem] pt-10 pb-[4rem]">
          <SingleCarousel />
        </div>
        <div className="flex justify-center pb-16">
          <div className="md:w-[15%]">
            <Link to="mailto:support@enterscale.com">
              <PrimaryButton
                type="button"
                text="Request Demo"
                css="rounded-md"
                variant="filled"
                buttonId="home_request_demo_4"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
