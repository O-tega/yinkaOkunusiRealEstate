import HeroSection from "@/components/HeroSection";
import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/assets/images/Assets";
import { motion } from "framer-motion";

import SingleCarousel from "@/components/SingleCarousel";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import icon1 from "@/assets/images/icons/icon1.png";
// import icon2 from "@/assets/images/icons/icon2.png";
// import icon3 from "@/assets/images/icons/fieldResearch.png";
// import icon4 from "@/assets/images/icons/icon4.png";
// import icon5 from "@/assets/images/icons/icon5.png";
// import icon6 from "@/assets/images/icons/im.png";
// import headset from "@/assets/images/icons/headset.png";

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
  const [count, setCount] = useState(0);
  const [toggleValue, setToggleValue] = useState(false);
  const { conversionRate } = useCurrency();
  // const variant = {
  //   visible: { scale: 1 },
  //   hidden: { scale: 0 },
  // };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 2500); // 1 second delay

    return () => clearTimeout(interval); // Cleanup the timeout on unmount
  }, [count]); // Re-run the effect when `count` changes

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const handleHover = (id: number) => {
    setCount(count !== id ? id : count);
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
      id: 0,
      title: "Lead Generation Surveys",
      subTitle: "Manage research and acquisition from one place.",
      text: "Manage research and customer acquisition from one place. Create surveys that reach millions of your target audience and convert them with simple opt-in forms. Send SMS and email campaigns to your new leads.",
      icon: ASSETS.shuffleImg.preview1,
    },
    // {
    //   title: "Brand Tracking",
    //   subTitle: "Monitor brand awareness, perception, and loyalty in real-time.",
    //   text: "Mooyi's brand tracking tools offer real-time monitoring of brand awareness, perception, and loyalty, helping you gain insights and outpace the competition.",
    //   icon: icon2,
    // },
    {
      id: 1,
      title: "Field Research",
      subTitle: "Conduct field surveys to capture on the ground insights",
      text: "Go beyond digital. Conduct field surveys to capture authentic insights from stores, events, and real-world interactions. Mooyi makes it easy to gather actionable feedback from your audience wherever they are.",
      link: "/how-it-works",
      icon: ASSETS.shuffleImg.preview2,
    },
    {
      id: 2,
      title: "Customer Experience Management",
      subTitle: "Conduct field surveys to capture on the ground insights",
      text: "Stop guessing. Start knowing. Mooyi delivers real-time data and actionable insights, such as NPS and CSAT, to help you understand what your customers, partners, or employees truly want.",
      icon: ASSETS.shuffleImg.preview3,
    },
  ];
  const infoImg = [ASSETS.shuffleImg.preview1, ASSETS.shuffleImg.preview2, ASSETS.shuffleImg.preview3];
  const infoImg2 = [ASSETS.shuffleImg.preview4, ASSETS.shuffleImg.preview5, ASSETS.shuffleImg.preview6];

  const infoCard2 = [
    {
      id: 0,
      title: "Customer Data Management.",
      subTitle: "Stop guessing. Start knowing.",
      text: "Enhance your customer understanding and dynamically segment your audience. With NDPR compliance and advanced encryption, you can trust your information is secure and handled carefully.",
      icon: ASSETS.shuffleImg.preview4,
    },
    {
      id: 1,
      title: "Mobile Marketing",
      subTitle: "Enhance your customer understanding and targeting",
      text: "Engage your customers on the go with personalised texts, emails, and voice messages. Track reach, impressions, and conversions in real time, for valuable insights to refine your campaigns.",
      icon: ASSETS.shuffleImg.preview5,
    },
    {
      id: 2,
      title: "Incentives Management",
      subTitle: "Engage your customers on the go.",
      text: "Offer easily redeemable rewards such as airtime, data, or cash through Mooyi Rewards, or provide discounts and gift vouchers from your store or business. Spend less time on follow-up and more time taking action.",
      icon: ASSETS.shuffleImg.preview6,
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
              An all-in-one platform to grow your brand—ethically.
            </p>
          </div>
        </div>
      </div>
      <div className="md:py-[6rem] py-5 bg-[#F9F9FE]">
        <div className="md:flex justify-center space-x-[5rem]">
          {/* Text Section */}
          <div className="md:w-[35%] space-y-[3rem] md:space-y-2">
            {infoCard.map((el, i) => (
              <div
                onClick={() => handleHover(el.id)}
                onMouseEnter={() => handleHover(el.id)}
                onMouseLeave={() => handleHover(count)}
                className="cursor-pointer"
              >
                <InfoText key={i} title={el.title} text={el.text} icon={el.icon} count={count} id={el.id} />
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="md:flex justify-center hidden md:w-[650px] w-[400px] relative">
            {infoImg.map((el, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-full h-auto" // Layer images on top of each other
                initial={{ opacity: 0 }} // Start with hidden
                animate={{ opacity: count === i ? 1 : 0 }} // Show current image, hide others
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
              >
                <img src={el} alt={`image-${i}`} className="w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:py-[6rem] py-5 bg-white">
        <div className="flex  justify-center md:space-x-16">
          <div className="md:flex justify-center hidden md:w-[650px] w-[400px] relative">
            {infoImg2.map((el, i) => (
              <motion.div
                key={i}
                className="absolute top-0 w-full h-auto" // Layer images on top of each other
                initial={{ opacity: 0 }} // Start with hidden
                animate={{ opacity: count === i ? 1 : 0 }} // Show current image, hide others
                transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
              >
                <img src={el} alt={`image-${i}`} className="w-full object-cover" />
              </motion.div>
            ))}
          </div>
          <div className=" px-5 md:px-0 space-y-2 md:w-[37%]">
            {infoCard2.map((el, i) => (
              <div
                onMouseEnter={() => handleHover(el.id)}
                onMouseLeave={() => handleHover(count)}
                className="cursor-pointer"
              >
                <InfoText key={i} title={el.title} text={el.text} icon={el.icon} count={count} id={el.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-100 md:h-[370px] h-full md:px-[5rem] px-5 ">
        <div className="md:flex items-center justify-between h-full ">
          <div className="md:w-[50%] w-full  flex items-center pt-5">
            <h1 className="w-full text-center md:text-left md:text-[32px] text-[18px] font-[400]">
              Mooyi leverages a community of millions who share their opinions, reviews, and feedback on subjects that
              interest them.
            </h1>
          </div>
          <div className="">
            <img src={ASSETS.LandingPage.mobileAudience} alt="" className=" w-[403px] md:w-[500px]" />
          </div>
        </div>
      </div>
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
        <div className="mt-2  hidden md:block">
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

      <div className="mt-20  md:space-y-3 px-2 md:px-0">
        <div className="flex justify-center">
          <p className="bg-blue-100 px-5 py-2 w-fit text-blue-800 text-[18px] font-[600] rounded-md">CASE STUDY</p>
        </div>
        <p className=" text-center md:text-[40px] text-[28px] font-secondary md:px-[19rem] leading-10 pt-5">
          Check-in your guests and engage them with live event games and feedback surveys.
        </p>
        <div className=" pt-10 pb-5 md:pb-[2rem]">
          <SingleCarousel />
        </div>
        <p className="md:text-[20px] md:px-[18rem] text-center text-[14px]">
          Flutterwave used the platform to register merchants and shoppers at their trade fair, incentivising them to
          participate and share their feedback about their event experience.
        </p>
        <div className="flex justify-center mt-5 md:mt-0 pb-16">
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
