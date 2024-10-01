import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Plans from "./Plans";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "@/service/rates";
import ToggleButton from "@/components/Button/ToogleButton";
import callIcon2 from "@/assets/images/icons/callIcon2.png";
import surveyIco from "@/assets/images/icons/surveyIcon2.png";
import emailIco from "@/assets/images/icons/EmailIcon2.png";
import sharedProjects from "@/assets/images/landing/sharedProjects.png";
import collaborativeOic from "@/assets/images/landing/collaborativeOic.png";
import permission from "@/assets/images/landing/permission.png";
// import { Link } from "react-router-dom";
// import { IoChevronBackOutline } from "react-icons/io5";
// import MobileDropNav from "../MobileDropNav";
import CardList from "../PriceCards";
import AdditionalPriceTag from "../AdditionalPricsCard";

const EngagementHub: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [values, setValues] = useState(0);

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const conversion = rates?.data?.data[0].currencyRates;

  const getUserRateByCode = (codeName) => {
    const currency = conversion?.find((rate) => rate.code === codeName);
    return currency ? currency.userRate : null;
  };

  const conversionRate = getUserRateByCode("USD-NGN");

  console.log(conversionRate);

  const tabs = [
    { name: "Free", value: 0 },
    { name: "SME", value: 1 },
    { name: "Business", value: 2 },
    { name: "Pro", value: 3 },
  ];

  const seamlessData = [
    {
      img: sharedProjects,
      title: "Shared Project Spaces:",
      descr: "Collaborate seamlessly with your team in shared workspaces, making project management more efficient.",
    },
    {
      img: collaborativeOic,
      title: "Collaborative Survey Editing:",
      descr: "Multiple team members can edit surveys simultaneously for faster turnaround.",
    },
    {
      img: permission,
      title: "Role-Based Permissions",
      descr: "Control who has access to what with role-based permissions, ensuring secure and streamlined teamwork.",
    },
  ];

  const priceCardInfo = [
    {
      icon: emailIco,
      action: "sends",
      description: "Emails and SMS units are prices at",
      bill: `${toggleValue ? `₦${0.5 * conversionRate}` : "$0.5"} per 100 sends.`,
      bgcolor: "bg-[#FFFBEB]",
      borderColor: "border-[#D97706]",
    },
    {
      icon: surveyIco,
      action: "Responses",
      description: "Survey responses are priced at",
      bill: `${toggleValue ? `₦${2 * conversionRate}` : "$2"} per 100 sends.`,
      bgcolor: "bg-[#EBF1FF]",
      borderColor: "border-[#2D28FF]",
    },
    {
      icon: callIcon2,
      action: "Rewards",
      description: "Reward your survey participants from",
      bill: `${toggleValue ? `₦${10 * conversionRate}` : "$10"} for 10,000 MC..`,
      bgcolor: "bg-[#F0FDF4]",
      borderColor: "border-[#16A34A]",
    },
    {
      icon: callIcon2,
      action: "Collaboration tools",
      description: "Unlimited workspaces for teams",
      bill: `are priced at ${toggleValue ? `₦${0.5 * conversionRate}` : "$0.5"}`,
      bgcolor: "bg-[#FFFBEB]",
      borderColor: "border-[#D97706]",
    },
  ];

  const AdditionalPrice = [
    {
      type: "Demographic targeting",
      amount: `${toggleValue ? `₦${0.5 * conversionRate}` : "$2"}`,
    },
    {
      type: "Detailed targeting",
      amount: `${toggleValue ? `₦${2 * conversionRate}` : "$4"}`,
    },
    {
      type: "Field Interviews",
      amount: `${toggleValue ? `₦${10 * conversionRate}` : "$10"} `,
    },
    {
      type: "Brand tracking",
      amount: `${toggleValue ? `₦${0.5 * conversionRate}` : "$1000"}`,
    },
  ];
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[350px] md:pb-0 bg-[#EFF3FF] overflow-hidden pt-16 md:pt-0 relative">
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
        <div className="w-full flex justify-center md:px-[5rem] px-4 z-10 tracking-tight relative">
          {/* <div className="absolute top-[3rem] left-[5rem] hidden md:block">
            <Link to="/pricing">
              <div className="flex items-center space-x-3 text-primary underline">
                <span>
                  <IoChevronBackOutline />
                </span>{" "}
                <p>Back to plans</p>{" "}
              </div>
            </Link>
          </div> */}
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div>
              <div className="flex justify-center">
                <p className="font-secondary md:text-[40px] text-center text-[20px] md:leading-[3rem] tracking-tight md:w-[55%]">
                  Choose the perfect plan for your business, and pay only for what you use.
                </p>
              </div>

              {/* <div className="flex justify-center">
                <p className="text-[16px] md:text-[20px] text-center px-3 mt-3">
                  Engage your customers with our robust bulk SMS, email, and robocall solution.
                </p>
              </div> */}
              <div className="pt-5 flex w-full justify-center items-center space-x-3">
                <p className={`${!toggleValue && "font-bold"}`}>USD</p>
                <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
                <p className={`${toggleValue && "font-bold"}`}>NGN</p>
              </div>
              {/* <div className="flex justify-center">
                <div className="relative md:w-[50%]">
                  <MobileDropNav />
                </div>
              </div> */}
            </div>
            <div className="md:flex items-center space-x-7 mt-7"></div>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
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
        </div>
      </div>
      <div>
        <Plans conversionRate={conversionRate} values={values} toggleValue={toggleValue} />
      </div>
      <div className="px-[10rem] py-[5rem]">
        <p className="text-[40px] font-[500] text-center">
          Free users get 100 free emails on completing their profiles. Additional credits are available for purchase as
          stated
        </p>
        <div className="grid grid-cols-2 gap-8 pt-10">
          {priceCardInfo.map((el, i) => (
            <CardList
              key={i}
              icon={el.icon}
              description={el.description}
              priceTag={el.bill}
              action={el.action}
              bgcolor={el.bgcolor}
              borderColor={el.borderColor}
            />
          ))}
        </div>
      </div>
      <div className=" mx-[10rem] bg-blue-800 rounded-[8px] p-5 flex flex-col justify-center">
        <p className="text-[40px] font-[500] text-white">Additional pricing information for research projects.</p>
        <div className="flex items-center space-x-4 pt-5">
          {AdditionalPrice.map((el, i) => (
            <AdditionalPriceTag key={i} type={el.type} amount={el.amount} />
          ))}
        </div>
      </div>
      <div className="bg-[#F5F8FF] p-[5rem] mt-[5rem]">
        <p className="text-center text-[40px] font-[500]">Upgrade for Seamless Teamwork</p>
        <div className="flex justify-center">
          <p className="text-center text-[20px] w-[40%]">
            Boost productivity with enhanced collaboration features—available with our premium plans.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-7 mt-14">
          {seamlessData.map((el, i) => (
            <div key={i} className="grid grid-cols-2 items-center space-x-10 ">
              <div className="flex w-full justify-end">
                <img src={el.img} alt="" className="w-[472px] " />
              </div>
              <div className="w-[60%]">
                <p className="text-[24px] font-[600]">{el.title}</p>
                <p className="text-[20px]">{el.descr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementHub;
