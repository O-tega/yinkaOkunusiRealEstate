import FaqHero from "./faq/faqHero";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import compass from "@/assets/aboutus/compass.jpg";
import blackman from "@/assets/aboutus/blackman.jpg";
import careerImg from "@/assets/aboutus/careerImg.jpg";
import { Link } from "react-router-dom";
import TeamCard from "@/components/TeamCard";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden">
        <FaqHero title="About Us" desc="" desktopImg={faqBackground} />
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-[70%]">
          <p>
            <span className="font-[700]">YINKA OKUNUSI AND ASSOCIATES</span> is a fast growing firm of chartered
            surveyors, estate surveyors and valuers, set up to render comprehensive and professional real estate
            consultancy in the building industry. <br />
            <br />
            Registered with the Corporate Affairs Commission of Nigeria, the company commenced operation in 2003 at its
            corporate head office located at 65, Allen Avenue, (God’s Grace Plaza), Ikeja, Lagos State, with a staff
            strength that boasts of considerate and passionate professionals experienced and varied in research and
            technological backgrounds. This trail blazer company executes professional projects using an integrated and
            scientific approach with far reaching solutions to match the customer's requirements. <br />
            <br />
            The firm provides a wide range of real estate consultancy: property management, facilities management,
            property development, valuation of land and buildings, plant and machinery, estate agency, rating and
            taxation, project management and auctioneering services both to the private and public sectors. <br />
            <br />
            The company is duly registered by the Nigerian Institution of Estate Surveyors & Valuers{" "}
            <span className="font-[700]">(NIESV)</span>, Estate Surveyors & Valuers Registration Board of Nigeria
            <span className="font-[700]">(ESVARBON) </span>to practice estate management and remains Financial Reporting
            Council of Nigeria <span className="font-[700]">(FRCN)</span> compliant to date. The company is also a
            corporate member of British Institute of Facilities Management <span className="font-[700]">(BIFM)</span>,
            African Real Estate Society <span className="font-[700]">(AFRES)</span>, Certified Institute of Auctioneers,
            Nigeria <span className="font-[700]">(CIAN)</span> and Royal Institution of Chartered Surveyors{" "}
            <span className="font-[700]">(RICS)</span>.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
        <div className="w-[70%]">
          <div className="grid grid-cols-2 ">
            <div className="h-[200px] overflow-hidden">
              <img src={compass} alt="" />
            </div>
            <div className="bg-gray-50 pl-5 h-full flex flex-col justify-center">
              <p className="font-[700] text-[36px]">Our Mission</p>
              <p>
                The mission of the company is to revolutionize real estate practice and guaranteeing optimal returns on
                investment in the property market
              </p>
            </div>
            <div className="bg-gray-50 pl-5 h-full flex flex-col justify-center">
              <p className="font-[700] text-[36px]">Our Vision</p>
              <p>
                Our objective is to create services that will in turn create wealth by raising the standard of Real
                estate consultancy in Nigeria to such a level that compares favorably with what is obtained anywhere in
                the world.
              </p>
            </div>
            <div className="h-[200px] overflow-hidden">
              <img src={blackman} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 h-[200px] overflow-hidden bg-black relative flex flex-col items-center justify-center">
        <img
          src={careerImg}
          alt="background img"
          className="w-full absolute top-0 object-cover h-full hidden md:block opacity-30"
        />
        <div className="z-50">
          <p className="font-[700] text-[36px] text-white">Careers</p>
        </div>
        <div className="z-50 ">
          <p className="text-white text-center">
            Do you have a passion for real estate management and want to build a career with us?
            <br /> Send your Resume to the email address stated below:
          </p>
          <p className="text-white text-center font-[600]">
            <Link to="mailto:careers@yinkaokunusiandassociates.net">careers@yinkaokunusiandassociates.net</Link>{" "}
          </p>
          <p className="text-white text-center">and we will get back in touch with you once a vacancy is available.</p>
        </div>
      </div>
      <div>
        <TeamCard />
      </div>
    </div>
  );
};

export default AboutUs;
