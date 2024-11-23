import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import yinka from "@/assets/Team/YinkaOkunusi-removebg-preview.png";
import adeola from "@/assets/Team/AshimiAdeola-removebg-preview.png";
import kemi from "@/assets/Team/JegedeOluwakemiC.-removebg-preview.png";
import mayowa from "@/assets/Team/MayowaOyebade-removebg-preview.png";
import toyosi from "@/assets/Team/OmotoyosiAribalusi-removebg-preview.png";
import Carousel from "react-multi-carousel";

const team = [
  {
    img: <img src={yinka} alt="" className="object-top" />,
    name: "Yinka Okunusi",
    title: "Principal Consultant",
    facebook: "https://www.facebook.com/yinka.okunusi",
    twitter: "https://twitter.com/YINKAOKUNUSI",
    linkedin: "https://www.linkedin.com/in/yinka-okunusi-95212b16/",
  },
  {
    img: <img src={mayowa} alt="" className="object-top" />,
    name: "Mayowa Oyebade",
    title: "Associate partner | Valuation Department",
    facebook: "https://web.facebook.com/AdemayowaOyebade",
    twitter: "https://x.com/therealyoaas",
    linkedin: "https://www.linkedin.com/in/mayowaoyebade/",
  },
  {
    img: <img src={toyosi} alt="" className="object-top" />,
    name: "Omotoyosi Aribalusi",
    title: "Agency Department",
    facebook: "https://web.facebook.com/therealyoaas/?_rdc=1&_rdr",
    twitter: "https://x.com/therealyoaas",
    linkedin: "https://www.linkedin.com/company/yinkaokunusiandassociates/mycompany/",
  },
  {
    img: <img src={adeola} alt="" className="object-top" />,
    name: "Ashimi Adeola",
    title: "Property Management",
    facebook: "https://web.facebook.com/therealyoaas/?_rdc=1&_rdr",
    twitter: "https://x.com/therealyoaas",
    linkedin: "https://www.linkedin.com/company/yinkaokunusiandassociates/mycompany/",
  },
  {
    img: <img src={kemi} alt="" className="object-top" />,
    name: "Jegede Oluwakemi C.",
    title: "Property Management",
    facebook: "https://web.facebook.com/therealyoaas/?_rdc=1&_rdr",
    twitter: "https://x.com/therealyoaas",
    linkedin: "https://www.linkedin.com/company/yinkaokunusiandassociates/mycompany/",
  },
];

const TeamCard = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-blue-50 py-[5rem] px-[3rem]">
      <div className="">
        <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true}>
          {team?.map((item, i) => (
            <div className="bg-blue-400 overflow-hidden w-[300px] h-[360px] rounded" key={i}>
              <div className="bg-white w-full h-[250px] overflow-hidden">
                {/* <img src={item.img} alt="" className="object-top" /> */}
                {item.img}
              </div>
              <div className=" text-white">
                <p className="font-bold text-[26px] text-center">{item.name}</p>
                <p className="text-[14px] text-center">{item.title}</p>
                <div className="flex items-center justify-center  space-x-3 mt-3 px-5">
                  <Link to={item.facebook}>
                    <CiFacebook size={25} />
                  </Link>
                  <Link to={item.twitter}>
                    <RiTwitterXLine size={25} />
                  </Link>
                  <Link to={item.linkedin}>
                    <CiLinkedin size={25} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TeamCard;
