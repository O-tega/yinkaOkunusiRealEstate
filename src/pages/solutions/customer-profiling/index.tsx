import React from "react";
import { ASSETS } from "@/assets/images/Assets";
// import PrimaryButton from "@/components/Button/PrimaryButton";
import HeroSection from "../components/HeroSection";
import CardList from "../components/CardList";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import { ROUTES } from "@/constants/externalUrls";
const CustomerProfiling: React.FC = () => {
  const cardData = [
    {
      title: "Uncover your ideal customer.",
      desc: "Publish surveys for your existing, target and potential customers, and unravel their thoughts, behaviours, and purchasing triggers.",
      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiCustomerGlass}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[130px] pt-9"
        />
      ),
      color: "bg-[#EBF1FF]",
    },
    {
      title: "Identify patterns and group them.",
      desc: "Use insights to group your future and present consumers so you can optimise your marketing or improve their experience.",

      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyiclustermembers}
          width={500}
          height={500}
          alt="logos"
          className="w-[150px] md:w-[240px] pt-16"
        />
      ),
      color: "bg-[#ECFEF5]",
    },
    {
      title: "Learn the best ways to reach them.",
      desc: "Learn the best ways, places and times to reach them and secure explicit consent to send them direct promotional offers.",

      img: (
        <img
          src={ASSETS.MOOYI.SOLUTIONS.mooyilocationMap}
          width={500}
          height={500}
          alt="logos"
          className="w-[120px] md:w-[180px] pt-16"
        />
      ),
      color: "bg-[#FEFAE8]",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>mooyi™ | Uncover Your Target Consumer Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <HeroSection
        type="CUSTOMER PROFILING"
        title="Understand your target consumers from every angle"
        desc="With our superior audience access and filtering capabilities, get the knowledge you need to stand out in today's fiercely competitive market."
        img={ASSETS.MOOYI.SOLUTIONS.customerProfilingImage}
        desktopImg={ASSETS.MOOYI.SOLUTIONS.ConsumerProfilingDSX}
        watchTutorialId="cp_watch_tutorial_1"
        getInTouchId="cp_get_in_touch_2"
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
              buttonId="cp_get_started_for_free_3"
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default CustomerProfiling;
