import { Link } from "react-router-dom";
// import BlueButton from "./Button/BlueButton";
// import { ROUTES } from "@/constants/externalUrls";
import checker from "@/assets/images/pricing/check.png";
import GreyButton from "./Button/GreyButton";

type Tplan = {
  title: string;
  subtitle: string;
  tag?: string | React.ReactNode;
  responses?: string;
  info: string;
  amount: number;
  featureTitle: string;
  features: string[];
  conversionRate?: number;
  toggle: boolean;
  planId?: string;
  buttonText: string;
};

const PlanCard = ({
  title,
  subtitle,
  tag,
  info,
  amount,
  featureTitle,
  features,
  conversionRate,
  toggle,
  // planId,
  buttonText,
}: Tplan) => {
  console.log(conversionRate);
  return (
    <div className="border rounded-2xl w-full h-[32rem] p-3 drop-shadow-md bg-white">
      <div className="bg-blue-100 p-5 rounded-t-xl h-[7rem]">
        <div className="flex justify-between">
          <p className="text-[20px] font-[600] text-primary">{title}</p>
          {tag !== "" || undefined ? (
            <div className="w-fit rounded flex items-center justify-center">
              <p className="text-primary  text-[12px]">{tag}</p>
            </div>
          ) : null}
        </div>
        <p className="text-grey-600 md:text-[15px] text-[13px] font-medium">{subtitle}</p>
      </div>
      <div className="mt-2 px-5">
        <p className="md:text-[13px] text-[14px] font-medium">{info}</p>
        {title === "Pro Plan" ? (
          <div>
            <p className="text-[38px] md:text-[40px] font-[600] mt-3"> Custom </p>
          </div>
        ) : (
          <div className="flex items-center space-x-3 mt-2">
            <p className="text-[38px] md:text-[40px] font-[600]">
              {conversionRate !== undefined
                ? toggle
                  ? `₦${((amount * conversionRate) as number).toLocaleString()}`
                  : `$${amount.toLocaleString()}`
                : `$${amount.toLocaleString()}`}
            </p>
            {amount === 0 ? null : <p className="font-[600] text-gray-500 ">Per month</p>}
          </div>
        )}
        <div className="mt-2">
          <Link to="/pricing">
            <GreyButton
              text={buttonText}
              type="button"
              css="w-full"
              buttonId={
                title === "Pro Plan" ? "eh_contact_us_3" : title === "Business Plan" ? "eh_buy_now_2" : "eh_buy_now_1"
              }
            />
          </Link>
        </div>
        <div className="my-3">
          <hr />
        </div>
        <div>
          <p className="font-secondary">{featureTitle}</p>
          {features !== undefined
            ? features.map((el: string, i: number) => (
                <div className="flex items-start space-x-3 mt-3" key={i}>
                  <div className="mt-1 w-[20px] h-[20px]">
                    <img src={checker} alt="" />
                  </div>
                  <p className="text-[12px] w-[90%] font-medium">{el}</p>
                </div>
              ))
            : null}
        </div>
        {/* <HashLink smooth to="/pricing/engagement-hub/#explore">
          <div className="flex items-center space-x-3 text-primary underline text-[12px] mt-5">
            <p>Explore all features</p>{" "}
          </div>
        </HashLink> */}
      </div>
    </div>
  );
};

export default PlanCard;
