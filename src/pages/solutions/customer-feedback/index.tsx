import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
// import Head from "next/head";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const CustomerFeedback: React.FC = () => {
  const cardData = [
    {
      title: "Start and manage customer experience programs.",
      desc: "Gather important customer feedback that you can act on with multiple question types, multi-channel response collection, rewards, and more.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiwalletIcon}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[120px] pt-14"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Build personas.",
      desc: "Use the data to group satisfied, inactive or churned customers so you can tailor your marketing or improve your product and services to suit them.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiblock}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[120px] pt-14"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Take action and grow.",
      desc: "Reduce churn and fuel growth by routing feedback directly to the people who need to see it.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiTargetTree}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[100px] pt-16"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
  ];

  return (
    <div>
      {/* <Head>
        <title>mooyi™ | Gather Timely Feedback. </title>
        <meta name="description" content="Created by Mooyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeroSection
        type="CUSTOMER FEEDBACK"
        title="Get quality customer feedback you can quickly act on."
        desc="Easily collect and benchmark your customer feedback, CSAT, NPS®, PMF
            surveys, and more in hours to see how you stack up in your industry."
        img={ASSETS.MOOYI.SOLUTIONS.CustomerFeedbackDSK}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.customerFeedbackImage}
      />
      <div>
        <CardList cardList={cardData} />
      </div>
      <div className="flex justify-center pb-16">
        <div className="md:w-[20%]">
          <Link to={`${ROUTES.LOGIN}`}>
            <PrimaryButton
              type="button"
              text="Get started for free"
              css="rounded-md w-[20%] px-5"
              variant="filled"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
