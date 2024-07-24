import DataTemplate from "@/components/Web/DataTemplate";
import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import { termsOfUseStructure } from "../data/TermOfUseData";

const TermsOfUse = () => {
  return (
    <div className="w-[100%] ">
      <div className="w-[100%] mx-auto md:h-[40vh] h-[30vh] pb-10 md:pb-0 bg-[#EFF3FF] flex md:items-center overflow-hidden pt-16 md:pt-0 md:relative">
        <div>
          <img
            src={faqBackground}
            width={1500}
            height={1500}
            alt="background img"
            className="w-full object-cover h-full absolute top-0 hidden md:block"
          />
        </div>
        <div>
          <img
            src={faqBgMobile}
            width={1500}
            height={1500}
            alt="background img"
            className="w-full object-cover h-[700px] absolute top-0 z-0  md:hidden"
          />
        </div>
        <div className="w-full mx-auto md:flex items-center justify-center md:px-[5rem] px-4 z-10 tracking-tight">
          <div className="flex justify-center">
            <div>
              <p className="font-secondary md:text-[48px] text-center text-[32px] md:leading-[4rem] pt-5">
                Term of Use
              </p>
              <p className=" md:text-[20px] pt-5 text-[16px] text-center">Updated: 23rd, July, 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* terms of use  */}
      <div
        className="flex flex-col gap-y-[48px] py-[30px] 
        px-[20px]
        md:px-[50px]
        lg:px-[80px]"
      >
        <h6 className="text-[20px] leading-[32px] font-[450]">
          Please read these terms of use carefully before using the services, or access the platform.
        </h6>
        {termsOfUseStructure.map((data) => (
          <DataTemplate key={data.name} data={data} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TermsOfUse;
