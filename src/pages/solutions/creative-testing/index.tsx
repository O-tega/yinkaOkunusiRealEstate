import React from "react";
import { ASSETS } from "@/assets/images/Assets";
import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

const CreativeTesting: React.FC = () => {
  const cardData = [
    {
      title: "Pilot new product ideas before launch.",
      desc: "Validate the feasibility and appeal of your concept before launch. Mitigate risks and build products fashioned to perfection from day one.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiPivot}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[200px] pt-14"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Navigate the market with data-backed insights.",
      desc: "Chart the course for others by building what the market needs and setting a standard the competition struggles to meet.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiChessPiece}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[200px] pt-14"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Prioritise the right features to build.",
      desc: "Identify and focus on the features your potential customers value the most, ensuring they feel seen, heard, and catered to.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyianalysisBar}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[160px] pt-5 "
        />
      ),
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
        type="CREATIVE TESTING"
        title="Raise the horsepower of your creative campaigns"
        desc="Evaluate your creative ads and pinpoint the concepts that resonate best with your goals before executing."
        img={ASSETS.MOOYI.SOLUTIONS.creativeTestingImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.CreativeTestingDSK}
        watchTutorialId="ct_watch_tutorial_1"
        getInTouchId="ct_get_in_touch_2"
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
              buttonId="ct_get_started_for_free_3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreativeTesting;
