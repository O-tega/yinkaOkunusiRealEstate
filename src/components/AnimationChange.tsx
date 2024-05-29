/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import useMedia from "use-media";
const AnimationChange = () => {
  const [campaignType, setCampaignType] = useState<number>(0);
  const isWide = useMedia({ maxWidth: 1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window == "object") {
        const container = document.querySelector(".container");
        if (!isWide) {
          // @ts-ignore
          if (container.scrollTop + 80 === container.scrollHeight) {
            // @ts-ignore
            container.scrollTop = 0;
          } else {
            // @ts-ignore
            container.scrollTop = container.scrollTop + 80;
            setCampaignType(campaignType + 1);
          }
        } else {
          // @ts-ignore
          if (container.scrollTop + 60 === container.scrollHeight) {
            // @ts-ignore
            container.scrollTop = 0;
          } else {
            // @ts-ignore
            container.scrollTop = container.scrollTop + 60;
            setCampaignType(campaignType + 1);
          }
        }
      }
    }, 1900);

    return () => clearInterval(interval);
  }, [campaignType, isWide]);
  return (
    <div
      className="container text-3xl lg:text-5xl px-2 lg:px-0 max-w-[max-content] lg:max-w-[250px] h-[60px] lg:h-[80px]
    rounded-md
    bg-deepBlue/25 overflow-hidden"
    >
      <span>SMS</span>
      <span>emails</span>
      <span>robocalls</span>
    </div>
  );
};

export default AnimationChange;
