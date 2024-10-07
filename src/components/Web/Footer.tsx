import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo from "@/assets/images/MooyiFBLogo.svg";
import WhiteButton from "../Button/WhiteButton";
import CTAs from "@/assets/images/mooyi/CTAs.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
import { ASSETS } from "@/assets/images/Assets";

const Footer = () => {
  const companyLinks = [
    { name: "Why Mooyi", link: "/why-mooyi" },
    { name: "Pricing", link: "/pricing" },
    { name: "FAQs", link: "/faq" },
    { name: "Blog", link: "https://blog.usemooyi.com" },
  ];

  const LegalLinks = [
    { name: "Privacy policy", link: "/privacy-policy" },
    { name: "Cookie policy", link: "/cookie-policy" },
    { name: "Terms of use", link: "/terms-of-use" },
  ];

  // const useCaseLinks = [
  //   { name: "Brand Tracking", link: "/solutions/brand-tracking" },
  //   { name: "Customer Feedback", link: "/solutions/customer-feedback" },
  //   { name: "Customer Profiling", link: "/solutions/customer-profiling" },
  //   { name: "Market Analysis", link: "/solutions/market-analysis" },
  //   { name: "New Product Development", link: "/solutions/product-development" },
  //   { name: "Lead Acquisition", link: "/solutions/lead-acquisition" },
  //   { name: "Customer Engagement", link: "/solutions/customer-engagement" },
  //   { name: "Event Feedback", link: "/solutions/event-feedback" },
  //   { name: "Creative Testing", link: "/solutions/creative-testing" },
  // ];

  const socialIcons = [
    { icon: FaFacebook, link: "https://www.facebook.com/mooyi.africa?mibextid=LQQJ4d" },
    { icon: FaSquareXTwitter, link: "https://x.com/mooyiafrica?s=21&t=z3mhh3-Ie8KzpOqK2ePxzA" },
    { icon: FaInstagram, link: "https://www.instagram.com/mooyi.africa?igsh=MThmZXRuZ242NXhoOA==" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/mooyi-africa/" },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  // console.log(currentPath);

  const paths = ["/pricing", "/pricing/research-hub", "/pricing/custom", "/pricing/engagement-hub"];

  return (
    <div className=" md:p-[4rem] p-2 bg-[#F1F1FC] z-10 md:mx-auto w-full font-light sm:text-right text-center">
      <div className="rounded-1xl w-full flex justify-center mt-4 md:mt-0">
        <div className="text-white text-center md:w-full px-2 rounded-2xl py-6 overflow-hidden relative md:h-[252px] h-[200px] w-full">
          <div className="absolute left-0 top-[-1rem] w-[100%]">
            <img src={CTAs} alt="footer background" className="w-full h-[250px] md:h-[350px]" />
          </div>
          <div className=" absolute top-0 w-full pt-9 left-0 md:pt-12">
            {paths.includes(currentPath) ? (
              <p className="font-secondary md:text-[40px] text-[24px]">
                Need a solution that fits your business needs?
              </p>
            ) : (
              <p className="md:text-[24px] text-[15px] ">Stop guessing. Start knowing.</p>
            )}
            {paths.includes(currentPath) ? (
              <p className="md:text-[24px] text-[15px]">Let’s create a personalised plan tailored just for you.</p>
            ) : (
              <p className="font-secondary md:text-[40px] text-[24px]">Get started with Mooyi today</p>
            )}
            <div className="flex justify-center pt-3">
              <Link
                to={currentPath === "/pricing" ? "mailto:support@enterscale.com" : `${ROUTES.LOGIN}/register`}
                rel="noreferrer"
              >
                <WhiteButton
                  text={currentPath === "/pricing" ? "Contact us" : "Get started"}
                  css="text-black"
                  buttonId="footer_get_started"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start md:justify-between justify-center space-x-2 px-5 md:px-0 md:space-x-0 pt-10">
        <div className="space-y-1 w-[50%] md:w-fit">
          <img src={Logo} alt="Logo" className="md:w-[185px] w-[100px]" />
          <p className="md:text-[14px] text-[12px] font-[600] text-left pt-2 ">Your Data is Protected and Secure</p>
          <p className="md:text-[14px] text-[12px] text-left md:w-[35%] w-[90%] ">
            Mooyi is built to comply with all applicable data protection regulations.
          </p>
          <div className="md:w-[165px] w-[100px] flex ">
            <img src={ASSETS.LandingPage.ndprLogo} alt="" className="" />
          </div>
        </div>
        {/* <div className="w-full bg-[#F5F7FE99] md:h-[370px] py-10 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-center  md:justify-between md:px-[5rem] px-5 h-full">
          <div className="md:w-[347px] w-[200px] flex md:h-[272px]">
            <img src={ASSETS.LandingPage.ndprLogo} alt="" className="" />
          </div>
          <div className="md:w-[55%] flex flex-col justify-center">
            <p className="md:text-[40px] text-[24px] font-[500] text-center md:text-left">
              Your Data is Protected and Secure
            </p>
            <h1 className="w-full md:text-left text-center md:text-[20px] text-[12px] font-[400]">
              Mooyi is built to comply with all applicable data protection regulations, and industry best practices,
              ensuring that all information remains private, secure, and only used with your consent.
            </h1>
          </div>
        </div>
      </div> */}
        <div className="">
          <p className="md:text-[18px] text-[14px] font-[600] text-left">Company</p>
          <ul className="space-y-3 text-left pt-4">
            {companyLinks.map((item, i) => (
              <li key={i} className="hover:text-primary text-[12px] md:text-[16px] ">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex flex-col">
          <p className="md:text-[18px] text-[16px] font-[500] text-left">Use case</p>
          <ul className="space-y-3 text-left pt-4">
            {useCaseLinks.map((item, i) => (
              <li key={i} className="hover:text-primary text-[14px] md:text-[16px]">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div> */}
        <div className="">
          <p className="md:text-[18px] text-[14px] font-[600] text-left">Legal</p>
          <ul className="space-y-3 text-left pt-4">
            {LegalLinks.map((item, i) => (
              <li key={i} className="hover:text-primary text-[12px] md:text-[16px] ">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:block">
          <div className="space-x-3 flex items-center">
            {socialIcons.map((item, i) => (
              <span key={i} className="hover:text-primary">
                <Link to={item.link}>
                  <item.icon size={20} />
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="sm:flex my-[1em]" />
      <div className="flex items-center justify-between md:block">
        <p className="font-[500] md:text-[16px] text-[12px] text-left md:text-center">
          © 2024 Mooyi™. All right reserved.
        </p>
        <div className="md:hidden">
          <div className="space-x-3 flex items-center">
            {socialIcons.map((item, i) => (
              <span key={i} className="hover:text-primary">
                <Link to={item.link}>
                  <item.icon size={20} />
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
