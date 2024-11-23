// import HeroSection from "@/components/HeroSection";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AFRES from "@/assets/images/logos/AFRES.jpg";
import AMCON from "@/assets/images/logos/AMCON.png";
import ESVARBON from "@/assets/images/logos/ESVARBON.jpg";
import FIABCI from "@/assets/images/logos/FIABCI.jpg";
import niesv from "@/assets/images/logos/niesv.jpg";
import bifm from "@/assets/images/logos/bifm.png";

import CIAN from "@/assets/images/logos/CIAN.png";
import Ecobank from "@/assets/images/logos/Ecobank.png";
import FIRS from "@/assets/images/logos/FIRS.png";
import PARALEX from "@/assets/images/logos/PARALEX.png";
import loveworld from "@/assets/images/logos/loveworld.png";
import union from "@/assets/images/logos/union-homes.png";

import realEstate from "@/assets/propertyImg/realEstate.png";
// import projectDevelopment from "@/assets/ourServiceImg/propertyDevelopment.jpg";
// import projectManagement from "@/assets/ourServiceImg/projectManagement.jpg";
// import urbanConstruction from "@/assets/ourServiceImg/urbanPropertyDevelopment.jpg";
// import estateAgency from "@/assets/ourServiceImg/estateAgency.jpg";
// import assetValuation from "@/assets/ourServiceImg/assetValuation.jpg";
// import auctioneering from "@/assets/ourServiceImg/auctioneering.jpg";
// import estateAcquiction from "@/assets/ourServiceImg/estateAcquiction.jpg";
// import facilityManagement from "@/assets/ourServiceImg/facilityManagement.jpg";
// import housingFinance from "@/assets/ourServiceImg/housingFinance.jpg";
// import ratingAdvisory from "@/assets/ourServiceImg/ratingAdvisory.jpg";
// import propertyAssetAudit from "@/assets/ourServiceImg/propertyAssetAudit.jpg";
import CarouselCard from "@/components/Web/CarouselCArd";
import MobileCarousel from "@/components/MobileCarosel";
import FaqHero from "./faq/faqHero";
import { HouseData } from "@/data/houseData";
import { propertyData } from "@/data/propertyData";
import Marquee from "react-fast-marquee";
import TeamCard from "@/components/TeamCard";
import { useQuery } from "@tanstack/react-query";
import { getLatestProperties, getProperties, getServices } from "@/service/propertyServices";
import ScaleLoader from "react-spinners/ScaleLoader";
import Loader from "@/components/Loader/Loader";

const LandingPage = () => {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const { data } = useQuery({ queryKey: ["allproperties"], queryFn: getProperties });
  const { data: services, isPending: loadingService } = useQuery({ queryKey: ["services"], queryFn: getServices });
  const { data: recentPropertiesList, isPending: loadingLatest } = useQuery({
    queryKey: ["services"],
    queryFn: getLatestProperties,
  });
  console.log({ data, services });

  const handleHover = (id: number | null) => {
    setHover(hover === id ? null : id);
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 2500);
    return () => clearTimeout(interval);
  }, [count]);

  const homeLoading = loadingService || loadingLatest;

  console.log(homeLoading);

  // const OurserviceCard = [
  //   {
  //     img: projectDevelopment,
  //     title: "Property Development",
  //     text: "We conduct feasibility studies for real estate projects, ensuring informed decisions and successful execution. We also assist in securing funding through partnerships with banks, insurance, and trust companies.",
  //   },
  //   {
  //     img: projectManagement,
  //     title: "Project Management",
  //     text: "Our team manages property development projects, ensuring smooth coordination and execution. We act as the client’s expert, overseeing the entire process, implementing decisions, and maximizing returns—whether economic, social, or prestige-based.",
  //   },
  //   {
  //     img: facilityManagement,
  //     title: "Facility Management",
  //     text: "We manage and coordinate the maintenance of building facilities, including lifts, escalators, power generators, air-conditioners, and more. Our services cover all aspects of building maintenance and property management, tailored to meet clients' specific needs, including space and service facility management.",
  //   },
  //   {
  //     img: urbanConstruction,
  //     title: "Urban Property Management",
  //     text: "We offer full management of urban properties, handling rent collection, repairs, maintenance, and record-keeping. Our services cater to both private and public estates, aiming to achieve profit, efficiency, and social goals, while maximizing returns for property owners throughout the property's lifespan.",
  //   },
  //   {
  //     img: estateAgency,
  //     title: "Estate Agency",
  //     text: "We specialize in finding properties tailored to customer needs, handling purchases, sales, and lettings of various properties. Our transparent process ensures that location, price, and amenities are clearly provided to match client requirements.",
  //   },
  //   {
  //     img: propertyAssetAudit,
  //     title: "Property Asset Audit",
  //     text: "We appraise property portfolios to optimize resource deployment and integrate recommendations into strategic planning. Our services include verifying, perfecting, and updating titles for landed properties to ensure efficient policy formulation.",
  //   },
  //   {
  //     img: assetValuation,
  //     title: "Assets Valuation",
  //     text: "We conduct property valuations for sales, purchases, and all asset types, including land, buildings, machinery, vehicles, and equipment. Additionally, we issue Certificates of Valuation for these assets, tailored to various purposes.",
  //   },
  //   {
  //     img: estateAcquiction,
  //     title: "Assets Acquisition",
  //     text: "We prepare compensation claims for compulsory property acquisition and handle negotiations with the acquiring authority. Our expertise ensures a smooth, legally compliant process, providing the knowledge needed for informed decision-making from start to finish.",
  //   },
  //   {
  //     img: ratingAdvisory,
  //     title: "Rating Advisory",
  //     text: "We offer advisory and implementation services for local government financing through property rating. This includes preparing rating valuation lists, property assessments, court attendance for rating disputes, and administering tenement rate collection on behalf of rating authorities.",
  //   },
  //   {
  //     img: auctioneering,
  //     title: "Auctioneering",
  //     text: "As licensed auctioneers, we conduct public auctions for various properties, including land, machinery, vehicles, and household goods. We also provide after-sales support to ensure your satisfaction with your recent acquisition.",
  //   },
  //   {
  //     img: housingFinance,
  //     title: "Housing Finanace And Delivery Services",
  //     text: "We provide advisory services for wholesale and mass housing projects from inception to final disposal. Additionally, we offer mortgage financing advice to individual homebuyers and corporate organizations developing staff housing schemes.",
  //   },
  // ];

  const affliate = [
    { id: 1, img: <img src={niesv} alt="niesv.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 2, img: <img src={AFRES} alt="AFRES.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 3, img: <img src={FIABCI} alt="FIABCI.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 4, img: <img src={bifm} alt="bifm.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 5, img: <img src={ESVARBON} alt="ESVARBON.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 6, img: <img src={CIAN} alt="AMCON.png" className="w-[200px] h-[200px] object-contain" /> },
  ];

  const clients = [
    { id: 1, img: <img src={loveworld} alt="niesv.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 2, img: <img src={FIRS} alt="AFRES.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 3, img: <img src={AMCON} alt="FIABCI.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 4, img: <img src={PARALEX} alt="bifm.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 5, img: <img src={Ecobank} alt="ESVARBON.png" className="w-[200px] h-[200px] object-contain" /> },
    { id: 6, img: <img src={union} alt="AMCON.png" className="w-[200px] h-[200px] object-contain" /> },
  ];

  const [search, setSearch] = useState<string>("");

  const handleSearch = (searchTerm: string) => {
    const filteredData = HouseData.filter((item) => {
      return item.content.some((contentItem) => contentItem.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    // setIndex(filteredData[0]?.id);
    window.location.hash = `#${filteredData[0]?.id}`;
    setSearch("");
  };

  if (homeLoading) {
    return <Loader />;
  }

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mooyi | Grow Your Business with Our All-in-One Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      {/* <HeroSection /> */}
      <FaqHero
        title="Turning Property Dreams into Reality"
        desc="From Vision to Keys in Hand."
        desktopImg={faqBackground}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className="md:px-[7rem] py-[5rem] md:py-[5rem]">
        <div className="md:flex items-center justify-between">
          <p className="md:text-[40px] text-[24px] font-secondary pb-5 text-center md:text-left">
            Explore our recent properties
          </p>
        </div>
        <div className="mt-2 md:grid grid-cols-3 gap-y-4 hidden ">
          {recentPropertiesList
            ?.slice(0, 6)
            ?.map((item, i) => (
              <CarouselCard
                key={i}
                id={item.l_id}
                title={item.l_type}
                text={item.l_title}
                img={item.l_img1}
                category={item.l_category}
                amount={item.l_amount}
                currency={item.l_currency}
                data={item}
              />
            ))}
        </div>
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        <div className="flex justify-center mt-16">
          <div className="md:w-[15%] w-[50%]">
            <Link to={`#`}>
              <PrimaryButton
                type="button"
                text="See more"
                css="rounded-md "
                variant="filled"
                buttonId="home_get_started_now_3"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-blue-100 md:h-[370px] h-full md:px-[5rem] px-5 ">
        <div className="md:flex items-center justify-between h-full overflow-hidden">
          <div className="md:w-[50%] w-full  flex items-center pt-5">
            <p className="w-full text-center md:text-left md:text-[32px]  leading-tight text-[18px] font-[600]">
              YINKA OKUNUSI AND ASSOCIATES{" "}
              <span className="text-[24px] font-[400]">
                is a fast growing firm of chartered surveyors, estate surveyors and valuers, set up to render
                comprehensive and professional real estate consultancy in the building industry.
              </span>
            </p>
          </div>
          <div className="mt-16">
            <img src={realEstate} alt="" className=" w-[403px] md:w-[600px]" />
          </div>
        </div>
      </div>
      <div className="bg-white py-[3rem]">
        <div className="mt-2 md:px-[4rem] px-2 flex flex-col items-center text-[20px]">
          <p className="font-secondary md:text-[40px] text-[28px] md:pb-[2rem] pb-[5rem] text-center">Our services</p>
        </div>
        <div className="grid grid-cols-3 px-[3rem]">
          {services?.map((el, i) => (
            <div
              key={i}
              className="py-5 border-r border-b flex items-center justify-center flex-col relative cursor-pointer"
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="w-full px-5 h-[200px] overflow-hidden">
                <motion.img
                  src={`http://www.yinkaokunusiandassociates.com/images/service/${el?.imagePath}`}
                  alt="service-img"
                  className="object-cover"
                  initial={{ opacity: 1 }} // Initial opacity
                  animate={{ opacity: hover === i ? 0.1 : 1 }} // Change opacity on hover
                  transition={{ duration: 0.3 }} // Animation duration
                />
              </div>
              <div>
                <motion.p
                  className="absolute top-0 left-0  text-center h-[80%] w-full px-10 overflow-y-auto no-scrollbar"
                  initial={{ opacity: 0 }} // Hide text initially
                  animate={{ opacity: hover === i ? 1 : 0 }} // Show text on hover
                  transition={{ duration: 0.3 }} // Animation duration
                >
                  {el.serviceDetails}
                </motion.p>
              </div>
              <div className="mt-5">
                <p className="text-[24px] font-[600]">{el?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center py-[2em] flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="md:text-[38px] text-blue-400 underline md:w-[60%] font-bold ">Affiliated Bodies</p>
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-7 space-y-2 mt-3 px-1">
              <Marquee className="flex items-center justify-between pt-5">
                {affliate.map((el, i) => (
                  <div key={i} className="mr-[5rem]">
                    <span>{el.img}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TeamCard />
      </div>
      <div className="bg-white">
        <div className="text-center py-[2em] flex justify-center">
          <div>
            <div className="flex justify-center">
              <p className="md:text-[38px] text-blue-400 underline md:w-[60%] font-bold ">Our Clients</p>
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-7 space-y-2 mt-3 px-1">
              <Marquee className="flex items-center justify-between pt-5">
                {clients.map((el, i) => (
                  <div key={i} className="mr-[5rem]">
                    <span>{el.img}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
