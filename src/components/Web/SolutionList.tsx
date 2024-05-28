import React from "react";
import brandTracking from "@/assets/images/mooyi/brandTracking.png";
import mooyiCode from "@/assets/images/mooyi/mooyiCode.png";
import mooyiCustomer from "@/assets/images/mooyi/mooyiCustomer.png";
import mooyiEvent from "@/assets/images/mooyi/mooyiEvent.png";
import mooyiMutliCustomer from "@/assets/images/mooyi/mooyiMultiCustomer.png";
import mooyiPaintbucket from "@/assets/images/mooyi/mooyiPaintbucket.png";
import mooyiPiechart from "@/assets/images/mooyi/mooyiPiechart.png";
import mooyidocument from "@/assets/images/mooyi/mooyidocument.png";
import customerEngagementIcon from "@/assets/images/oursolutions/customerEngagementIcon.png"
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";

type TSolutionListProps = {
  onClick: () => void;
};

const solutionData = [
  {
    name: "Brand Tracking ",
    symbol: brandTracking,
    link: "/solutions/brand-tracking",
  },
  {
    name: "Customer Feedback",
    symbol: mooyidocument,
    link: "/solutions/customer-feedback",
  },
  {
    name: "Customer Profiling",
    symbol: mooyiCustomer,
    link: "/solutions/customer-profiling",
  },
  {
    name: "Market Analysis",
    symbol: mooyiPiechart,
    link: "/solutions/market-analysis",
  },
  {
    name: "New Product Development",
    symbol: mooyiCode,
    link: "/solutions/product-development",
  },
  {
    name: "Lead Acquisition",
    symbol: mooyiMutliCustomer,
    link: "/solutions/lead-acquisition",
  },
  {
    name: "Customer Engagement",
    symbol: customerEngagementIcon,
    link: "/solutions/customer-engagement",
  },
  {
    name: "Creative Testing",
    symbol: mooyiPaintbucket,
    link: "/solutions/creative-testing",
  },
  {
    name: "Event Feedback",
    symbol: mooyiEvent,
    link: "/solutions/event-feedback",
  },
];

const SolutionList: React.FC<TSolutionListProps> = ({ onClick }) => {
  return (
    <div
      className=" p-5 h-full overflow-hidden relative"
      onMouseLeave={onClick}
    >
      <p className="font-bold">By Use case</p>
      <div className="flex flex-col justify-between h-[80%] pt-5">
        {solutionData.map((item, i) => (
          <Link to={item.link} key={i} onClick={onClick}>
            <div className="flex items-center space-x-2 text-[14px] hover:bg-hoverBlue cursor-pointer p-3 rounded-lg transition-all duration-300">
              <img src={item.symbol} width={24} height={24} alt="symbol" />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-black h-[80%] w-full mt-12 absolute left-0">
        <div className="text-white px-5 py-3 text-[13px] flex items-center divide-x ">
          <Link to={`${ROUTES.LOGIN}`}>
            <p className="pr-3 cursor-pointer hover:text-blue-200">Sign up</p>
          </Link>
          <Link
            to="https://www.youtube.com/channel/UC-KbRjjhExwbHkOurEtdNFQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="pl-3 cursor-pointer hover:text-blue-200">
              Watch Demo
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionList;
