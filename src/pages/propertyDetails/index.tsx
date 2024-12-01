import React from "react";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import { useLocation } from "react-router-dom";
import FaqHero from "../faq/faqHero";
import { FaCheck } from "react-icons/fa";
import SideCard from "@/components/Web/SideCard";

const PropertyDetails: React.FC = () => {
  const location = useLocation();
  console.log(location);
  const data = location?.state;

  const featuresList = data.l_features.split(",");

  return (
    <div className="pb-[5rem]">
      <div className="w-full h-[300px] overflow-hidden">
        <FaqHero title={data.l_type} desc="Property details" desktopImg={faqBackground} />
      </div>
      <div className="flex items-start w-full px-[2rem] mt-5 space-x-5">
        <div className="flex flex-col items-cols items-center w-[80%]">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              src={`http://www.yinkaokunusiandassociates.com/images/properties/${data.l_img1}`}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full flex items-start pt-[1rem] space-x-5">
            <div className="w-[70%]">
              <div>
                <p className="font-[600] text-[32px]">{data.l_description}</p>
                <p>{data.l_title}</p>
              </div>
              <div className="bg-blue-400 text-white w-fit px-7 py-3 mt-5">
                <p>{data.l_category}</p>
                <p className="font-[600] text-[32px]">
                  {data.l_currency} {Number(data.l_amount).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="pt-2 font-[600] text-[32px]">Location</p>
                <p>{data.l_location}</p>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="pt-2 font-[600] text-[24px]">Features</p>
                  <p>
                    {featuresList.map((el) => (
                      <div className="flex items-center space-x-3">
                        <p className="text-green">
                          <FaCheck />
                        </p>

                        <p>{el}</p>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[30%] border p-5">
              <p className="font-[600] text-[24px] text-center">Contact this property</p>
              <div className="bg-blue-400 text-white w-full px-7 py-2 mt-5 hover:bg-blue-900">
                <p className="font-[600] text-[16px] text-center cursor-pointer">Request a tour</p>
              </div>
              <div className="border hover:bg-blue-400 hover:text-white hover:border-none  w-full px-7 py-2 mt-5">
                <p className="font-[600] text-[16px] text-center cursor-pointer">send a message</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20%]">
          <SideCard />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
