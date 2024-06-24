import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const BrandTracking: React.FC = () => {
  const cardData = [
    {
      title: "Learn how your brand is perceived.",
      desc: "Monitor your brand's health, understand consumer sentiments, and align communications to enhance brand image.",
      img: <img src={ASSETS.MOOYI.SOLUTIONS.mooyibaton} alt="logos" className="w-[150px] md:w-[180px] md:pt-16" />,
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Measure interest or purchase intent.",
      desc: "Connect the dots between brand awareness and revenue. Uncover who could transform into customers and the barriers for those who won't.",
      img: (
        <img src={ASSETS.MOOYI.SOLUTIONS.mooyiborderblocks} alt="logos" className="w-[120px] md:w-[100px] md:pt-10" />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Track your brand performance today.",
      desc: "Ask your target customers anything you want, quickly analyse and filter results in the platform and share the reports with your team.",
      img: <img src={ASSETS.MOOYI.SOLUTIONS.mooyianalysis} alt="logos" className="w-[120px] md:w-[100px] md:pt-10" />,
      color: "bg-[#FEFAE8]",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Unravel Your Brand Insights.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection
        type="BRAND TRACKING"
        title="Shelve assumptions and discover what truly works."
        desc="Arm yourself with solid evidence of your impact - understand brand
            recognition, mindshare, and positioning vis-à-vis competitors."
        img={ASSETS.MOOYI.SOLUTIONS.brandTrackingImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.BrandTrackingDSK}
        watchTutorialId="bt_watch_tutorial_1"
        getInTouchId="bt_get_in_touch_2"
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
              buttonId="bt_get_started_for_free_3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandTracking;
