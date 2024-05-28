export {};
// "use client";
// import ModalWithoutClose from "components/ModalWithoutClose";
// import React, { useEffect, useState } from "react";
// import mooyiLogo from "assets/images/mooyihead.svg";
// import Image from "next/image";
// import Link from "next/link";
// import CookieConsent from "react-cookie-consent";
// import Toggle from "react-toggle";
// import cookie from "react-cookies";
// import BlueButton from "components/Button/BlueButton";

// const CookieBanner = () => {
//   const [showCookie, setShowCookie] = useState(false);
//   const [showPreference, setPreference] = useState(false);
//   const [active, setActive] = useState<null | number>(null);

//   console.log(cookie.loadAll().MooyiCookie);

//   useEffect(() => {
//     const cookies = cookie.loadAll().MooyiCookie;
//     if (cookies !== undefined) {
//       setShowCookie(false);
//     } else setShowCookie(true);
//   }, []);

//   const handleChange = (id: number) => {
//     setActive(active !== id ? id : null);
//   };

//   const preference = [
//     {
//       id: 1,
//       title: "Strictly Necessary Cookies",
//       action: "Always active",
//       content:
//         "These cookies are required for our website to work correctly in your browser.",
//     },
//     {
//       id: 2,
//       title: "Performance Cookies",
//       content:
//         "These cookies enable us to collect data in google analytics about how people use our website. This data helps us to improve our website for users.",
//     },
//     {
//       id: 3,
//       title: "Targeting Cookies",
//       content:
//         "These cookies enable us to identify users on our websites and build a profile of users’ interests.",
//     },
//     {
//       id: 4,
//       title: "Functionality Cookies",
//       content:
//         "These cookies enable us to remember the users’ site preferences and choices made on our website including username, region, and language. This allows our website to provide personalised features.",
//     },
//   ];

//   return (
//     <div>
//       {showCookie && (
//         <ModalWithoutClose>
//           <div
//             className={`w-[640px] ${
//               showPreference ? "h-[500px]" : "h-fit"
//             } no-scrollbar overflow-y-auto`}
//           >
//             <div className="flex items-center space-x-5">
//               <div>
//                 <Image src={mooyiLogo} alt="mooyi logo" />
//               </div>
//               <div>
//                 <p className="font-[500] text-[24px] font-secondary">
//                   Our Privacy Statement & Cookie Policy
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-5 mt-5">
//               <p>
//                 We prioritize your privacy and handle your personal information
//                 with utmost care, utilizing it solely to enhance your experience
//                 on this website. By continuing to use this platform, you consent
//                 to the processing of your data by Mooyi, its subsidiaries, and
//                 partners, in accordance with NDPR/GDPR and relevant regulations,
//                 as outlined in our{" "}
//                 <Link href="#" className="text-primary underline">
//                   Privacy Policy
//                 </Link>{" "}
//                 .
//               </p>
//               <p>
//                 Additionally, our website utilizes cookies to improve your
//                 browsing experience. You can adjust your preferences using the
//                 option provided below. For further details regarding the cookies
//                 we use, please refer to our{" "}
//                 <Link href="#" className="text-primary underline">
//                   Cookie Policy
//                 </Link>{" "}
//                 .
//               </p>
//             </div>
//             <div className="">
//               <CookieConsent
//                 location="none"
//                 buttonText="Accept all cookies"
//                 enableDeclineButton
//                 declineButtonText="Reject all cookies"
//                 style={{
//                   width: "600px",
//                   backgroundColor: "white",
//                   position: "relative",
//                   paddingLeft: "0px",
//                   alignContent: "left",
//                   justifyContent: "left",
//                   display: "flex",
//                 }}
//                 buttonStyle={{
//                   backgroundColor: "#1D19AF",
//                   color: "white",
//                   borderRadius: "4px",
//                   width: "200px",
//                   height: "50px",
//                 }}
//                 declineButtonStyle={{
//                   backgroundColor: "#EBF1FF",
//                   color: "#1D19AF ",
//                   borderRadius: "4px",
//                   width: "200px",
//                   height: "50px",
//                 }}
//                 cookieName="MooyiCookie"
//                 onAccept={()=>setShowCookie(false)}
//                 onDecline={()=>setShowCookie(false)}
//               ></CookieConsent>
//             </div>
//             <div className="mt-2">
//               <p
//                 className="text-primary underline text-right cursor-pointer"
//                 onClick={() => setPreference(!showPreference)}
//               >
//                 Cookie preference
//               </p>
//               {showPreference && (
//                 <div className="mt-5">
//                   <p className="text-[20px] font-secondary font-[500]">
//                     Manage preference
//                   </p>
//                   <div className="mt-3 space-y-5 border py-3 rounded-lg">
//                     {preference.map((el, i) => (
//                       <div
//                         key={i}
//                         className={`px-3 pb-3 ${el.id === 4 ? "" : "border-b"}`}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="font-[500] font-secondary">
//                               {el.title}
//                             </p>
//                           </div>
//                           <div>
//                             {el.id === 1 ? (
//                               <p className="text-primary font-[500]">
//                                 {el.action}
//                               </p>
//                             ) : (
//                               <Toggle
//                                 icons={false}
//                                 // checked={active}
//                                 onChange={() => handleChange(el.id)}
//                                 className="toggle"
//                               />
//                             )}
//                           </div>
//                         </div>
//                         <p className="w-[90%]">{el.content}</p>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="flex justify-end mt-2">
//                     <BlueButton
//                       text="Save my preferences"
//                       type="submit"
//                       onClick={() => setShowCookie(false)}
//                     />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </ModalWithoutClose>
//       )}
//     </div>
//   );
// };

// export default CookieBanner;
