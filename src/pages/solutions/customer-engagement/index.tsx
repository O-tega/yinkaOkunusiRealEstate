import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
// import Head from "next/head";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const CustomerEngagement: React.FC = () => {
  const cardData = [
    {
      title: "Send targeted messages.",
      desc: "Group customers based on their profile information or other custom attributes and send targeted messages that fit their needs.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.TargethitIcon}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[200px] pt-16"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Send heartfelt greetings.",
      desc: "Celebrate special occasions by sending personalised birthday and holiday wishes to strengthen connections and enhance brand loyalty.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.celebrationIcon}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[180px] pt-10"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Unlock mobile communication channels.",
      desc: "Reach your audience anytime, anywhere, through SMS and email, enhancing engagement and boosting brand visibility.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.flyaroundIcon}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[180px] pt-10"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
  ];

  return (
    <div>
      {/* <Head>
        <title>mooyi™ | Engage Your Customers on Mobile</title>
        <meta name="description" content="Created by Mooyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeroSection
        type="CUSTOMER ENGAGEMENT"
        title="Engage active customers and reactivate inactive ones."
        desc="Segment your customers easily and send SMS and email messages to encourage sales and drive loyalty"
        img={ASSETS.MOOYI.SOLUTIONS.customerEngagementMobile}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.customerEngagementDesktop}
      />
      <div>
        <CardList cardList={cardData} />
      </div>
      <div className="flex justify-center pb-16">
        <div className="md:w-[20%]">
          <Link to={`${ROUTES.LOGIN}`}>
            <PrimaryButton type="button" text="Get started for free" css="rounded-md w-[20%] px-5" variant="filled" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomerEngagement;
