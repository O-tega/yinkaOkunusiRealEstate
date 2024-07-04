import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
// const green = color:"bg-[#ECFEF5]"
// const purple = color: "bg-[#EBF1FF]"
// const yellow = color:"bg-[#FEFAE8]"

const MarketAnalysis: React.FC = () => {
  const cardData = [
    {
      title: "Uncover your ideal customer.",
      desc: "Publish surveys for your existing, target and potential customers, and unravel their thoughts, behaviours, and purchasing triggers.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiChessBoard}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[180px] pt-14"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
    {
      title: "Identify patterns and group them.",
      desc: "Use insights to group your future and present consumers so you can optimise your marketing or improve their experience.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiCelebHat}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[120px] pt-9"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Learn the best ways to reach them.",
      desc: "Learn the best ways, places and times to reach them and secure explicit consent to send them direct promotional offers.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiUmbrella}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[120px] pt-4"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Expansion Minus the Risk</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection
        type="MARKET ANALYSIS"
        title="Discover where and how to win."
        desc="Utilize data-driven insights to decide where and how you can make your mark across the continent."
        img={ASSETS.MOOYI.SOLUTIONS.marketAnalysisImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.MarketAnalysisDSK}
        watchTutorialId="ma_watch_tutorial_1"
        getInTouchId="ma_get_in_touch_2"
      />
      <div>
        <CardList cardList={cardData} />
      </div>
      <div className="flex justify-center pb-16">
        <div className="md:w-[20%]">
          <Link to={`${ROUTES.LOGIN}/register`} target="_blank" rel="noreferrer">
            <PrimaryButton
              type="button"
              text="Get started for free"
              css="rounded-md w-[20%] px-5"
              variant="filled"
              buttonId="ma_get_started_for_free_3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
