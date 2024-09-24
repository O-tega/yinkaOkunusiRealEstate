import PrimaryButton from "@/components/Button/PrimaryButton";
import React from "react";
import { GrFormCheckmark } from "react-icons/gr";
import Group from "@/assets/images/pricing/Group.png";
import giftPricing from "@/assets/images/pricing/giftPricing.png";
import Card from "../Card";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

type TPremiumPlan = {
  conversionRate: number;
  toggleValue: boolean;
};

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

const PayAsYouGo: React.FC<TPremiumPlan> = ({ conversionRate, toggleValue }) => {
  const data = [
    `${toggleValue ? `₦${((2 * conversionRate) as number).toLocaleString()}` : "$2"} per response from individuals.`,
    "Real-time access to survey results with dynamic charts.",
    `${
      toggleValue ? `₦${((4 * conversionRate) as number).toLocaleString()}` : "$4"
    } per response from business owners.`,
    "Top up survey responses at any time to gather more insights.",
    "Showcase customer reviews, feedback, and easily address concerns online.",
    "Access to online survey builder and audience panel.",
    "Generate QR code for easy review collection.",
  ];

  return (
    <div>
      <div className="w-[80%] flex md:flex-row flex-col items-center mx-auto gap-[2em] mt-[4em]">
        <div className="md:w-[30%] w-[100%] border-[1px] rounded-lg p-4 space-y-4 md:hidden">
          <div className="bg-[#EBF1FF] h-[100px] rounded-md w-[100%] p-4 flex flex-col justify-center">
            <p className="text-lg text-primary font-semibold">Starter plan</p>
            <p className="text-sm text-gray-600">For anyone</p>
          </div>

          <p className="text-sm text-gray-500">Get up to 100 free emails every month </p>

          <p className="text-[37px] md:text-[40px] font-semibold py-3">Free</p>

          <Link to={`${ROUTES.LOGIN}/register`}>
            <PrimaryButton text="Try for free" type="button" variant={"filled"} buttonId="rh_try_for_free_4" />
          </Link>

          <p className="text-xs text-gray-600">
            {`Note that we charge ${
              toggleValue ? `₦${((2 * conversionRate) as number).toLocaleString()}` : "$2"
            } per response from individuals and ${
              toggleValue ? `₦${((4 * conversionRate) as number).toLocaleString()}` : "$4"
            } per response from Business owners. For more
          enquiry, `}
            <a href="" className="text-primary underline underline-offset-1">
              contact us.
            </a>{" "}
          </p>
        </div>

        <div className="md:w-[70%] w-[100%] space-y-4">
          <p className="md:text-4xl text-2xl font-secondary md:w-[80%] w-[100%]">
            Do more with our pay-as-you-go starter plan
          </p>
          <p className="font-secondary">Key plan features</p>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
            {data.map((el) => {
              return (
                <div key={el} className="text-sm text-gray-500 w-[90%] flex items-start space-x-4">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#EBF1FF] flex items-center justify-center mt-1">
                    {" "}
                    <GrFormCheckmark className="text-primary" />
                  </div>

                  <p> {el}</p>
                </div>
              );
            })}
          </div>

          <p className="font-secondary pt-6">Get access to more features on our Premium plans.</p>
        </div>

        <div className="md:w-[30%] w-[100%] border-[1px] rounded-lg p-4 space-y-4 hidden md:block">
          <div className="bg-[#EBF1FF] h-[100px] rounded-md w-[100%] p-4 flex flex-col justify-center">
            <p className="text-lg text-primary font-semibold">Starter plan</p>
            <p className="text-sm text-gray-600">For anyone</p>
          </div>

          <p className="text-sm text-gray-500">Get up to 100 free emails every month </p>

          <p className="text-[37px] md:text-[40px] font-semibold py-3">Free</p>

          <Link to={`${ROUTES.LOGIN}/register`}>
            <PrimaryButton text="Try for free" type="button" variant={"filled"} buttonId="rh_try_for_free_4" />
          </Link>

          <p className="text-xs text-gray-600">
            {`Note that we charge ${
              toggleValue ? `₦${((2 * conversionRate) as number).toLocaleString()}` : "$2"
            } per response from individuals and ${
              toggleValue ? `₦${((4 * conversionRate) as number).toLocaleString()}` : "$4"
            } per response from Business owners. For more
          enquiry, `}
            <a href="" className="text-primary underline underline-offset-1">
              contact us.
            </a>{" "}
          </p>
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

export default PayAsYouGo;
