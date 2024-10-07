"use client";
import React, { useEffect, useState } from "react";

import feedbackCard from "@/assets/images/landing/feedbackCard.png";
import CreateLoyalty from "@/assets/images/landing/CreateLoyalty.png";
import growYourAudience from "@/assets/images/landing/growYourAudience.png";
import fieldResearchCard from "@/assets/images/landing/fieldResearchCard.png";
import graphCard from "@/assets/images/landing/graphCard.png";
import insightCard from "@/assets/images/landing/insightCard.png";
import surveyCreated from "@/assets/images/landing/surveyCreated.png";
import { AnimatePresence, motion } from "framer-motion";
import { ASSETS } from "@/assets/images/Assets";
import CarouselCard from "./Web/CarouselCArd";

// const flutterImages = [flutterwave1, flutterwave3, flutterwave4, flutterwave5];

const carolInfo = [
  {
    img: ASSETS.LandingPage.launchMobile,
    title: "Launch Mobile Campaigns",
    text: "Create campaigns to drive actions, such as clicks, opt-ins, page views, and purchases.",
  },
  {
    img: insightCard,
    title: "Gain Valuable Customer Insights",
    text: "Learn about your customers to build personas and personalised experiences.",
  },
  {
    img: graphCard,
    title: "Benchmark Your Brand and Competitors",
    text: "Track key brand metrics to understand your reputation and relative positioning.",
  },
  {
    img: CreateLoyalty,
    title: "Create Loyalty Campaigns",
    text: "Create campaigns to drive loyalty, such as feedback, reviews, shares, and referrals.",
  },
  {
    img: feedbackCard,
    title: "Curate User Reviews and Feedback",
    text: "Request customer reviews and ratings that can be used for remarketing.",
  },
  {
    img: surveyCreated,
    title: "Create any Type of Survey in Minutes",
    text: "Find the right audience for any research campaign in days, not weeks.",
  },
  {
    img: fieldResearchCard,
    title: "Launch Field Research from Your Desk",
    text: "Get opinions from people in the streets, malls, markets, or events.",
  },
  {
    img: growYourAudience,
    title: "Grow Your Audience",
    text: "Add opt-in forms to your surveys and website to quickly and ethically expand your customer mailing list.",
  },
];

const MobileCarousel: React.FC = () => {
  const [images, setImages] = useState([...carolInfo]);
  const [isAnimating, setIsAnimating] = useState(false);
  // const variant = {
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  //   hidden: { opacity: 0, x: "-10%", transition: { duration: 0.8 } },
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setImages((prevImages) => [
          ...prevImages.slice(1),
          prevImages[0], // Put the first image at the back
        ]);
        setIsAnimating(false);
      }, 500); // Adjust the duration of the animation
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center md:space-x-5 overflow-hidden overflow-x-auto no-scrollbar">
      <AnimatePresence initial={false}>
        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: "-10%" }}
            className="min-w-[400px] overflow-hidden "
            style={{
              opacity: isAnimating && i === 0 ? 0 : 1, // Hide the first image during animation
            }}
            animate={{
              translateX: isAnimating ? "-400px" : 0,
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: isAnimating ? 0.5 : 0 }}
          >
            <CarouselCard key={i} title={item.title} text={item.text} img={item.img} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default MobileCarousel;
