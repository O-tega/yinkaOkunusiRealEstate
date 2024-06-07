import React, { useState } from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import ToggleButton from "@/components/Button/ToogleButton";
import { IoClose } from "react-icons/io5";
import BlueButton from "@/components/Button/BlueButton";
import { useQuery } from "@tanstack/react-query";
import { getRates } from "@/service/rates";
import Modal from "@/components/Modal";
import Group from "@/assets/images/pricing/Group.png";
import uncoverInsight from "@/assets/images/pricing/researchHub.png";
import Card from "../Card";
import EmptyState from "@/components/EmptyState";
import emptyState from "@/assets/images/pricing/emptyEstimate.png";
import MobileDropNav from "../MobileDropNav";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
import { IoChevronBackOutline } from "react-icons/io5";

const cardData = [
  {
    title: "Research Hub",
    subtitle: "Streamline your research with our all-in-one platform.",
    img: uncoverInsight,
    link: "/pricing/research-hub",
  },
  {
    title: "Engagement Hub",
    subtitle: "Drive success with our comprehensive CRM and messaging features.",
    img: Group,
    link: "/pricing/engagement-hub",
  },
];

const Custom: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);
  const [selectResearch, setSelectResearch] = useState<number | null>(null);
  const [selectCrm, setSelectCrm] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const handleToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  const rates = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  const conversionRate = rates?.data?.data[0].currencyRates[7].userRate;

  const handleSelectResearch = (id: number) => {
    setSelectResearch(selectResearch === id ? null : id);
  };
  const handleSelectCrm = (id: number) => {
    setSelectCrm(selectCrm === id ? null : id);
  };

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

  const amtConversion = (amount: number) => {
    return toggleValue ? `₦${((amount * conversionRate) as number).toLocaleString()}` : `$${amount.toLocaleString()}`;
  };
  const researchData = [
    { plan: "Business Plan", cost: 500, package: ["200 online survey responses"] },
    {
      plan: "Pro Plan",
      cost: 5000,
      package: [
        "1,000 online survey responses",
        "250 Brand tracking responses",
        "200 field interviews responses (Voice and text)",
      ],
    },
  ];

  const crmData = [
    {
      plan: "Starter Plan",
      cost: 25,
    },
    {
      plan: "Business Plan",
      cost: 250,
    },
    {
      plan: "Pro Plan",
      cost: 2500,
    },
  ];

  const crmSelect =
    selectCrm === 0 ? subPlans[0] : selectCrm === 1 ? subPlans[1] : selectCrm === 2 ? subPlans[2] : null;
  const researchSelect = selectResearch === 0 ? researchData[0] : selectResearch === 1 ? researchData[1] : null;

  const researchAmount = researchSelect !== null ? researchSelect.cost : 0;
  const crmAmount = crmSelect !== null ? crmSelect.amount : 0;

  const totalAmount = researchAmount + crmAmount;
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[260px] pb-10 md:pb-0 bg-[#EFF3FF] overflow-hidden pt-10 md:pt-0 relative">
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
          <div className="absolute top-[5rem] left-[5rem]">
            <Link to="/pricing">
              <div className="flex items-center space-x-3 text-primary underline">
                <span>
                  <IoChevronBackOutline />
                </span>{" "}
                <p>Back to plans</p>{" "}
              </div>
            </Link>
          </div>
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-3 hidden md:block">
                Custom Plan
              </p>
              <div className="relative md:hidden">
                <MobileDropNav />
              </div>
              <p className=" md:text-[20px] pt-2 text-[16px] text-center">
                Create a customised plan tailored to your business needs.
              </p>
            </div>
            <div className="md:flex items-center space-x-7 mt-5"></div>
          </div>
        </div>
        <div>
          <div className=" flex w-full justify-center items-center space-x-3">
            <p className={`${!toggleValue && "font-bold"}`}>USD</p>
            <ToggleButton toggleValue={toggleValue} onChange={handleToggleChange} />
            <p className={`${toggleValue && "font-bold"}`}>NGN</p>
          </div>
        </div>
      </div>
      <div className="bg-white md:px-10">
        <div className="flex items-start px-5 my-5 space-x-5">
          <div className="md:w-[70%] w-full">
            <div className="border rounded-2xl h-[500px] p-5">
              <p className="font-[600]">Research hub</p>
              <div className="space-y-5 mt-5">
                {researchData.map((el, i) => (
                  <div
                    key={i}
                    className={`border rounded-2xl p-5 space-y-2 transition-all duration-150 cursor-pointer ${
                      selectResearch === i ? "border-primary" : ""
                    }`}
                    onClick={() => handleSelectResearch(i)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-[600] text-[16px]">{el.plan}</p>
                        {el.plan === "Pro Plan" ? (
                          <p className="font-[600] text-gray-500"> Contact us</p>
                        ) : (
                          <p className="font-[600]">
                            {amtConversion(el.cost)}
                            <span className="text-gray-500">/month</span>
                          </p>
                        )}
                      </div>
                      <div
                        className={`rounded-full p-1 flex items-center justify-center border w-[20px] h-[20px] ${
                          selectResearch === i ? "border-primary" : ""
                        } `}
                      >
                        {selectResearch === i ? (
                          <div className={`rounded-full border p-1 bg-primary`}></div>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                    <hr />
                    <p className="text-gray-500">Includes</p>
                    <ul className="list-disc pl-7 text-gray-500 space-y-1">
                      {el.package.map((el, i) => (
                        <li key={i} className="text-[14px]">
                          {el}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="border rounded-2xl md:h-[200px] w-full p-5 mt-5">
              <p className="font-[600]">Engagement Hub</p>
              <div className="md:space-x-5 space-y-5 md:space-y-0 mt-5 md:flex items-center">
                {crmData.map((el, i) => (
                  <div
                    className={`border rounded-2xl w-full flex justify-between p-5 cursor-pointer ${
                      selectCrm === i ? "border-primary" : ""
                    }`}
                    key={i}
                    onClick={() => handleSelectCrm(i)}
                  >
                    <div>
                      <p className="font-[600] text-[16px]">{el.plan}</p>
                      {el.plan === "Pro Plan" ? (
                        <p className="font-[600] text-gray-500"> Contact us</p>
                      ) : (
                        <p className="font-[600]">
                          {amtConversion(el.cost)}
                          <span className="text-gray-500">/month</span>
                        </p>
                      )}
                    </div>
                    <div
                      className={`rounded-full p-1 flex items-center justify-center border w-[20px] h-[20px] ${
                        selectCrm === i ? "border-primary" : ""
                      } `}
                    >
                      {selectCrm === i ? <div className={`rounded-full border p-1 bg-primary`}></div> : <div></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`border rounded-2xl h-[46rem] w-[30%] p-5 hidden md:inline ${
              selectCrm === null && selectResearch === null ? "h-[500px] overflow-y-auto" : "h-full overflow-y-auto"
            }`}
          >
            <p className="font-[600]">Estimate</p>
            {selectResearch !== null ? (
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="font-[600] text-primary">Research hub</p>
                  <p
                    className="text-gray-600 hover:text-primary cursor-pointer"
                    onClick={() => setSelectResearch(null)}
                  >
                    <IoClose size={20} />
                  </p>
                </div>
                <div>
                  <div className="flex items-start justify-between mt-3">
                    <div>
                      <div className="space-y-2">
                        <p className="font-[600] text-[16px]">{researchSelect !== null && researchSelect.plan}</p>
                        {researchSelect?.plan === "Pro Plan" ? (
                          <p className="font-[600]"> Contact us</p>
                        ) : (
                          <p className="font-[600]">
                            {researchSelect !== null && amtConversion(researchSelect.cost)}
                            <span className="text-gray-500">/month</span>
                          </p>
                        )}
                      </div>
                      <hr className="my-2" />
                      <p className="text-gray-500">Includes</p>
                      <ul className="list-disc pl-7 text-gray-500 space-y-2">
                        {researchSelect !== null &&
                          researchSelect.package.map((el, i) => (
                            <li key={i} className="text-[14px]">
                              {el}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            {selectCrm !== null ? (
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <p className="font-[600] text-primary">Engagement Hub</p>
                  <p className="text-gray-600 hover:text-primary cursor-pointer" onClick={() => setSelectCrm(null)}>
                    <IoClose size={20} />
                  </p>
                </div>
                <div>
                  <div className="flex items-start justify-between mt-3">
                    <div>
                      <div className="space-y-2">
                        <p className="font-[600] text-[16px]">{crmSelect !== null && crmSelect.title}</p>
                        {crmSelect?.title === "Pro Plan" ? (
                          <p className="font-[600]"> Contact us</p>
                        ) : (
                          <p className="font-[600]">
                            {crmSelect !== null && amtConversion(crmSelect.amount)}
                            <span className="text-gray-500">/month</span>
                          </p>
                        )}
                      </div>
                      <hr className="my-2" />
                      <p className="text-gray-500">Includes</p>
                      <ul className="list-disc pl-7 text-gray-500 space-y-2">
                        {crmSelect !== null &&
                          crmSelect.features.map((el, i) => (
                            <li key={i} className="text-[14px]">
                              {el}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className="flex flex-col justify-center items-center text-center mt-10">
              {selectCrm === null && selectResearch === null && (
                <EmptyState
                  title="Nothing to show yet."
                  subtitle="Your custom selection will show up here."
                  img={emptyState}
                />
              )}
              <div className="w-full mt-5">
                {researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan" ? (
                  <div></div>
                ) : (
                  <div>
                    <p className="font-[600] text-[36px] text-primary ">
                      {amtConversion(selectCrm === null && selectResearch === null ? 0.0 : totalAmount)}
                      <span className="text-gray-500 text-[20px] font-[500]">/month</span>
                    </p>
                    <p className="text-gray-500 text-[20px] font-[500]">Billed monthly</p>
                  </div>
                )}
                <div className="mt-3">
                  <Link
                    to={
                      researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan"
                        ? "mailto:support@enterscale.com"
                        : `${ROUTES.LOGIN}/register`
                    }
                  >
                    <BlueButton
                      type="button"
                      text={
                        researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan"
                          ? "Contact us"
                          : "Buy now"
                      }
                      css="w-full"
                      disabled={selectCrm === null && selectResearch === null}
                    />
                  </Link>
                </div>
              </div>
            </div>
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
      <div className="p-5 md:hidden">
        <p className="text-primary underline text-[14px] cursor-pointer" onClick={() => setOpenModal(!openModal)}>
          Preview Estimate
        </p>
      </div>
      {openModal && (
        <div className="md:hidden">
          <Modal title="" onClose={() => setOpenModal(false)}>
            <div
              className={`border rounded-2xl h-[calc(100vh-250px)] overflow-y-auto md:w-[30%] w-[350px] p-5 mt-5 ${
                selectCrm === null && selectResearch === null ? "h-[500px]" : "h-[calc(100vh-250px)]"
              }`}
            >
              <p className="font-[600]">Estimate</p>
              {selectResearch !== null ? (
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-[600] text-primary">Research hub</p>
                    <p
                      className="text-gray-600 hover:text-primary cursor-pointer"
                      onClick={() => setSelectResearch(null)}
                    >
                      <IoClose size={20} />
                    </p>
                  </div>
                  <div>
                    <div className="flex items-start justify-between mt-3">
                      <div>
                        <div className="space-y-2">
                          <p className="font-[600] text-[16px]">{researchSelect !== null && researchSelect.plan}</p>
                          <p className="font-[600]">
                            {researchSelect !== null && amtConversion(researchSelect.cost)}
                            <span className="text-gray-500">/month</span>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <p className="text-gray-500">Includes</p>
                        <ul className="list-disc pl-7 text-gray-500 space-y-2">
                          {researchSelect !== null &&
                            researchSelect.package.map((el, i) => (
                              <li key={i} className="text-[14px]">
                                {el}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {selectCrm !== null ? (
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <p className="font-[600] text-primary">Engagement Hub</p>
                    <p className="text-gray-600 hover:text-primary cursor-pointer" onClick={() => setSelectCrm(null)}>
                      <IoClose size={20} />
                    </p>
                  </div>
                  <div>
                    <div className="flex items-start justify-between mt-3">
                      <div>
                        <div className="space-y-2">
                          <p className="font-[600] text-[16px]">{crmSelect !== null && crmSelect.title}</p>
                          <p className="font-[600]">
                            {crmSelect !== null && amtConversion(crmSelect.amount)}
                            <span className="text-gray-500">/month</span>
                          </p>
                        </div>
                        <hr className="my-2" />
                        <p className="text-gray-500">Includes</p>
                        <ul className="list-disc pl-7 text-gray-500 space-y-2">
                          {crmSelect !== null &&
                            crmSelect.features.map((el, i) => (
                              <li key={i} className="text-[14px]">
                                {el}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              <div className="flex flex-col justify-center items-center text-center mt-10">
                {selectCrm === null && selectResearch === null && (
                  <EmptyState
                    title="Nothing to show yet."
                    subtitle="Your custom selection will show up here."
                    img={emptyState}
                  />
                )}
                <div className="w-full mt-16">
                  {researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan" ? (
                    <div></div>
                  ) : (
                    <div>
                      <p className="font-[600] text-[36px] text-primary ">
                        {amtConversion(selectCrm === null && selectResearch === null ? 0.0 : totalAmount)}
                        <span className="text-gray-500 text-[20px] font-[500]">/month</span>
                      </p>
                      <p className="text-gray-500 text-[20px] font-[500]">Billed monthly</p>
                    </div>
                  )}
                  <div className="mt-3">
                    <Link
                      to={
                        researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan"
                          ? "mailto:support@enterscale.com"
                          : `${ROUTES.LOGIN}/register`
                      }
                    >
                      <BlueButton
                        type="button"
                        text={
                          researchSelect?.plan === "Pro Plan" || crmSelect?.title === "Pro Plan"
                            ? "Contact us"
                            : "Buy now"
                        }
                        css="w-full"
                        disabled={selectCrm === null && selectResearch === null}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Custom;
