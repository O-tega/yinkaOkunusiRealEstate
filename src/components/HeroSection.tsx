import React, { useRef, useState } from "react";
import WhiteButton from "./Button/WhiteButton";
import { ROUTES } from "@/constants/externalUrls";
import { CiVolumeMute } from "react-icons/ci";
import BlueWhiteButton from "./Button/BlueWhiteButton";

// const HeroSection: React.FC = () => {
//   const variant = {
//     visible: { scale: 1 },
//     hidden: { scale: 0 },
//   };

//   const logos = [
//     {
//       name: "flutter wave",
//       logo: <img src={flutterwaveWhite} alt="logos" className="w-[150px] md:w-[180px]" />,
//     },
//     {
//       name: "M-power",
//       logo: (
//         <div>
//           <img src={Mpower} alt="logos" className="w-[150px] md:w-[130px]" />
//         </div>
//       ),
//     },
//     {
//       name: "Enterscale",
//       logo: <img src={enterscaleWhite} alt="logos" className="w-[100px] md:w-[110px]" />,
//     },
//     {
//       name: "wicrypt",
//       logo: <img src={wicrypt} alt="logos" className="w-[80px] md:w-[80px]" />,
//     },
//     {
//       name: "kiboWhite",
//       logo: <img src={kiboWhite} alt="logos" className="w-[80px] md:w-[80px]" />,
//     },
//   ];
//   return (
//     <div className="w-[100%] mx-auto h-[calc(100vh-70px)]">
//       <div className="w-full mx-auto overflow-hidden bg-primary hidden md:block">
//         <div className="">
//           <div className=" flex justify-between ">
//             <div className=" px-20 md:flex hidden flex-col justify-center text-white bg-primary top-[-14rem] left-0 w-[55%] rounded-r-[60%] ">
//               <h1 className=" text-[55px] mx-auto leading-[1.2em]">
//                 Get results in days, and participants you can follow up with.
//               </h1>

//               <p className="font-primary sm:text-[20px] text-[16px] w-[90%] py-5">
//                 Actionable, unbiased survey insights 3X faster than traditional methods.
//               </p>

//               <div className="flex space-x-4 mt-5">
//                 <Link to="mailto:support@enterscale.com">
//                   <PrimaryButton
//                     text="Request Demo"
//                     css="sm:w-[186px]  w-[150px] text-black bg-white active:bg-blue-300"
//                     variant="transparent"
//                   />
//                 </Link>
//               </div>
//               <div className="pt-10">
//                 <div className="flex items-center space-x-10 mt-10">
//                   {logos.slice(0, 2).map((item, i) => (
//                     <div key={i}> {item.logo}</div>
//                   ))}
//                 </div>
//                 <div className="flex items-center space-x-10 mt-3">
//                   {logos.slice(2).map((item, i) => (
//                     <div key={i}> {item.logo}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-[60%] relative">
//               <img src={herorunway} alt="Hero" className=" h-[calc(100vh-70px)] object-cover" />
//               <motion.div
//                 className="absolute w-full h-full left-0 top-[-1.5em] flex justify-center items-center"
//                 variants={variant}
//                 initial="hidden"
//                 whileInView="visible"
//               >
//                 <div className="w-[520px] overflow-hidden">
//                   <img
//                     src={ASSETS.GIFS.HeaderGIF}
//                     width={500}
//                     height={500}
//                     alt="example pic"
//                     className="min-w-[600px]"
//                   />
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-screen overflow-hidden bg-primary md:hidden relative">
//         <div className="w-full overflow-hidden relative">
//           <img src={herorunway} alt="Hero" className="h-[400px] object-cover" />
//           <motion.div
//             className="absolute w-full h-full left-0 top-0 flex justify-center items-start"
//             variants={variant}
//             initial="hidden"
//             whileInView="visible"
//           >
//             <div className="w-[300px] overflow-hidden">
//               <img
//                 src={ASSETS.GIFS.HeaderGIF}
//                 width={500}
//                 height={500}
//                 alt="example pic"
//                 className="min-w-[350px] mt-10"
//               />
//             </div>
//           </motion.div>
//         </div>
//         <div className="flex justify-center w-full h-full">
//           <div className=" w-full md:hidden h-full flex justify-center text-white bg-primary">
//             <div className="pt-5 px-5">
//               <h1 className=" text-[28px] leading-[1.2em]">
//                 Get results in days, and participants you can follow up with.
//               </h1>

//               <p className="font-primary text-[16px] mt-[1.2em]">
//                 Actionable, unbiased survey insights 3X faster than traditional methods.
//               </p>

//               <div className="flex space-x-4 mt-[2rem]">
//                 <Link to="mailto:support@enterscale.com">
//                   <PrimaryButton
//                     text="Request Demo"
//                     css="sm:w-[186px]  w-[150px] text-black bg-white active:bg-blue-300"
//                     variant="transparent"
//                   />
//                 </Link>
//               </div>
//               <div className="flex items-center space-x-5 mt-8">
//                 {logos.slice(0, 2).map((item, i) => (
//                   <div key={i}> {item.logo}</div>
//                 ))}
//               </div>

//               <div className="flex items-center space-x-5 mt-3">
//                 {logos.slice(2).map((item, i) => (
//                   <div key={i}> {item.logo}</div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const HeroSection: React.FC = () => {
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleUnmute = () => {
    setMuted(false);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };
  return (
    <div className="w-[100%] mx-auto md:h-full h-[600px]">
      <div className="w-full mx-auto h-full  bg-primary pb-[3rem] md:block ">
        <div className="pt-[5rem]">
          <h1 className=" md:text-[80px] text-[40px] mx-auto leading-[1.2em] text-white text-center">
            You deserve the upper hand.
          </h1>
          <p className="font-primary md:text-[24px] pt-3 md:mt-0 text-[14px] text-white text-center">
            See what your audience cares about. Build campaigns that matter. Drive engagement that lasts.
          </p>
          <p className="font-[600] md:text-[24px] pt-3 md:mt-0 text-[14px] text-white text-center">
            All from one ethical, data-driven platform.
          </p>
          <div className="flex items-center space-x-7 justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC-KbRjjhExwbHkOurEtdNFQ"
              className="flex justify-center mt-5"
            >
              <WhiteButton text={"Book a demo"} css="text-black" buttonId="book_a_demo_1" />
            </a>
            <a href={`${ROUTES.LOGIN}/register`} className="flex justify-center mt-5">
              <BlueWhiteButton text={"See pricing"} css="text-black" buttonId="see_pricing1" />
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-10 md:mt-[3rem]">
          <div className="md:w-[75%] w-[95%]  md:min-h-[calc(100vh-130px)] h-[270px] border-[#959DF3] bg-white border-[0.8rem] rounded-[2rem] flex justify-start items-start overflow-hidden relative">
            {/* <img src={ASSETS.LandingPage.businessWoman} alt="" className="object-cover object-top h-full w-full" /> */}
            <video
              ref={videoRef}
              src="https://mooyi-prod-storage.fra1.digitaloceanspaces.com/Mooyi_FB_Assets/Video/M4B11%20(1).mp4"
              className="w-[380px] md:w-full h-[250px] md:h-full object-cover"
              autoPlay
              // muted
              muted={muted}
              loop
              playsInline
              controls={false} // If you want to hide the default controls
              onClick={handleVideoClick} // Toggle pause/play on click
            ></video>
            {/* <div className="absolute top-0 flex h-[600px] z-10 pointer-events-auto items-center w-full justify-center"> */}
            {muted && (
              <div
                onClick={handleUnmute}
                className="w-[70px] h-[70px] cursor-pointer absolute md:bottom-[40%] md:right-[50%] right-[40%] bottom-[35%] rounded-full flex items-center justify-center p-1 bg-primary text-white"
              >
                <CiVolumeMute size={40} />
              </div>
              // <button className=" bg-white px-4 py-2 rounded" >
              //   Unmute
              // </button>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
