import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
// import Head from "next/head";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
const LeadAcquisition: React.FC = () => {
  const cardData = [
    {
      title: "Tap into our diverse audience.",
      desc: "With an active database of over 3 million Nigerians, mooyi™ ensures you reach the right audience to build a valuable customer base.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyPeopleBoard}
          alt="logos"
          width={500}
          height={500}
          className="w-[170px] md:w-[220px] pt-24"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Target your ideal customer precisely.",
      desc: "Our platform offers detailed targeting so you can pinpoint your ideal audience, who must consent to receive direct promotional offers from you.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiLyingTarget}
          alt="logos"
          width={500}
          height={500}
          className="w-[120px] md:w-[150px] pt-12"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
    {
      title: "Simplify onboarding with our versatile forms.",
      desc: "Gather pre-KYC information using our user-friendly form templates that allow customers to submit text, image, voice and video responses.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiSuccessStirs}
          alt="logos"
          width={500}
          height={500}
          className="w-[120px] md:w-[150px] pt-12"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
  ];

  return (
    <div>
      {/* <Head>
        <title>mooyi™ | Connecting You with Future Customers</title>
        <meta name="description" content="Created by Mooyi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeroSection
        type="LEAD ACQUISITION"
        title="Grow through targeted lead acquisition"
        desc="Expand your customer base with our lead acquisition feature that connects you with audiences who express interest in your offerings."
        img={ASSETS.MOOYI.SOLUTIONS.leadAcquisitionImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.LeadAcquisitionDSK}
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

export default LeadAcquisition;
