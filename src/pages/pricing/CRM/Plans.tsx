import React from "react";
import uncoverInsight from "@/assets/images/pricing/researchHub.png";
import giftPricing from "@/assets/images/pricing/giftPricing.png";
import customerHeadphone from "@/assets/images/pricing/customerHeadphone.png";
import checker from "@/assets/images/pricing/check.png";
import customGroups from "@/assets/images/pricing/customGroups.png";
import Card from "../Card";
import Tables from "./Tables";
import BlueButton from "@/components/Button/BlueButton";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
import { HashLink } from "react-router-hash-link";

const cardData = [
  {
    title: "Research Hub",
    subtitle: "Streamline your research with our all-in-one platform.",
    img: uncoverInsight,
    link: "/pricing/research-hub",
  },
  {
    title: "Custom Plan",
    subtitle: "Create a customised plan that fits your business needs.",
    img: giftPricing,
    link: "/pricing/custom",
  },
];

type Tplan = {
  title: string;
  subtitle: string;
  tag?: string;
  responses: string;
  info: string;
  amount: number;
  featureTitle: string;
  features: string[];
  conversionRate: number;
  toggle: boolean;
};

const PlanCard = ({ title, subtitle, tag, info, amount, featureTitle, features, conversionRate, toggle }: Tplan) => {
  return (
    <div className="border rounded-2xl w-[411px] h-[55rem] p-3">
      <div className="bg-blue-100 p-5 rounded-t-xl h-[7rem]">
        <div className="flex justify-between">
          <p className="text-[20px] font-[600] text-primary">{title}</p>
          {tag !== "" || undefined ? (
            <div className="bg-white p-2 w-fit rounded flex items-center justify-center">
              <p className="text-primary  text-[12px] font-[600]">{tag}</p>
            </div>
          ) : null}
        </div>
        <p className="text-grey-600 md:text-[14px] text-[13px] font-medium">{subtitle}</p>
      </div>
      <div className="mt-5 px-5">
        <p className="md:text-[15px] text-[14px] font-medium">{info}</p>
        {title === "Pro Plan" ? (
          <div>
            <p className="text-[38px] md:text-[40px] font-[600]"> Custom </p>
          </div>
        ) : (
          <div className="flex items-center space-x-3 mt-3">
            <p className="text-[38px] md:text-[40px] font-[600]">
              {toggle ? `₦${((amount * conversionRate) as number).toLocaleString()}` : `$${amount.toLocaleString()}`}
            </p>
            <p className="font-[600] text-gray-500 ">Per month</p>
          </div>
        )}
        <div className="mt-5">
          <Link to={title === "Pro Plan" ? "mailto:support@enterscale.com" : `#`}>
            <BlueButton
              text={title === "Pro Plan" ? "Contact us" : "Buy now"}
              type="button"
              css="w-full"
              buttonId={
                title === "Pro Plan" ? "eh_contact_us_3" : title === "Business Plan" ? "eh_buy_now_2" : "eh_buy_now_1"
              }
            />
          </Link>
        </div>
        <div className="my-5">
          <hr />
        </div>
        <div>
          <p className="font-secondary">{featureTitle}</p>
          {features !== undefined
            ? features.map((el: string, i: number) => (
                <div className="flex items-start space-x-3 mt-3" key={i}>
                  <div className="mt-1 w-[20px] h-[20px]">
                    <img src={checker} alt="" />
                  </div>
                  <p className="text-[13px] w-[90%] font-medium">{el}</p>
                </div>
              ))
            : null}
        </div>
        <HashLink smooth to="/pricing/engagement-hub/#explore">
          <div className="flex items-center space-x-3 text-primary underline text-[12px] mt-5">
            <p>explore all features</p>{" "}
          </div>
        </HashLink>
      </div>
    </div>
  );
};

type TPlans = {
  conversionRate: number;
  values: number;
  toggleValue: boolean;
};

const Plans: React.FC<TPlans> = ({ conversionRate, values, toggleValue }) => {
  const subPlans = [
    {
      title: "Starter Plan",
      subtitle: "Ideal for SMEs",
      tag: "",
      responses: "200",
      info: "Manage up to 1,000 contacts every month",
      amount: 25,
      featureTitle: "Key plan features",
      features: [
        "Access to 1,000 customer insight invites, with Customer profiles, Net Promoter Score (NPS) and Customer Satisfaction (CSAT) templates.",
        "Access to multi-messaging channels with 8,000 emails, 4,000 SMS and 100 call minutes.",
        "Access to online survey builder and audience panel.",
        "Real-time access to survey results with dynamic charts.",
        "Showcase customer reviews, feedback, and easily address concerns online.",
        "Generate QR code for easy review collection.",
        "Single user access",
      ],
    },
    {
      title: "Business Plan",
      subtitle: "Ideal for scale-ups and e-commerce",
      tag: "Popular",
      responses: "200",
      info: "Manage up to 20,000 contacts every month",
      amount: 250,
      featureTitle: "Key plan features",
      features: [
        "Access to 10,000 customer insight invites, with Customer profiles, Net Promoter Score (NPS) and Customer Satisfaction (CSAT) templates.",
        "Access to multi-messaging channels with 80,000 emails, 40,000 SMS and 1,000 call minutes.",
        "Access to online survey builder and audience panel.",
        "Real-time access to survey results with dynamic charts.",
        "Showcase customer reviews, feedback, and easily address concerns online.",
        "Generate QR code for easy review collection.",
        "Team collaboration (up to 3 workspaces and 5 members each).",
        "Access to campaign and research support.",
      ],
    },
    {
      title: "Pro Plan",
      subtitle: "Ideal for consumer brands, retailers, agencies, and enterprises",
      tag: "",
      responses: "1000",
      info: "Manage up to 200,000 contacts every month",
      amount: 2500,
      featureTitle: "Everything in the Business plan plus, ",
      features: [
        "Access to 100,000 customer insight invites, with Customer profiles, Net Promoter Score (NPS) and Customer Satisfaction (CSAT) templates.",
        "Access to multi-messaging channels with 800,000 emails, 400,000 SMS and 10,000 call minutes.",
        "Access to online survey builder and audience panel.",
        "Real-time access to survey results with dynamic charts.",
        "Showcase customer reviews, feedback, and easily address concerns online.",
        "Generate QR code for easy review collection.",
        "Unlimited workspaces and team members.",
        "Access to campaign and research support.",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-white md:px-[5rem] md:py-[2rem] px-5 py-[1rem]" id="plans">
        <div className="justify-center space-x-10 items-start h-fit mt-10 hidden md:flex">
          {subPlans.map((el, i) => (
            <PlanCard
              title={el.title}
              subtitle={el.subtitle}
              tag={el.tag}
              info={el.info}
              featureTitle={el.featureTitle}
              features={el.features}
              amount={el.amount}
              responses={el.responses}
              conversionRate={conversionRate}
              toggle={toggleValue}
              key={i}
            />
          ))}
        </div>
        <div className="justify-center space-x-10 items-start mt-10 h-fit flex md:hidden">
          {values === 0 ? (
            <PlanCard
              title={subPlans[0].title}
              subtitle={subPlans[0].subtitle}
              tag={subPlans[0].tag}
              info={subPlans[0].info}
              featureTitle={subPlans[0].featureTitle}
              features={subPlans[0].features}
              amount={subPlans[0].amount}
              responses={subPlans[0].responses}
              conversionRate={conversionRate}
              toggle={toggleValue}
            />
          ) : values === 1 ? (
            <PlanCard
              title={subPlans[1].title}
              subtitle={subPlans[1].subtitle}
              tag={subPlans[1].tag}
              info={subPlans[1].info}
              featureTitle={subPlans[1].featureTitle}
              features={subPlans[1].features}
              amount={subPlans[1].amount}
              responses={subPlans[1].responses}
              conversionRate={conversionRate}
              toggle={toggleValue}
            />
          ) : (
            <PlanCard
              title={subPlans[2].title}
              subtitle={subPlans[2].subtitle}
              tag={subPlans[2].tag}
              info={subPlans[2].info}
              featureTitle={subPlans[2].featureTitle}
              features={subPlans[2].features}
              amount={subPlans[2].amount}
              responses={subPlans[2].responses}
              conversionRate={conversionRate}
              toggle={toggleValue}
            />
          )}
        </div>
      </div>
      <div className="bg-[#F0F5FF] flex items-center md:justify-between justify-center px-[5rem] py-[4rem] md:py-[7rem]">
        <div className="md:flex items-center md:px-[5rem]">
          <div className="">
            <p className="font-secondary md:text-[40px] text-[24px] md:w-[80%] text-center md:text-left leading-tight">
              Efficiently manage contacts and customer data.
            </p>
            <p className="md:text-[20px] text-[14px] mt-3 md:mt-5 md:w-[80%] text-center md:text-left">
              Store and handle contacts up to your plan's limit, categorise customers with tags, and create segments
              with customer attributes.
            </p>
            <div className="mt-5 md:block flex justify-center">
              <Link to={ROUTES.LOGIN}>
                <BlueButton text="Start now" buttonId="eh_start_now_4" />
              </Link>
            </div>
          </div>
          <div className="md:w-[708px] w-[333px] mt-7 md:mt-0">
            <img src={customGroups} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-[5rem] bg-white">
        <p className="font-secondary md:text-[40px] text-[24px] text-center" id="explore">
          Explore all our features
        </p>
        <div className="flex justify-center">
          <p className="text-[16px] md:text-[20px] text-center md:w-[35%] px-3">
            Discover the benefits of each pricing tier and choose the one that best fit your business.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full px-4 mt-2 flex items-center justify-center">
            <Tables toggleValue={values} />
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center md:px-[5rem] px-[2rem] py-[7rem]">
        <div className="flex items-center md:justify-between flex-col md:flex-row justify-center md:w-[80%]">
          <div className="md:w-[354px] w-[222px] mt-7 md:mt-0 hidden md:block">
            <img src={customerHeadphone} alt="" />
          </div>
          <div className="md:w-[50%]">
            <p className="font-secondary md:text-[36px] text-[24px] text-center md:text-left leading-tight">
              Engage customers across multiple channels.
            </p>
            <p className="md:text-[18px] text-[14px] mt-3 md:mt-5 md:w-[80%] text-center md:text-left">
              Reach customers directly through SMS, send personalised email campaigns, and conduct voice campaigns with
              allocated minutes.
            </p>
            <div className="mt-5 md:block flex justify-center">
              <HashLink smooth to="/pricing/engagement-hub/#plans">
                <BlueButton text="Start now" buttonId="eh_start_now_5" />
              </HashLink>
            </div>
          </div>
          <div className="md:w-[354px] w-[222px] mt-7 md:mt-0 md:hidden">
            <img src={customerHeadphone} alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex justify-center hidden py-[8rem] ">
        <div className="bg-[#F8FAFF] w-[90%] flex items-center justify-between md:px-[5rem] rounded-2xl p-5 py-[5rem]">
          <div>
            <p className="font-secondary md:text-[36px] text-[24px] leading-tight">
              Scale your business with our affordable pricing.
            </p>
            <p className="text-[18px] w-[80%] font-medium">Explore more options that suit your business needs.</p>
          </div>
          <div className="md:flex items-center space-x-7 mt-7">
            {cardData?.map((el, i) => (
              <Card title={el.title} subtitle={el.subtitle} img={el.img} link={el.link} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
