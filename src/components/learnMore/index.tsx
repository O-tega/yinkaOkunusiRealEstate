import React from "react";
import barchart from "@/assets/images/mooyi/mooyiBarchart.png";
import surveychart from "@/assets/images/mooyi/mooyiSurveychart.png";
import audiencetype from "@/assets/images/mooyi/mooyiAudienceType.png";
import audienceage from "@/assets/images/mooyi/mooyiAgeAudience.png";
import WhiteButton from "../Button/WhiteButton";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Our Panel",
    desc: "Gather insights from your target audience quickly with location, demographic, and interest filters.",
    chart1: barchart,
    chart2: surveychart,
  },
  {
    title: "Your Audience",
    desc: "Collect customer and employee feedback to enhance their experience with your brand.",
    chart1: audienceage,
    chart2: audiencetype,
  },
];

const LearnMore: React.FC = () => {
  return (
    <div className="md:px-[4rem]">
      <div className="w-full md:flex items-center p-3 md:space-x-10 space-y-5 md:space-y-0 justify-center ">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-8 md:w-[600px] md:h-[488px] space-y-5 hover:cursor-pointer border border-black hover:border-primary hover:border hover:shadow-lg transition-all duration-300 delay-75 relative"
          >
            <p className="font-secondary md:text-[24px] text-[18px] w-full">{item.title}</p>
            <p className="md:text-[18px] text-[14px]">{item.desc}</p>
            <div className="">
              <img src={item.chart1} className="md:w-[200px] w-[150px] md:h-[210px] h-[180px] " alt="icon" />
            </div>
            <div className="">
              <img
                src={item.chart2}
                className="md:w-[300px] w-[200px] h-[120px] md:h-fit  absolute top-[15rem] md:right-[11rem] right-[5rem]"
                alt="icon"
              />
            </div>
            <div className="pt-5">
              <Link to="/how-it-works">
                <WhiteButton text="Learn more" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;
