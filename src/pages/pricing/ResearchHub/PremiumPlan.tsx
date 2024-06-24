import React, { useState } from "react";
import Group from "@/assets/images/pricing/Group.png";
import giftPricing from "@/assets/images/pricing/giftPricing.png";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import BlueButton from "@/components/Button/BlueButton";
import checker from "@/assets/images/pricing/check.png";
import Quotation from "./Quotation";
import ResearchTable from "./ResearchTable";
import Card from "../Card";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
import { HashLink } from "react-router-hash-link";

const cardData = [
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

type Tplan = {
  title: string;
  subtitle: string;
  tag?: string;
  responses: number;
  info: string;
  amount: number;
  featureTitle: string;
  features: string[];
  conversionRate: number;
  toggle: boolean;
};

const PlanCard = ({
  title,
  subtitle,
  tag,
  responses,
  info,
  amount,
  featureTitle,
  features,
  conversionRate,
  toggle,
}: Tplan) => {
  const [newresponses, setNewResponses] = useState<number>(responses);
  return (
    <div className="border rounded-2xl w-[411px] h-[45rem] p-3 shadow-md">
      <div className="bg-blue-100 p-5 rounded-t-xl h-[7rem]">
        <div className="flex justify-between">
          <p className="text-[20px] font-[600] text-primary">{title}</p>
          {tag !== "" || undefined ? (
            <div className="bg-white p-2 w-fit rounded flex items-center justify-center">
              <p className="text-primary  text-[12px] font-[600]">{tag}</p>
            </div>
          ) : null}
        </div>
        <p className="text-grey-600 md:text-[14px] text-[13px]">{subtitle}</p>
      </div>
      <div className="mt-5 px-5">
        <p className="md:text-[15px] text-[14px]">{info}</p>
        <div className="mt-3">
          <p className="text-[12px]">Responses</p>
          <div className="flex items-center mt-1">
            <div
              className={`border rounded-l-md h-[30px] border-r-0  p-2 flex items-center justify-center cursor-pointer  ${
                newresponses < 300 ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={() => setNewResponses(newresponses > 200 ? newresponses - 100 : newresponses)}
            >
              <HiOutlineMinus />
            </div>
            <div className="border p-2 flex items-center justify-center h-[30px] text-[12px]">{newresponses}</div>
            <div
              className="border rounded-r-md border-l-0 h-[30px]  p-2 flex items-center justify-center cursor-pointer"
              onClick={() => setNewResponses(newresponses + 100)}
            >
              <HiOutlinePlus />
            </div>
          </div>
        </div>
        {title === "Pro Plan" ? (
          <div>
            <p className="text-[38px] md:text-[40px] font-[600]">Custom</p>
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
          <Link to={title === "Pro Plan" ? "mailto:support@enterscale.com" : `${ROUTES.LOGIN}/register`}>
            <BlueButton text={title === "Pro Plan" ? "Contact us" : "Buy now"} type="button" css="w-full" buttonId={title === "Pro Plan" ? "rh_contact_us_2" : "rh_buy_now_1"} />
          </Link>
          <p className="mt-2 text-gray-500 md:text-[14px] text-[13px]">{`Additional responses would be charged at ${
            toggle ? `₦${((2 * conversionRate) as number).toLocaleString()}` : "$2"
          } per response for online surveys.`}</p>
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
                  <p className="text-[13px] w-[90%]">{el}</p>
                </div>
              ))
            : null}
        </div>
        <HashLink smooth to="/pricing/research-hub/#explore">
          <div className="flex items-center space-x-3 text-primary underline text-[12px] mt-5">
            <p>explore all features</p>{" "}
          </div>
        </HashLink>
      </div>
    </div>
  );
};

type TPremiumPlan = {
  conversionRate: number;
  toggleValue: boolean;
};

const PremiumPlan: React.FC<TPremiumPlan> = ({ conversionRate, toggleValue }) => {
  const [values, setValues] = useState(0);
  // const [businessResp, setBusinessRes] = useState<number>(500);
  // const [proResp, setProRes] = useState<number>(5000);

  const tabs = [
    { name: "Business plan", value: 0 },
    { name: "Pro plan", value: 1 },
  ];

  const subPlans = [
    {
      title: "Business Plan",
      subtitle: "Ideal for scale-ups and e-commerce",
      tag: "Popular",
      responses: 200,
      info: "Send up to 200 online surveys every month",
      amount: 500,
      featureTitle: "Key plan features",
      features: [
        "Access to online survey builder and audience panel.",
        "Real-time access to survey results with dynamic charts.",
        "Showcase customer reviews, feedback, and easily address concerns online.",
        "Generate QR code for easy review collection.",
      ],
    },
    {
      title: "Pro Plan",
      subtitle: "Ideal for consumer brands, retailers, agencies, and enterprises",
      tag: "",
      responses: 1000,
      info: "Send up to 1,000 online surveys every month",
      amount: 5000,
      featureTitle: "Everything in the Business plan plus, ",
      features: [
        "Access to 100 field interviews (voice/video responses)",
        "Access to 100 field interviews (text responses)",
        "250 brand tacking surveys, gather feedback from customers and track changes over time.",
      ],
    },
  ];

  return (
    <div>
      <div className="bg-white md:px-[5rem] md:py-[5rem] px-5 py-[1rem]">
        <div className="flex items-center border-b justify-center space-x-4 mt-5 md:hidden">
          {tabs.map((el, i) => (
            <div
              key={i}
              className={`border-b ${
                values === el.value ? "border-primary border-b-[2px] font-[500]" : "text-gray-500"
              }`}
              onClick={() => setValues(el.value)}
            >
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <div className="justify-center space-x-10 items-start hidden md:flex">
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
        <div className="justify-center space-x-10 items-start mt-10 flex md:hidden">
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
          ) : (
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
          )}
        </div>
      </div>
      <div className="bg-[#F0F5FF] p-5 pb-[7rem] flex flex-col items-center justify-center ">
        <div className="mt-10">
          <p className="font-secondary text-[40px] text-center">Get even more insights. </p>
          <p className="text-[20px] text-center">
            {" "}
            Get a custom quote for your research using our pool of qualified audience.
          </p>
        </div>
        <div className="mt-10" id="quotation">
          <Quotation />
        </div>
      </div>
      <div className="my-[5rem] bg-white">
        <p className="font-secondary md:text-[40px] text-[24px] text-center" id="explore">
          Explore all our features
        </p>
        <div className="flex justify-center">
          <p className="text-[16px] md:text-[20px] text-center md:w-[35%] px-3">
            Discover the benefits of each pricing tier and choose the one that best fit your business.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="md:w-[80%] px-4 md:pc-0 mt-10">
            <ResearchTable toggleValue={values} />
          </div>
        </div>
      </div>
      <div className="md:flex justify-center hidden py-[8rem] ">
        <div className="bg-[#F8FAFF] w-[90%] flex items-center justify-between md:px-[5rem] rounded-2xl p-5 py-[5rem]">
          <div>
            <p className="font-secondary md:text-[36px] text-[24px] leading-tight">
              Scale your business with our affordable pricing.
            </p>
            <p className="text-[18px] w-[80%]">Explore more options that suit your business needs.</p>
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

export default PremiumPlan;
