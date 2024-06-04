import PrimaryButton from "@/components/Button/PrimaryButton";
import React from "react";
import { GrFormCheckmark } from "react-icons/gr";

const data = [
  "$2 per response from individuals.",
  "Real-time access to survey results with dynamic charts.",
  "$4 per response from business owners.",
  "Top up survey responses at any time to gather more insights.",
  "Showcase customer reviews, feedback, and easily address concerns online.",
  "Access to online survey builder and audience panel.",
  "Generate QR code for easy review collection.",
];

const PayAsYouGo: React.FC = () => {
  return (
    <div className="w-[80%] flex items-center mx-auto gap-[2em] my-[4em]">
      <div className="w-[70%] space-y-4">
        <p className="text-4xl font-secondary w-[80%]">Do more with our pay-as-you-go starter plan</p>
        <p className="font-secondary">Key plan features</p>

        <div className="grid grid-cols-2 gap-2">
          {data.map((el) => {
            return (
              <div key={el} className="text-sm text-gray-500 w-[90%] flex items-start space-x-4">
                <div className="w-[15px] h-[15px] rounded-full bg-[#EBF1FF] flex items-center justify-center mt-1">
                  {" "}
                  <GrFormCheckmark className="text-primary" />
                </div>

                <p> {el}</p>
              </div>
            );
          })}
        </div>

        <p className="font-secondary pt-6">Get access to more features on our Premium plans.</p>
      </div>

      <div className="w-[30%] border-[1px] rounded-lg p-4 space-y-4">
        <div className="bg-[#EBF1FF] h-[100px] rounded-md w-[100%] p-4 flex flex-col justify-center">
          <p className="text-lg text-primary font-semibold">Starter plan</p>
          <p className="text-sm text-gray-600">For anyone</p>
        </div>

        <p className="text-sm text-gray-500">Get up to 100 free emails every month </p>

        <p className="text-2xl font-semibold py-6">Free</p>

        <PrimaryButton text="Try for free" type="button" variant={"filled"} />

        <p className="text-xs text-gray-600">
          Note that we charge $2 per response from individuals and $4 per response from Business owners. For more
          enquiry,{" "}
          <a href="" className="text-primary underline underline-offset-1">
            contact us.
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default PayAsYouGo;
