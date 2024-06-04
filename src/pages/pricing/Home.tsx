"use client";
import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Group from "@/assets/images/pricing/Group.png";
import giftPricing from "@/assets/images/pricing/giftPricing.png";
import contactDoc from "@/assets/images/pricing/contactDoc.png";
import CTAs from "@/assets/images/mooyi/CTAs.png";
import uncoverInsight from "@/assets/images/mooyi/uncoverInsight.png";
import { Helmet } from "react-helmet";
// import { ROUTES } from "@/constants/externalUrls";
import { Link } from "react-router-dom";
import WhiteButton from "@/components/Button/WhiteButton";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Card from "./Card";

const Home: React.FC = () => {
  const cardData = [
    {
      title: "Research Hub",
      subtitle: "Streamline your research with our all-in-one platform.",
      img: uncoverInsight,
      link: "/pricing/research-hub",
    },
    {
      title: "CRM Hub",
      subtitle: "Drive success with our comprehensive CRM and messaging features.",
      img: Group,
      link: "/pricing/customer-research-model",
    },
    {
      title: "Custom Plan",
      subtitle: "Create a customised plan that fits your business needs.",
      img: giftPricing,
      link: "#",
    },
  ];

  const faqData = [
    {
      id: 1,
      title: "Is there a cost to using Mooyi™?",
      content: [
        {
          subtitle: "",
          subContent:
            "Different subscription plans are available on mooyi™, like the Starter, Business, and Pro plans, each offering different access levels and bundles. Explore additional flexibility with our add-on bundles to expand your audience reach.",
        },
        // {
        //   subtitle: "Who can use Mooyi?",
        //   subContent:
        //     "Different subscription plans are available on mooyi™, like the Starter, Business, and Pro plans, each offering different access levels and bundles. Explore additional flexibility with our add-on bundles to expand your audience reach.",
        // },
        // {
        //   subtitle: "How much does each response cost?",
        //   subContent:
        //     "Simply sign up for a free account, choose a subscription plan that fits your needs, and you're ready to start gathering insights.",
        // },
        // {
        //   subtitle: "Is there a demo available?",
        //   subContent: "You can request a demo to see how Mooyi works and how it can benefit your business.",
        // },
      ],
    },
    {
      id: 2,
      title: "How much does each response cost?",
      content: [
        {
          subtitle: "Is there a cost to using Mooyi?",
          subContent:
            "Different subscription plans are available on Mooyi, like the Pay as you Go, Starter, Business, and Pro plans, each offering different access levels and bundles. Explore additional flexibility with our add-on bundles to expand your audience reach.",
        },
        {
          subtitle: "How much does each response cost?",
          subContent:
            "Our subscription plans include a cost per response starting at $2. You are credited with bonus responses on subscribing to a plan. However, you can buy survey bundles if needed.",
        },
        {
          subtitle: "Can I purchase additional responses if needed?",
          subContent: "Absolutely! You can top up your survey bundles at any time.",
        },
        {
          subtitle: "Do unused responses roll over to the next period?",
          subContent:
            "No, unused responses do not carry over to the following subscription period. Nevertheless, there is a 7-day grace period during which you can still utilise these responses before the next payment.",
        },
      ],
    },
    {
      id: 3,
      title: "Can I purchase additional responses if needed?",
      content: [
        {
          subtitle: "How do I create a survey on Mooyi?",
          subContent:
            "Creating a survey is straightforward. Use our intuitive survey builder, select from pre-existing templates, or design your questions from scratch.",
        },
        {
          subtitle: "What are screening questions?",
          subContent:
            "Screening questions allow you to filter participants based on specific criteria, ensuring you only gather insights from the most relevant audience.",
        },
        {
          subtitle: "Can I choose whether to survey the Mooyi audience or my contacts?",
          subContent:
            "Yes. Depending on your research needs and objectives, you can survey our diverse audience or your contacts. It's all about allowing you to tailor your surveys for impact.",
        },
        {
          subtitle: "What counts as a response?",
          subContent:
            "A response is counted when all the required survey questions are completed and submitted by one individual.",
        },
        {
          subtitle: "Can I purchase additional responses if needed?",
          subContent: "Absolutely! You can top up your survey bundles at any time.",
        },
        {
          subtitle: "What kind of support does Mooyi offer?",
          subContent:
            "All paid subscription plans come with dedicated support from our in-house research, strategy, and analytics consultant team.",
        },
        {
          subtitle: "Can I get expert advice on survey design?",
          subContent:
            "Absolutely! Our team is here to assist you with survey design, question types, and audience targeting to ensure meaningful data collection.",
        },
      ],
    },
    {
      id: 4,
      title: "Do unused responses roll over to the next period?",
      content: [
        {
          subtitle: "How do I add contacts on Mooyi?",
          subContent:
            "You can add contacts by uploading a CSV file, entering their details manually, or integrating an API. The aim is to build a database of likely survey participants or feedback providers.",
        },
        {
          subtitle: "How many contacts can I add on Mooyi?",
          subContent:
            "The number varies based on your subscription plan. Choose the plan that aligns with your needs to manage your contacts effectively.",
        },
        {
          subtitle: "What are contact tags?",
          subContent:
            "Contact tags allow for easy organisation and targeting of specific segments within your contacts.",
        },
      ],
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const handleSetIndex = (idx: number) => {
    setIndex(idx);
  };

  const handleToggle = (id: number) => {
    setIndex(index === id ? 0 : id);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Get Started Today</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="w-[100%] mx-auto md:h-[100vh] pb-10 md:pb-0 bg-[#EFF3FF] flex overflow-hidden pt-16 md:pt-0 md:relative">
        <div>
          <img
            src={faqBackground}
            alt="background img"
            className="w-full object-cover h-full absolute top-0 hidden md:block"
          />
        </div>
        <div>
          <img
            src={faqBgMobile}
            alt="background img"
            className="w-full object-cover h-[400px] absolute top-0 z-0 md:hidden"
          />
        </div>
        <div className="w-full flex justify-center md:px-[5rem] px-4 z-10 tracking-tight">
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div className="md:w-[60%] ">
              <p className="text-primary text-center">PRICING</p>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5">
                Get fast and actionable insights from your target market or actual customers.
              </p>
            </div>
            <div className="md:flex items-center space-x-7 mt-7">
              {cardData?.map((el, i) => (
                <Card title={el.title} subtitle={el.subtitle} img={el.img} link={el.link} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:p-[5rem] px-5 py-[5rem] ">
        <div className=" w-full flex justify-center mt-4 md:mt-0">
          <div className="text-white md:w-full px-2 rounded-3xl overflow-hidden relative  md:h-[350px] h-[200px] w-full">
            <div className="absolute left-0 top-[-1rem] md:top-[1rem] w-[100%]">
              <img src={CTAs} alt="footer background" className="w-full h-[300px] md:h-[350px]" />
            </div>
            <div>
              <div className="absolute md:top-0 top-[-2rem] w-full pt-9 left-0 md:pt-12">
                <div className="flex justify-center w-full p-2 md:px-0">
                  <div className="md:flex items-center justify-between md:w-[65%] text-center md:text-left">
                    <div>
                      <p className="font-secondary md:text-[40px] text-[24px] md:pr-[10rem]">
                        Need a solution that fits your business needs?
                      </p>
                      <p className="md:text-[20px] text-[14px] mx-10 md:mx-0">
                        Let’s create a personalised plan tailored just for you.
                      </p>
                      <div className="pt-3 flex justify-center md:block">
                        <Link to={"mailto:support@enterscale.com"}>
                          <WhiteButton text={"Contact us"} css="text-black" />
                        </Link>
                      </div>
                    </div>
                    <div className="hidden md:flex">
                      <img src={contactDoc} alt="" className="w-[128px] h-[242px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex items-start md:space-x-5 nd:p-[4rem] px-5 py-[7rem]">
          <div className="border rounded-2xl p-8 space-y-5 w-[40%] hidden md:block">
            {faqData.map((item, i) => (
              <p
                key={i}
                className={`py-2 w-full hover:bg-hoverBlue px-5 rounded-lg text-[20px] font-[500] cursor-pointer transition-all duration-300 ease-in-out ${
                  index === item.id && "bg-primary text-white hover:bg-primary"
                }`}
                onClick={() => handleSetIndex(item.id)}
              >
                {item.title}
              </p>
            ))}
          </div>
          <div className="w-full md:px-10 space-y-2">
            {faqData.map((item, i) => {
              const { title, content, id } = item;
              return (
                <div
                  id={`${item.id}`}
                  key={i}
                  className={`border rounded-xl px-5 py-3 transition-all duration-300 cursor-pointer ${
                    index === id && "border-primary transition-colors"
                  }`}
                  onClick={() => handleToggle(id)}
                >
                  <div className={`flex justify-between items-center ${index === id && "text-primary"}`}>
                    <p className="text-[20px] font-[500]">{title}</p>
                    {index === id ? (
                      <p>
                        <IoIosArrowUp />
                      </p>
                    ) : (
                      <p>
                        <IoIosArrowDown />
                      </p>
                    )}
                  </div>
                  {index === id ? (
                    <div className="pt-5 space-y-4">
                      {content.map((item, j) => (
                        <div key={j} className="space-y-1">
                          <p className="font-medium text-[18px]">{item.subtitle}</p>
                          <p className="text-[15px]">{item.subContent}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
