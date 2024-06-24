import React, { useEffect, useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Group from "@/assets/images/pricing/Group.png";
import giftPricing from "@/assets/images/pricing/giftPricing.png";
import quickAction from "@/assets/images/pricing/quickAction.png";
import uncoverInsight from "@/assets/images/pricing/researchHub.png";
import { Helmet } from "react-helmet";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Card from "./Card";
import Modal from "@/components/Modal";
import BlueButton from "@/components/Button/BlueButton";
import { HashLink } from "react-router-hash-link";

const Home: React.FC = () => {
  const cardData = [
    {
      title: "Research Hub",
      subtitle: "Streamline your research with our all-in-one platform.",
      img: uncoverInsight,
      link: "/pricing/research-hub",
    },
    {
      title: "Engagement Hub",
      subtitle: "Drive your business success with our comprehensive customer engagement.",
      img: Group,
      link: "/pricing/engagement-hub",
    },
    {
      title: "Custom Plan",
      subtitle: "Create a customised plan that fits your business needs.",
      img: giftPricing,
      link: "/pricing/custom",
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
      ],
    },
    {
      id: 2,
      title: "How much does each response cost?",
      content: [
        {
          subtitle: "",
          subContent:
            "Our subscription plans include a cost per response starting at $2. You are credited with bonus responses on subscribing to a plan. However, you can buy survey bundles if needed.",
        },
      ],
    },
    {
      id: 3,
      title: "Can I purchase additional responses if needed?",
      content: [
        {
          subtitle: "",
          subContent: "Absolutely! You can top up your survey bundles at any time.",
        },
      ],
    },
    {
      id: 4,
      title: "Do unused responses roll over to the next period?",
      content: [
        {
          subtitle: "",
          subContent:
            "No, unused responses do not carry over to the following subscription period. Nevertheless, there is a 7-day grace period during which you can still utilise these responses before the next payment.",
        },
      ],
    },
  ];

  const [index, setIndex] = useState<number>(1);
  const [openModal, setOpenModal] = useState(false);
  const handleSetIndex = (idx: number) => {
    setIndex(idx);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true);
    }, 2000);
  }, []);

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
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5 md:pt-[3rem]">
                Get fast and actionable insights from your target market or actual customers.
              </p>
            </div>
            <div className="md:flex items-center space-x-7 md:mt-[5rem] mt-7">
              {cardData?.map((el, i) => (
                <Card title={el.title} subtitle={el.subtitle} img={el.img} link={el.link} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white md:px-[5rem] md:py-[2rem] px-5  ">
        <div className="font-secondary pt-[1rem] md:text-[40px] text-[24px] text-center">
          <p>Frequently asked questions</p>
        </div>
        <div className="md:flex items-start md:space-x-5 px-5 md:mt-16 my-5">
          <div className="border rounded-2xl p-8 space-y-5 bg-[#FAFAFA] w-[40%] hidden md:block">
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
                    <p className="md:text-[20px] text-[16px] font-[500]">{title}</p>
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
                          <p className="md:text-[15px] text-[12px]">{item.subContent}</p>
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
      {openModal && (
        <Modal title="" onClose={() => setOpenModal(false)}>
          <div className="md:w-[1024px] w-full  flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between md:py-[2rem] md:px-[5rem]">
              <div className="md:w-[55%]">
                <p className="font-secondary md:text-[36px] text-[24px]  text-center md:text-left leading-tight">
                  Create a survey in minutes, get results in hours.
                </p>
                <p className="md:text-[18px] text-[14px] mt-3 md:mt-5  text-center md:text-left">
                  Get started with our intuitive survey builder, professionally crafted survey templates and audience
                  panel for your convenience.
                </p>
                <div className="mt-5 md:block flex justify-center">
                  <HashLink smooth to="/pricing/research-hub/#quotation">
                    <BlueButton text="Start now" buttonId="modal_start_now" />
                  </HashLink>
                </div>
              </div>
              <div className="md:w-[354px] w-[222px] mt-7 md:mt-0 ">
                <img src={quickAction} alt="" />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
