import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import HeroSection from "../components/HeroSection";
import { Helmet } from "react-helmet";
import surveyCreated from "@/assets/images/landing/surveyCreated.png";
import brokenPie from "@/assets/images/icons/brokenPie.png";
import bullEye from "@/assets/images/icons/bullEye.png";
import Event from "@/assets/images/icons/Event.png";
import event2 from "@/assets/images/icons/event2.png";
import ratingcircle from "@/assets/images/icons/ratingcircle.png";
import event3 from "@/assets/images/icons/event3.png";
import { motion } from "framer-motion";
import TextCarousel from "@/pages/how-it-works/TextCarousel";

const WhyMooyi: React.FC = () => {
  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  const carolInfo = [
    {
      img: surveyCreated,
      title: "Build Your Survey.",
      text: "Get started with our user-friendly survey builder and templates. Access our panel or upload your contacts for quick, valuable insights.",
    },
    {
      img: ASSETS.howItWorks.barsImg,
      title: "Uncover Insights Fast.",
      text: "Receive results within hours, not weeks, and dive into interactive reports to uncover valuable data that drives action.",
    },
    {
      img: ASSETS.howItWorks.feedBackImg,
      title: "Gather Quick Feedback.",
      text: "Make informed decisions with insights from customer, vendor, or employee feedback gathered quickly and efficiently.",
    },
    {
      img: ASSETS.howItWorks.easyFollowUp,
      title: "Easy Follow-Up.",
      text: "Convert survey participants into leads and follow up with personalised SMS and email campaigns or follow-up calls, turning insights into loyalty.",
    },
  ];

  const ourAudience = [
    {
      icon: Event,
      text: "Tap into a panel of over 3 million, reaching the right consumers every time.",
    },
    {
      icon: bullEye,
      text: "Pinpoint your targeting. Use geography, demographics, and interests to connect with those who matter.",
    },
    {
      icon: event3,
      text: "Seamlessly convert respondents into leads with smart call-to-action questions.",
    },
  ];

  const yourAudience = [
    {
      icon: ratingcircle,
      text: "Focus your audience with precise screening, filtering out noise to get real insights.",
    },
    {
      icon: brokenPie,
      text: "Guide people on a journey. Segment their experience with survey branching that adapts to their answers.",
    },
    {
      icon: event2,
      text: "Reach the people that drive your business and gauge how they feel about your brand.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Unravel Your Brand Insights.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection
        type="WHY MOOYI"
        title="You don’t need more data. You need better insights."
        desc="Understand your market, connect with your audience, and grow your business from one robust platform trusted by Africa’s top brands."
        img={ASSETS.howItWorks.whyMooyi}
        desktopImg={ASSETS.howItWorks.whyMooyi}
        // watchTutorialId="bt_watch_tutorial_1"
        getInTouchId="Book a demo"
      />
      <div className="md:px-[5rem] px-5 my-[5rem]">
        <div>
          <p className="text-[40px] text-center font-[600]">How it Works</p>
          <div className="flex justify-center">
            <p className="text-[20px] text-center md:w-[40%] w-full">
              Mooyi brings the right voices to your table so you can make decisions and take actions rooted in real,
              relevant insights.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[3rem]">
          <div className="flex flex-wrap gap-[4rem] justify-center">
            {carolInfo.map((item, i) => (
              <div key={i} className="w-[46%] flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-[400px] h-full flex items-center justify-center">
                    <img src={item.img} alt="" className="object-cover" />
                  </div>
                  <div className="space-y-1 flex flex-col items-center pt-5">
                    <p className="md:text-[20px] font-secondary text-center">{item.title}</p>
                    <p className="md:text-[16px] w-[70%] font-medium text-center">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:px-[5rem] px-5 py-[5rem] bg-[#F5F7FE]">
        <div>
          <p className="md:text-[40px] text-[32px] text-center font-[600]">Target Your Ideal Audience Effortlessly.</p>
          <div className="flex justify-center">
            <p className="text-[20px] text-center md:w-[40%]">
              Mooyi automates the hard work of data collection, analysis, and reporting—so you can focus on scaling, not
              spreadsheets.
            </p>
          </div>
        </div>
        <div className="md:flex justify-center w-full mt-[3rem] border rounded-[2rem] p-5 bg-white ">
          <div className="flex flex-col items-center">
            <div className="md:w-[70%]">
              <p className="text-[24px] font-[500] text-center md:text-left">Our Audience</p>
              <p className="text-[18px] font-[500] text-center md:text-left ">
                Gather insights from your target audience quickly with location, demographic, and interest filters.
              </p>
            </div>
            <div className="space-y-5 mt-5 flex flex-col items-center max-w-fit">
              {ourAudience.map((el, i) => (
                <div key={i} className="flex items-center space-x-5 bg-[#EBF1FF] p-3 rounded-[20px] md:w-[70%]">
                  <div className="w-[45px] h-[45px] ">
                    <img src={el.icon} alt="" />
                  </div>
                  <div>
                    <p>{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex flex-col items-center hidden">
            <div className="w-[70%]">
              <p className="text-[24px] font-[500]">Your Audience</p>
              <p className="text-[18px] font-[500]">
                Collect feedback from your customers, partners or employees to enhance their experience.
              </p>
            </div>
            <div className="space-y-5 mt-5 flex flex-col items-center">
              {yourAudience.map((el, i) => (
                <div key={i} className="flex items-center space-x-5 bg-[#EBF1FF] p-3 rounded-[20px] w-[70%]">
                  <div className="w-[45px] h-[45px] ">
                    <img src={el.icon} alt="" />
                  </div>
                  <div>
                    <p>{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden justify-center w-full mt-[3rem] border rounded-[2rem] p-5 bg-white ">
          <div className="md:hidden flex-col items-center hidden">
            <div className="md:w-[70%]">
              <p className="text-[24px] font-[500] text-center md:text-left">Our Audience</p>
              <p className="text-[18px] font-[500] text-center md:text-left ">
                Gather insights from your target audience quickly with location, demographic, and interest filters.
              </p>
            </div>
            <div className="space-y-5 mt-5 flex flex-col items-center max-w-fit">
              {ourAudience.map((el, i) => (
                <div key={i} className="flex items-center space-x-5 bg-[#EBF1FF] p-3 rounded-[20px] md:w-[70%]">
                  <div className="w-[45px] h-[45px] ">
                    <img src={el.icon} alt="" />
                  </div>
                  <div>
                    <p>{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden flex-col items-center flex">
            <div className="md:w-[70%]">
              <p className="text-[24px] font-[500] text-center md:text-left">Your Audience</p>
              <p className="text-[18px] font-[500] text-center md:text-left">
                Collect feedback from your customers, partners or employees to enhance their experience.
              </p>
            </div>
            <div className="space-y-5 mt-5 flex flex-col items-center">
              {yourAudience.map((el, i) => (
                <div key={i} className="flex items-center space-x-5 bg-[#EBF1FF] p-3 rounded-[20px] md:w-[70%]">
                  <div className="w-[45px] h-[45px] ">
                    <img src={el.icon} alt="" />
                  </div>
                  <div>
                    <p>{el.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[3rem]">
        <div className="mt-2 md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <p className="font-secondary md:text-[40px] text-[28px] md:pb-[5rem] pb-[5rem] text-center">How it works</p>
        </div>
        <div className="flex justify-center">
          <div className="">
            <div className="flex flex-col items-center space-y-[4rem]">
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
                      <span className="text-[24px] font-[600]">Data Quality</span> <br />
                      <span>
                        Ensure Quality Responses. No fake answers here. Our multi-layered quality control, powered by
                        human and AI checks, guarantees reliable results every time.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex items-center md:space-x-[5rem] px-2">
                <div className="w-[500px] hidden md:block">
                  <p className="text-wrap">
                    <span className="text-[24px] font-[600]">Redeemable Rewards</span> <br />
                    <span>
                      Boost Participation with Ease. Our user-friendly interface and comprehensive reward system ensure
                      high participation rates.
                    </span>
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
                    <span className="text-[24px] font-[600]">Redeemable Rewards</span> <br />
                    <span>
                      Boost Participation with Ease. Our user-friendly interface and comprehensive reward system ensure
                      high participation rates.
                    </span>
                  </p>
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
                      <span className="text-[24px] font-[600]">Robust Insights</span> <br />
                      <span>
                        Enjoy Sophisticated Survey Tools. Use additional features like branching logic, retargeting
                        survey respondents, and one-click results filtering to refine your insights.contacts for quick,
                        valuable insights.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-16">
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
        </div> */}
      </div>
      <div className="md:px-[5rem] px-5 py-[5rem] bg-[#F5F7FE]">
        <p className="md:text-[40px] text-[32px] text-center font-[600] pb-[3rem]">
          Step into the future with the knowledge to win
        </p>
        <TextCarousel />
      </div>
    </div>
  );
};

export default WhyMooyi;
