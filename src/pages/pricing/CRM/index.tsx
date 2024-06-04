import React from "react";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import Plans from "./Plans";

// const tabs = [
//   { name: "Premium plans", value: 0 },
//   { name: "Pay-as-you-go", value: 1 },
// ];

const CRM: React.FC = () => {
  //   const [values, setValues] = useState(0);

  //   const displayTabs = () => {
  //     switch (values) {
  //       case 0:
  //         return <PremiumPlan/>;
  //       case 1:
  //         return <PayAsYouGo/>;
  //       default:
  //     }
  //   };
  return (
    <div>
      <div className="w-[100%] mx-auto md:h-[calc(100vh-400px)] pb-10 md:pb-0 bg-[#EFF3FF] overflow-hidden pt-16 md:pt-0 relative">
        <div>
          <img
            src={faqBackground}
            alt="background img"
            className="w-full object-cover h-full absolute top-0 hidden md:block"
          />
        </div>
        <div>
          <img
            src={faqBgMobile}
            alt="background img"
            className="w-full object-cover h-[400px] absolute top-0 z-0 md:hidden"
          />
        </div>
        <div className="w-full flex justify-center md:px-[5rem] px-4 z-10 tracking-tight">
          <div className="flex items-center flex-col md:mt-[5rem]">
            <div>
              <p className="font-secondary md:text-[40px] text-center text-[24px] md:leading-[3rem] tracking-tight pt-5">
                CRM Hub
              </p>
              <p className=" md:text-[20px] pt-5 text-[16px] text-center">
                Drive your business success with our comprehensive CRM and messaging features.
              </p>
            </div>
            <div className="md:flex items-center space-x-7 mt-7"></div>
          </div>
        </div>
      </div>
      <div>
        <Plans />
      </div>
    </div>
  );
};

export default CRM;
