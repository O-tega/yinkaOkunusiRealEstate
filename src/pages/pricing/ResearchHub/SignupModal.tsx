import React from "react";
import ModalWithoutClose from "@/components/ModalWithoutClose";
import { IoCloseOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import SecondaryInput from "@/components/Inputs/SecondaryInput";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useMutation } from "@tanstack/react-query";
import BlueButton from "@/components/Button/BlueButton";
import { TQuotation } from "@/types/formTypes";
import Logo from "@/assets/images/MooyiFBLogo.svg";
// import CheckBox from "@/components/Inputs/CheckBox";
import { approveTopUp, paymentService } from "@/service/paymentService";
import Toast from "@/config/toast";
import { ROUTES } from "@/constants/externalUrls";
// import { queryClient } from "@/config/gateway";

const publicKey =
  import.meta.env.VITE_REACT_APP_NODE_ENV !== "production"
    ? import.meta.env.VITE_REACT_APP_FLW_KEY
    : import.meta.env.VITE_REACT_APP_FLW_LIVE_KEY;

type TSignupModal = {
  onClose: () => void;
  data: TQuotation | undefined;
};

const SignupModal: React.FC<TSignupModal> = ({ onClose, data }) => {
  const quoteData = data;
  const initialValues = {
    email: "",
    password: "",
    // agree: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Enter a valid email address").required("This is a required field"),
    password: Yup.string().required("This is a required field").min(8, "Password must be at least 8 characters long."),
  });

  const onSubmit = async (data) => {
    const payload = {
      researchType: quoteData?.researchType,
      numberOfResponses: quoteData?.responses,
      audienceType: quoteData?.audienceType,
      country: quoteData?.country,
      LGA: quoteData?.lga[0]?.value,
      email: data.email,
      password: data.password,
    };
    mutate(payload);
    // navigate("");
  };

  const price = data !== null ? data?.price : 0;

  const { handleChange, values, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const configs = {
    public_key: publicKey,
    tx_ref: `${Date.now()}`,
    amount: 0,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: values.email,
      phone_number: `customer phone`,
      name: "customer name",
    },
    customizations: {
      title: "MOOYI",
      description: "Plan Upgrade",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const initializePayment = useFlutterwave(configs);

  const handleNavigate = () => {
    window.location.href = `${ROUTES.LOGIN}`;
  };

  const { mutate: mutateTopUp } = useMutation({
    mutationFn: approveTopUp,
    onSuccess: () => {
      Toast.success("subscription successful.");
      closePaymentModal();
      handleNavigate();
    },
    onError: () => {
      Toast.error("Try again.");
    },
  });

  const { mutate } = useMutation({
    mutationFn: paymentService,
    onSuccess: (data) => {
      configs.amount = price as number;
      initializePayment({
        callback: (response) => {
          const userData = {
            tx_ref: data?.data?.tx_ref,
            transactionId: response?.transaction_id,
          };
          mutateTopUp(userData);
        },
        onClose: () => {},
      });
    },
    onError: () => {
      Toast.error("Try again.");
    },
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  const disableButton = !values.password || !values.email

  return (
    <ModalWithoutClose>
      <div className="w-[1042px] rounded-xl overflow-hidden flex items-start">
        <div className="w-[55%] p-5">
          <div className="w-full bg-white pr-5 py-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className=""></div>
                <img src={Logo} alt="" className="w-[130px]" />
              </div>
            </div>
          </div>
          <div className="py-5">
            <p className="font-secondary text-[32px] px-5 leading-tight">Just one step, please fill in your details to proceed.</p>
          </div>
          <div className="bg-white">
            <form action="" onSubmit={handleSubmit} className="mt-2">
              <div className="px-5">
                <div className="w-full">
                  <SecondaryInput
                    text="Email address"
                    placeholder="name@mail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    error={getError("email")}
                    type="text"
                  />
                </div>
                <div className="w-full mt-2">
                  <SecondaryInput
                    text="Set a password"
                    placeholder="8+ characters"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name="password"
                    error={getError("password")}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-5 ml-5 mb-5">
                {/* <div className="mt-1">
                  <CheckBox onChange={handleChange} name="agree" value={values.agree} />
                </div> */}
                <p className="text-[16px]">
                  By clicking the button, you are creating a Mooyi account and you agree to our{" "}
                  <a
                    href="https://www.usemooyi.com/terms-of-use"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 font-medium "
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.usemooyi.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 font-medium"
                  >
                    Privacy Policy.
                  </a>
                </p>
              </div>
              <div className="flex px-5 py-5">
                <div className="flex space-x-4 w-full">
                  <BlueButton
                    text={`Proceed`}
                    disabled={disableButton}
                    type="submit"
                    buttonId="subscription_button"
                    css="w-[60%]"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[45%] h-[600px] bg-blue-50 p-5">
          <div className="flex justify-end">
            <div
              className="w-[20px] h-[20px] rounded-full p-1 flex items-center justify-center bg-white cursor-pointer"
              onClick={onClose}
            >
              <IoCloseOutline />
            </div>
          </div>
          <div className="hidden md:block mx-10 p-5 bg-white mt-2">
            <p className="font-[500] text-[16px] p-1 border bg-white">Estimate</p>
            <div className="bg-white border-x min-h-[60%] flex flex-col">
              <div className="p-5 space-y-5 h-[350px] overflow-y-auto">
                <div>
                  <div>
                    {data?.researchType !== "" && (
                      <>
                        <p className="text-[13px] font-[500]">Research</p>
                        <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{data?.researchType}</div>
                        <hr className="w-full mt-2" />
                      </>
                    )}
                  </div>
                  <div>
                    {data?.responses && (
                      <>
                        <p className="text-[13px] font-[500]">Responses</p>
                        <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{data?.responses}</div>
                        <hr className="w-full mt-2" />
                      </>
                    )}
                  </div>
                  {data?.audienceType !== "" && (
                    <>
                      <p className="text-[13px] font-[500]">Audience</p>
                      <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{data?.audienceType}</div>
                      <hr className="w-full mt-2" />
                    </>
                  )}
                </div>
                <div>
                  {data?.country !== "" && (
                    <>
                      <p className="text-[13px] font-[500]">Country</p>
                      <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{data?.country}</div>
                      <hr className="w-full mt-2" />
                    </>
                  )}
                </div>
                <div>
                  {data?.state.length !== 0 && (
                    <div>
                      <p>State</p>
                      <ul className="space-y-2">
                        {data?.state.map((el, i) => (
                          <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                            {el.label}
                          </li>
                        ))}
                      </ul>
                      <hr className="w-full mt-2" />
                    </div>
                  )}
                </div>
                <div>
                  {data?.lga?.length !== 0 && (
                    <div>
                      <p>Local Government Area(s)</p>
                      <ul className="space-y-2">
                        {data?.lga?.map((el, i) => (
                          <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                            {el.label}
                          </li>
                        ))}
                      </ul>
                      <hr className="w-full mt-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 border bg-white">
              <div className="flex flex-col md:block items-center w-full text-center">
                <p>Estimated price</p>
                <p className="font-[700] text-[32px] text-primary ">
                  {data?.price !== null ? `$${data?.price}` : "$0.00"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalWithoutClose>
  );
};

export default SignupModal;
