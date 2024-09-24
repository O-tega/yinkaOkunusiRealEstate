import React from "react";
import { ASSETS } from "@/assets/images/Assets";
// import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import { ROUTES } from "@/constants/externalUrls";
const EventFeedback: React.FC = () => {
  const cardData = [
    {
      title: "Automate event registration and check-in.",
      desc: "Automate your event registration and check-in process and provide a smooth experience for your attendees from the start.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiHumanoid}
          width={500}
          height={500}
          alt="logos"
          className="w-[90px] md:w-[120px]"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
    {
      title: "Engage attendees and collect feedback in minutes.",
      desc: "Use mooyi Rewards to encourage attendee interaction. Swiftly collect their valuable insights and feedback to learn more about their experiences.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyifeedback}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[160px] pt-5"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Analyse and route your feedback and take fast action.",
      desc: "Share your real-time event insights with key stakeholders who can enact change immediately to ensure its success.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiLocMagnify}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[190px] pt-5"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Get Online & Offline Event Feedback.</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <HeroSection
        type="EVENT FEEDBACK"
        title="Steer your events with eye-opening insights"
        desc="Enhance attendee satisfaction, improve event returns on investment, bolster brand reputation, and get actionable insights to enhance future events."
        img={ASSETS.MOOYI.SOLUTIONS.eventFeedbackImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.EventFeedbackDSK}
        watchTutorialId="ef_watch_tutorial_1"
        getInTouchId="ef_get_in_touch_2"
      />
      <div>
        <CardList cardList={cardData} />
      </div>
      {/* <div className="flex justify-center pb-16">
        <div className="md:w-[20%]">
          <Link to={`${ROUTES.LOGIN}/register`}>
            <PrimaryButton
              type="button"
              text="Get started for free"
              css="rounded-md w-[20%] px-5"
              variant="filled"
              buttonId="ef_get_started_for_free_3"
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default EventFeedback;
