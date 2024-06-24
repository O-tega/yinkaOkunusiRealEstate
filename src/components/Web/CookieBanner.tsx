export {};
import { useEffect, useState } from "react";
import Toggle from "react-toggle";
import BlueButton from "@/components/Button/BlueButton";
import { useCookies } from "react-cookie";
import BottomModal from "./BottomModal";
import ModalWithoutClose from "../ModalWithoutClose";
import GreyButton from "../Button/GreyButton";

type CookieType = "mooyi" | "strict" | "performance" | "targeting" | "functionality";

const CookieBanner = () => {
  const [showCookie, setShowCookie] = useState(false);
  const [showPreference, setPreference] = useState(false);
  const [active, setActive] = useState<CookieType[]>([]);
  const [cookies, setCookie] = useCookies(["mooyi", "strict", "performance", "targeting", "functionality"]);

  // console.log(active);

  const universalCookie = cookies.mooyi;
  const functionalityCookie = cookies.functionality;
  const targettingCookie = cookies.targeting;
  const performanceCookie = cookies.performance;
  const strictCookie = cookies.strict;

  useEffect(() => {
    if (
      universalCookie !== undefined ||
      functionalityCookie !== undefined ||
      targettingCookie !== undefined ||
      performanceCookie !== undefined ||
      strictCookie !== undefined
    ) {
      setShowCookie(true);
    }
  }, [functionalityCookie, performanceCookie, targettingCookie, universalCookie, strictCookie]);

  const handleChange = (id: CookieType) => {
    setActive((prevList) => {
      if (prevList.includes(id)) {
        return prevList.filter((i) => i !== id);
      } else {
        return [...prevList, id];
      }
    });
  };

  const handlePreference = (id: CookieType[]) => {
    setCookie("strict", "strict");
    if (id.length !== 0) {
      id.map((el) => setCookie(el, el));
    }
  };

  const preference = [
    {
      id: "strict",
      title: "Strictly Necessary Cookies",
      action: "Always active",
      content: "These cookies are required for our website to work correctly in your browser.",
    },
    {
      id: "performance",
      title: "Performance Cookies",
      content:
        "These cookies enable us to collect data in google analytics about how people use our website. This data helps us to improve our website for users.",
    },
    {
      id: "targetting",
      title: "Targeting Cookies",
      content: "These cookies enable us to identify users on our websites and build a profile of users’ interests.",
    },
    {
      id: "functionality",
      title: "Functionality Cookies",
      content:
        "These cookies enable us to remember the users’ site preferences and choices made on our website including username, region, and language. This allows our website to provide personalised features.",
    },
  ];

  return (
    <div>
      {showCookie ? null : (
        <div>
          {!showPreference && (
            <BottomModal>
              <div className={`w-full md:h-[40px] h-[250px] no-scrollbar overflow-y-auto}`}>
                <div className="flex items-center space-x-5">
                  <div className="md:flex items-center justify-between w-full px-12">
                    <div className="md:w-[50%]">
                      <p className="text-[14px] text-center md:text-left">
                        By clicking “Accept all cookies”, you agree to the storing of cookies on your device to enhance
                        site navigation, analyse site usage, and assist in our marketing efforts.{" "}
                      </p>
                    </div>
                    <div className="md:flex items-center justify-center md:space-x-8 mt-5 md:mt-0 space-y-3 md:space-y-0">
                      <p
                        className="text-primary underline md:text-right text-center mt-5 md:mt-0 cursor-pointer"
                        onClick={() => setPreference(!showPreference)}
                      >
                        Cookie Preference.{" "}
                      </p>
                      <div>
                        <BlueButton
                          text="Accept all cookies"
                          css="w-full"
                          onClick={() => setCookie("mooyi", "MooyiCookie")}
                        />
                      </div>
                      <div>
                        <GreyButton
                          text="Reject all cookies"
                          css="w-full bg-blue-600"
                          onClick={() => setShowCookie(true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BottomModal>
          )}
          <div className="">
            {showPreference && (
              <ModalWithoutClose>
                <div className="mt-5 md:w-[600px] w-full">
                  <p className="text-[14px]">
                    By clicking “Accept all cookies”, you agree to the storing of cookies on your device to enhance site
                    navigation, analyse site usage, and assist in our marketing efforts.
                  </p>
                  <p className="text-[20px] font-secondary font-[500] mt-3">Manage preference</p>
                  <div className="mt-3 space-y-5 border py-3">
                    {preference.map((el, i) => (
                      <div key={i} className={`px-3 pb-3 ${el.id === "functionality" ? "" : "border-b"}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-[500] font-secondary text-[14px]">{el.title}</p>
                          </div>
                          <div>
                            {el.id === "strict" ? (
                              <p className="text-primary font-[500] font-secondary text-[14px]">{el.action}</p>
                            ) : (
                              <Toggle
                                icons={false}
                                // checked={active}
                                onChange={() => handleChange(el.id as CookieType)}
                                className="toggle"
                              />
                            )}
                          </div>
                        </div>
                        <p className="w-[90%] text-[14px]">{el.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-2">
                    <BlueButton text="Save my preferences" type="submit" onClick={() => handlePreference(active)} />
                  </div>
                </div>
              </ModalWithoutClose>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CookieBanner;
