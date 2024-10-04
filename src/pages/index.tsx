import HeroSection from "@/components/HeroSection";
import { useRef, useState } from "react";
import { ASSETS } from "@/assets/images/Assets";

import SingleCarousel from "@/components/SingleCarousel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import icon1 from "@/assets/images/icons/icon1.png";
// import icon2 from "@/assets/images/icons/icon2.png";
import icon3 from "@/assets/images/icons/fieldResearch.png";
import icon4 from "@/assets/images/icons/icon4.png";
import icon5 from "@/assets/images/icons/icon5.png";
import icon6 from "@/assets/images/icons/im.png";
import headset from "@/assets/images/icons/headset.png";

import enterscaleWhite from "@/assets/images/logos/enterscaleColored.png";
// import kiboWhite from "@/assets/images/logos/kiboColored.png";
import flutterwaveWhite from "@/assets/images/logos/flutterCOlored.png";
import wicrypt from "@/assets/images/logos/wicryptColored.png";
import Mpower from "@/assets/images/logos/mPowerColored.png";
import sendAppLogo from "@/assets/images/logos/sendAppLogo.png";

import feedbackCard from "@/assets/images/landing/feedbackCard.png";
import CreateLoyalty from "@/assets/images/landing/CreateLoyalty.png";
import growYourAudience from "@/assets/images/landing/growYourAudience.png";
import fieldResearchCard from "@/assets/images/landing/fieldResearchCard.png";
import graphCard from "@/assets/images/landing/graphCard.png";
import insightCard from "@/assets/images/landing/insightCard.png";
import surveyCreated from "@/assets/images/landing/surveyCreated.png";
import CarouselCard from "@/components/Web/CarouselCArd";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import InfoText from "@/components/Web/InfoText";
import LandingPrice from "@/components/LandingPrice";
import ToggleButton from "@/components/Button/ToogleButton";
import useCurrency from "@/hooks/useCUrrencyHooks";
import MobileCarousel from "@/components/MobileCarosel";

const LandingPage = () => {
  const [value, setValues] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  const { conversionRate } = useCurrency();
  // const variant = {
  //   visible: { scale: 1 },
  //   hidden: { scale: 0 },
  // };

  // const logos = [
  //   {
  //     name: "flutter wave",
  //     logo: <img src={flutterwaveWhite} alt="logos" className="w-[120px] md:w-[250px]" />,
  //   },
  //   {
  //     name: "M-power",
  //     logo: (
  //       <div>
  //         <img src={Mpower} alt="logos" className="w-[80px] md:w-[180px]" />
  //       </div>
  //     ),
  //   },
  //   {
  //     name: "Enterscale",
  //     logo: <img src={enterscaleWhite} alt="logos" className="w-[80px] md:w-[180px]" />,
  //   },
  //   {
  //     name: "wicrypt",
  //     logo: <img src={wicrypt} alt="logos" className="w-[60px] md:w-[130px]" />,
  //   },
  //   {
  //     name: "kiboWhite",
  //     logo: <img src={kiboWhite} alt="logos" className="w-[60px] md:w-[130px]" />,
  //   },
  //   {
  //     name: "kiboWhite",
  //     logo: <img src={ndpr} alt="logos" className="w-[60px] md:w-[120px]" />,
  //   },
  // ];

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const logos = [
    {
      name: "flutter wave",
      logo: <img src={flutterwaveWhite} alt="logos" className="w-[120px] md:w-[250px]" />,
    },
    {
      name: "sendApp",
      logo: <img src={sendAppLogo} alt="logos" className="w-[60px] md:w-[120px]" />,
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
  ];

  const tabs = [
    { name: "Free", value: 0 },
    { name: "SME", value: 1 },
    { name: "Business", value: 2 },
    { name: "Pro", value: 3 },
  ];

  const infoCard = [
    {
      title: "Lead Generation Surveys",
      subTitle: "Manage research and acquisition from one place.",
      text: "Create surveys that target millions of people and use simple opt-in forms to recruit new leads, nurture them, and gain insights.",
      icon: icon5,
    },
    // {
    //   title: "Brand Tracking",
    //   subTitle: "Monitor brand awareness, perception, and loyalty in real-time.",
    //   text: "Mooyi's brand tracking tools offer real-time monitoring of brand awareness, perception, and loyalty, helping you gain insights and outpace the competition.",
    //   icon: icon2,
    // },
    {
      title: "Field Research",
      subTitle: "Conduct field surveys to capture on the ground insights",
      text: "Gather real insights from stores, events, and real-world interactions. Mooyi makes it easy to collect feedback from your audience, no matter their location.",
      link: "/how-it-works",
      icon: icon3,
    },
    {
      title: "Customer Experience Management",
      subTitle: "Conduct field surveys to capture on the ground insights",
      text: "Mooyi provides real-time data and actionable insights, including NPS and CSAT, to help you better understand your customers, partners, or employees.",
      icon: headset,
    },
  ];

  const infoCard2 = [
    {
      title: "Customer Data Management.",
      subTitle: "Stop guessing. Start knowing.",
      text: "Build customer understanding and segment your audience effectively with NDPR-compliant, securely encrypted data handling.",
      icon: icon4,
    },
    {
      title: "Mobile Marketing",
      subTitle: "Enhance your customer understanding and targeting",
      text: "Engage your customers on the go with personalised bulk SMS, emails, voice messages, and surveys.",
      icon: icon5,
    },
    {
      title: "Incentives Management",
      subTitle: "Engage your customers on the go.",
      text: "Offer rewards like airtime, data, cash, or gift vouchers to save time on follow-up and admin, and focus more on taking action.",
      icon: icon6,
    },
  ];

  const carolInfo = [
    {
      img: ASSETS.LandingPage.launchMobile,
      title: "Launch Mobile Campaigns",
      text: "Create campaigns to drive actions, such as clicks, opt-ins, page views, and purchases.",
    },
    {
      img: insightCard,
      title: "Gain Valuable Customer Insights",
      text: "Learn about your customers to build personas and personalised experiences.",
    },
    {
      img: graphCard,
      title: "Benchmark Your Brand and Competitors",
      text: "Track key brand metrics to understand your reputation and relative positioning.",
    },
    {
      img: CreateLoyalty,
      title: "Create Loyalty Campaigns",
      text: "Create campaigns to drive loyalty, such as feedback, reviews, shares, and referrals.",
    },
    {
      img: feedbackCard,
      title: "Curate User Reviews and Feedback",
      text: "Request customer reviews and ratings that can be used for remarketing.",
    },
    {
      img: surveyCreated,
      title: "Create any Type of Survey in Minutes",
      text: "Find the right audience for any research campaign in days, not weeks.",
    },
    {
      img: fieldResearchCard,
      title: "Launch Field Research from Your Desk",
      text: "Get opinions from people in the streets, malls, markets, or events.",
    },
    {
      img: growYourAudience,
      title: "Grow Your Audience",
      text: "Add opt-in forms to your surveys and website to quickly and ethically expand your customer mailing list.",
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
        <title>Mooyi | Grow Your Business with Our All-in-One Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection />
      <div className="bg-white">
        <div className="text-center py-[3em] flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="md:text-[20px] md:w-[60%] font-medium">High-performing African brands trust us.</p>
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-7 space-y-2 mt-3 px-1">
              {logos.map((item, i) => (
                <div key={i}> {item.logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-ctaBg md:h-[293px] h-[170px] relative `}>
        {/* <div className="absolute top-0 left-0">
          <img src={ASSETS.LandingPage.ctaBackground} alt="" />
        </div> */}
        <div className="md:flex items-center justify-center h-full ">
          <div className="flex flex-col items-center pt-5 px-5 md:px-0">
            <h1 className=" w-full text-center  text-white md:text-[40px] text-[20px] font-[400]">
              You Don’t Need More Tools. <br /> You Need More Understanding.
            </h1>
            <p className="text-center text-[20px] font-[500] text-white">
              An all-in-one platform to grow your brand—effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-[6rem] py-5 bg-[#F9F9FE]">
        <div className="md:flex items-center space-x-3 justify-between md:ml-7">
          <div className="md:hidden flex justify-center mt-[3rem] md:mt-0  ">
            <div className="md:w-[650px] w-[320px]  relative">
              <img src={ASSETS.LandingPage.femaleAnalyst} alt="" />
              <div className="absolute top-[-2rem] left-[-1rem] drop-shadow-lg md:w-[200px] w-[100px] bg-white border p-2 rounded-md ">
                <img src={ASSETS.LandingPage.analysisChart} alt="" />
              </div>
            </div>
          </div>
          <div className=" md:ml-[3rem] md:px-0 space-y-[3rem] md:space-y-[2rem]">
            {infoCard.map((el, i) => (
              <InfoText key={i} title={el.title} text={el.text} icon={el.icon} />
            ))}
          </div>
          <div className="md:flex justify-end mt-[3rem] md:mt-0 hidden ">
            <div className="md:w-[650px] w-[400px]  relative">
              <img src={ASSETS.LandingPage.femaleAnalyst} alt="" />
              <div className="absolute top-[-2rem] left-[-5rem] drop-shadow-lg md:w-[200px] w-[100px] bg-white p-2 rounded-md border ">
                <img src={ASSETS.LandingPage.analysisChart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:py-[6rem] py-5 bg-white">
        <div className="md:flex items-center space-x-3 justify-between ">
          <div className="flex justify-center md:justify-end mt-[3rem] md:mt-0 relative">
            <div className="md:w-[650px] w-[350px] md:pl-0 px-3 md:px-0">
              <img
                src={ASSETS.LandingPage.manOnPhone}
                className="overflow-hidden md:overflow-auto rounded-[16px] md:rounded-none"
                alt=""
              />
              <div className="absolute md:bottom-[-4rem] bottom-[-3rem] right-0 md:right-[-10rem] md:w-[400px] w-[150px]">
                <img src={ASSETS.LandingPage.chart} alt="" />
              </div>
              <div className="absolute top-0 md:left-0 left-[2rem] md:w-[300px] w-[150px]">
                <img src={ASSETS.LandingPage.mooyiRewardQuestion} alt="" />
              </div>
            </div>
          </div>
          <div className=" md:pl-[10rem] px-5 md:px-0 space-y-[3rem] md:space-y-[2rem]">
            {infoCard2.map((el, i) => (
              <InfoText key={i} title={el.title} text={el.text} icon={el.icon} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-ctaBg h-[370px] relative">
        <div className="md:flex items-center justify-between h-full">
          <div className="">
            <img src={ASSETS.LandingPage.surevyPreview} alt="" className="md:w-[600px] w-[403px] bottom-0 absolute" />
          </div>
          <div className="md:w-[50%] flex items-center pt-5">
            <h1 className="w-full text-center md:text-left text-white md:text-[32px] text-[20px] font-[400]">
              Mooyi leverages a community of millions who consent to share their opinions, reviews, and feedback on
              subjects that interest them.
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#F9F9FE] py-[3rem]">
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
                    Add screening questions to your survey to filter out people who do not meet your additional
                    criteria. This will enhance the quality and accuracy of your data.
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
      </div> */}
      <div className="md:px-[7rem] py-[5rem] md:py-[5rem]">
        <div className="md:flex items-center justify-between">
          <p className="md:text-[40px] text-[24px] font-secondary pb-10 text-center md:text-left">
            What Are You Trying to Get Done?
          </p>
          <div className="md:flex items-center space-x-5 justify-center md:justify-end hidden  ">
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
        <div className="mt-2 ml-[1rem] md:ml-0 hidden md:block">
          <Carousel responsive={responsive} arrows={false} ref={carouselRef}>
            {carolInfo?.map((item, i) => <CarouselCard key={i} title={item.title} text={item.text} img={item.img} />)}
          </Carousel>
        </div>
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to={`mailto:support@enterscale.com`}>
              <PrimaryButton
                type="button"
                text="Book a demo"
                css="rounded-md"
                variant="filled"
                buttonId="home_get_started_now_3"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:px-[3rem] px-2 bg-[#F5F7FE99] pb-[4rem]">
        <div className="py-[2rem]">
          <p className="md:text-[40px] text-[32px] px-5 md:px-0 font-[500] text-center">
            Choose The Perfect Plan For Your Business
          </p>
        </div>
        <div className=" flex w-full justify-center items-center space-x-3">
          <p className={`${!toggleValue && "font-bold"}`}>USD</p>
          <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
          <p className={`${toggleValue && "font-bold"}`}>NGN</p>
        </div>
        <div className="flex items-center border-b justify-center space-x-7 mt-5 md:hidden">
          {tabs.map((el, i) => (
            <div
              key={i}
              className={`border-b ${
                value === el.value ? "border-primary border-b-[2px] font-[500]" : "text-gray-500"
              }`}
              onClick={() => setValues(el.value)}
            >
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center md:mt-10">
          <LandingPrice conversionRate={conversionRate} values={value} toggleValue={toggleValue} />
        </div>
      </div>

      <div className="w-full bg-ctaBg md:h-[408px] h-[273px] relative">
        <div className="md:flex justify-between h-full">
          <div className="md:w-[50%] flex items-center md:pt-5 pt-[3rem] pl-3">
            <h1 className="md:w-full  md:pl-[7rem] w-[70%] md:text-left text-white md:text-[40px] text-[20px]">
              Understand your customers, competitors and market like never before.
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
      <div className="w-full bg-[#F5F7FE99] md:h-[370px] py-10 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between md:px-[5rem] px-5 h-full">
          <div className="md:w-[347px] w-[200px] flex md:h-[272px]">
            <img src={ASSETS.LandingPage.ndprLogo} alt="" className="" />
          </div>
          <div className="md:w-[55%] flex flex-col justify-center">
            <p className="md:text-[40px] text-[24px] font-[500] text-center md:text-left">
              Your Data is Protected and Secure
            </p>
            <h1 className="w-full md:text-left text-center md:text-[20px] text-[12px] font-[400]">
              Mooyi is built to comply with all applicable data protection regulations, and industry best practices,
              ensuring that all information remains private, secure, and only used with your consent.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-20  md:space-y-3 px-2 md:px-0">
        <div className="flex justify-center">
          <p className="bg-blue-100 px-5 py-2 w-fit text-blue-800 text-[18px] font-[600] rounded-md">CASE STUDY</p>
        </div>
        <p className=" text-center md:text-[40px] text-[28px] font-secondary md:px-[19rem] leading-10 pt-5">
          Check-in your guests and engage them with live event games and feedback surveys.
        </p>
        <p className="md:text-[20px] md:px-[18rem] text-center text-[14px]">
          Flutterwave used the platform to register merchants and shoppers at their trade fair, incentivising them to
          participate and share their feedback about their event experience.
        </p>
        <div className=" pt-10 pb-[4rem]">
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
