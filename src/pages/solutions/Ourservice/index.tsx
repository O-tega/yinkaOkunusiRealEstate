import React from "react";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import { Helmet } from "react-helmet";

import projectDevelopment from "@/assets/ourServiceImg/propertyDevelopment.jpg";
import projectManagement from "@/assets/ourServiceImg/projectManagement.jpg";
import urbanConstruction from "@/assets/ourServiceImg/urbanPropertyDevelopment.jpg";
import estateAgency from "@/assets/ourServiceImg/estateAgency.jpg";
import assetValuation from "@/assets/ourServiceImg/assetValuation.jpg";
import auctioneering from "@/assets/ourServiceImg/auctioneering.jpg";
import estateAcquiction from "@/assets/ourServiceImg/estateAcquiction.jpg";
import facilityManagement from "@/assets/ourServiceImg/facilityManagement.jpg";
import housingFinance from "@/assets/ourServiceImg/housingFinance.jpg";
import ratingAdvisory from "@/assets/ourServiceImg/ratingAdvisory.jpg";
import propertyAssetAudit from "@/assets/ourServiceImg/propertyAssetAudit.jpg";
import FaqHero from "@/pages/faq/faqHero";

const Ourservice: React.FC = () => {
  const OurserviceCard = [
    {
      img: projectDevelopment,
      title: "Property Development",
      text: "We conduct feasibility studies for real estate projects, ensuring informed decisions and successful execution. We also assist in securing funding through partnerships with banks, insurance, and trust companies.",
    },
    {
      img: projectManagement,
      title: "Project Management",
      text: "Our team manages property development projects, ensuring smooth coordination and execution. We act as the client’s expert, overseeing the entire process, implementing decisions, and maximizing returns—whether economic, social, or prestige-based.",
    },
    {
      img: facilityManagement,
      title: "Facility Management",
      text: "We manage and coordinate the maintenance of building facilities, including lifts, escalators, power generators, air-conditioners, and more. Our services cover all aspects of building maintenance and property management, tailored to meet clients' specific needs, including space and service facility management.",
    },
    {
      img: urbanConstruction,
      title: "Urban Property Management",
      text: "We offer full management of urban properties, handling rent collection, repairs, maintenance, and record-keeping. Our services cater to both private and public estates, aiming to achieve profit, efficiency, and social goals, while maximizing returns for property owners throughout the property's lifespan.",
    },
    {
      img: estateAgency,
      title: "Estate Agency",
      text: "We specialize in finding properties tailored to customer needs, handling purchases, sales, and lettings of various properties. Our transparent process ensures that location, price, and amenities are clearly provided to match client requirements.",
    },
    {
      img: propertyAssetAudit,
      title: "Property Asset Audit",
      text: "We appraise property portfolios to optimize resource deployment and integrate recommendations into strategic planning. Our services include verifying, perfecting, and updating titles for landed properties to ensure efficient policy formulation.",
    },
    {
      img: assetValuation,
      title: "Assets Valuation",
      text: "We conduct property valuations for sales, purchases, and all asset types, including land, buildings, machinery, vehicles, and equipment. Additionally, we issue Certificates of Valuation for these assets, tailored to various purposes.",
    },
    {
      img: estateAcquiction,
      title: "Assets Acquisition",
      text: "We prepare compensation claims for compulsory property acquisition and handle negotiations with the acquiring authority. Our expertise ensures a smooth, legally compliant process, providing the knowledge needed for informed decision-making from start to finish.",
    },
    {
      img: ratingAdvisory,
      title: "Rating Advisory",
      text: "We offer advisory and implementation services for local government financing through property rating. This includes preparing rating valuation lists, property assessments, court attendance for rating disputes, and administering tenement rate collection on behalf of rating authorities.",
    },
    {
      img: auctioneering,
      title: "Auctioneering",
      text: "As licensed auctioneers, we conduct public auctions for various properties, including land, machinery, vehicles, and household goods. We also provide after-sales support to ensure your satisfaction with your recent acquisition.",
    },
    {
      img: housingFinance,
      title: "Housing Finanace And Delivery Services",
      text: "We provide advisory services for wholesale and mass housing projects from inception to final disposal. Additionally, we offer mortgage financing advice to individual homebuyers and corporate organizations developing staff housing schemes.",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mooyi™ | Effortlessly Gather Insights & Master Growth</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="w-full h-[300px] overflow-hidden">
        <FaqHero title="Our service" desc="" desktopImg={faqBackground} />
      </div>
      <div className="md:px-[5rem] px-5 md:my-[5rem] pb-[2rem]">
        <div>
          <div>
            {OurserviceCard.map((el, i) => (
              <div className="">
                <div className={`flex items-center ${i % 2 !== 0 ? "" : "hidden"} mt-[5rem]`}>
                  <div className={`h-[250px] overflow-hidden w-[50%]`}>
                    <img src={el.img} alt="" />
                  </div>
                  <div className={`bg-gray-50 px-5 h-[250px] flex flex-col justify-center w-[50%] `}>
                    <p className="font-[700] text-[36px]">{el.title}</p>
                    <p>{el.text}</p>
                  </div>
                </div>
                <div className={`flex items-center ${i % 2 === 0 ? "" : "hidden"} mt-[5rem]`}>
                  <div className={`bg-gray-50 px-5 h-[250px] flex flex-col justify-center w-[50%] `}>
                    <p className="font-[700] text-[36px]">{el.title}</p>
                    <p>{el.text}</p>
                  </div>
                  <div className={`h-[250px] overflow-hidden w-[50%] `}>
                    <img src={el.img} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
