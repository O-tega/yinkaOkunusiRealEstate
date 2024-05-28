import faqBgMobile from "@/assets/images/mooyi/faqBgMobile.png";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import DataTemplate from "@/components/Web/DataTemplate";
import { CookieNoticeData } from "../data/cookieNoticeData";

const CookieNotice = () => {
  return (
    <div className="w-[100%] ">
      <div className="w-[100%] mx-auto md:h-[calc(100vh-70px)] pb-10 md:pb-0 bg-[#EFF3FF] flex md:items-center overflow-hidden pt-16 md:pt-0 md:relative">
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
            className="w-full object-cover h-[700px] absolute top-0 z-0  md:hidden"
          />
        </div>
        <div className="w-full mx-auto md:flex items-center justify-center md:px-[5rem] px-4 z-10 tracking-tight">
          <div className="flex justify-center">
            <div>
              <p className="font-secondary md:text-[48px] text-center text-[32px] md:leading-[4rem] pt-5">
                Cookie Policy
              </p>
              <p className=" md:text-[20px] pt-5 text-[16px] text-center">
                Updated: 23rd, July, 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* cookie notice  */}
      <div
        className="flex flex-col gap-y-[48px] py-[30px] 
        px-[20px]
        md:px-[50px]
        lg:px-[80px]"
      >
        {CookieNoticeData.map((data) => (
          <DataTemplate key={data.name} data={data} />
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CookieNotice;
