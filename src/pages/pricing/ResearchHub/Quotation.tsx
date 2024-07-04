import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { TQuotation } from "@/types/formTypes";
import { useQuery } from "@tanstack/react-query";
import { getCity, getState } from "@/service/stateCities";
import SelectMultiple from "@/components/Inputs/MultiSelect";
import { Option } from "@/types/componentTypes";
import BlueButton from "@/components/Button/BlueButton";
import EmptyState from "@/components/EmptyState";
import emptyState from "@/assets/images/pricing/emptyEstimate.png";
import Modal from "@/components/Modal";
import Tooltip from "@/components/Tooltip";
import SecondarySelectInput from "@/components/Inputs/SecondarySelectInput";
import GreyButton from "@/components/Button/GreyButton";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

interface TProps {
  name: string;
}

type TLoad = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setQuoteData: React.Dispatch<React.SetStateAction<TQuotation | undefined>>;
};

const audienceType = [
  { label: "Select...", value: "" },
  { label: "Consumer", value: "consumer" },
  { label: "Business", value: "business" },
  { label: "Mobile agent", value: "mobileAgents" },
  { label: "Consumer and business", value: "consumer and business" },
];

const researchData = [
  { label: "Select...", value: "" },
  { label: "Field interview", value: "field" },
  { label: "Online surveys", value: "online" },
];

const countryData = [
  { label: "Select...", value: "" },
  { label: "Ghana", value: "Ghana" },
  { label: "Kenya", value: "Kenya" },
  { label: "Nigeria", value: "Nigeria" },
];

const validationSchema = Yup.object().shape({
  audienceType: Yup.string().required("Please fill in this field"),
  researchType: Yup.string().required("Please fill in this field"),
  country: Yup.string().required("Please fill in this field"),
  // state: Yup.string().required("Please fill in this field"),
  // lga: Yup.string().required("Please fill in this field"),
});

const Quotation: React.FC<TLoad> = ({ setLoading, setOpenSignup, setQuoteData }) => {
  const [newCityArray, setNewCityArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [responses, setResponses] = useState<number>(200);
  const [price, setPrice] = useState<null | number>(null);

  const initialValues: TQuotation = {
    audienceType: "",
    researchType: "",
    country: "",
    price: price,
    responses: responses,
    state: [] as Option[],
    lga: [] as Option[],
  };

  const onSubmit = async (data: TQuotation) => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setPrice(totalPrice);
    //   setQuoteData({ ...data, price: totalPrice });
    // }, 5000);
    console.log(data);
  };

  const getQuotation = () => {
    console.log("getQuote");
    const data = {
      audienceType: values.audienceType,
      researchType: values.researchType,
      country: values.country,
      responses: values.responses,
      state: values.state,
      lga: values.lga,
    };

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPrice(totalPrice);
      setQuoteData({ ...data, price: totalPrice });
    }, 5000);
  };

  const { handleChange, values, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  console.log(values);

  const researchPrice = values.researchType === "consumer" ? 2 : values.researchType === "business" ? 4 : 3;

  const totalPrice = responses * researchPrice;

  const clearForm = () => {
    Object.keys(values).forEach((key) => {
      if (Array.isArray(values[key])) {
        setFieldValue(key, []);
      } else {
        setFieldValue(key, "");
      }
    });
  };

  useEffect(() => {
    values?.state?.length > 1 && setFieldValue("lga", []);
  }, [setFieldValue, values?.state?.length]);

  const { data: stateData, refetch: refetchStates } = useQuery({
    queryKey: ["getState"],
    queryFn: () => getState(values.country),
  });

  const { data: cityData, refetch: refetchCities } = useQuery({
    queryKey: ["getCity"],
    queryFn: () => getCity(values.country),
  });

  useEffect(() => {
    if (values.country) {
      refetchStates();
      refetchCities();
    }
  }, [refetchCities, refetchStates, values.country]);

  const stateArray = stateData?.data?.states?.map((el: TProps) => ({
    label: el.name,
    value: el.name,
  }));
  const stateValue = values?.state?.map((el) => el.value);
  const cityValue = values?.lga?.map((el) => el.value);

  // const emptyCheck = stateValue.length === 0 || cityValue.length === 0;
  const emptyCheck =
    !values.audienceType ||
    !values.country ||
    !values.researchType ||
    stateValue?.length === 0 ||
    cityValue.length === 0;

  // const emptyStateCheck = stateValue.length !== 0 || cityValue.length !== 0;
  const emptyStateCheck =
    values.audienceType || values.country || values.researchType || stateValue.length !== 0 || cityValue.length !== 0;

  useEffect(() => {
    if (stateArray !== undefined) {
      const pickKey = (key: string) => {
        if (values.country === "Kenya") {
          for (const state in cityData) {
            const newKey = key?.replace(" County", "");
            const newState = state?.replace(" County", "");

            if (newKey === newState) {
              setNewCityArray(cityData[newKey]);
            }
          }
        } else if (values.country === "Ghana") {
          for (const state in cityData) {
            const newKey = key?.replace(" Region", "");
            const newState = state?.replace(" Region", "");

            if (newKey === newState) {
              setNewCityArray(cityData[newKey]);
            }
          }
        } else if (values.country === "Nigeria") {
          for (const state in cityData) {
            const newKey = key?.replace(" State", "");
            const newState = state?.replace(" State", "");

            if (newKey === newState) {
              setNewCityArray(cityData[newKey]);
            }
          }
        }
      };

      pickKey(stateValue[0]?.toString());
    }
  }, [cityData, stateArray, stateValue, values.country]);

  const cityArray = newCityArray?.map((el: string) => ({
    label: el,
    value: el,
  }));

  // const handleClick = () => {
  //   console.log("submit");
  // };

  return (
    <div className="bg-white md:w-[1058px] h-[40rem] overflow-y-auto md:overflow-visible md:h-full rounded-xl border drop-shadow-2xl relative">
      <div>
        <form action="" className="md:flex items-start relative">
          <div className="md:w-[60%] p-10 space-y-5">
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-[500] text-[16px] text-center md:text-left">Type of research</p>
                <Tooltip text="The number of responses needed for this survey" />
              </div>
              <div className="mt-2">
                <SecondarySelectInput
                  options={researchData}
                  name="researchType"
                  value={values.researchType}
                  onChange={handleChange}
                  text="Select research type"
                />
              </div>
            </div>{" "}
            <div>
              <div className="flex items-center space-x-1">
                <p className="font-[500] text-[16px]">How many response do you need?</p>
                <Tooltip text="The number of responses needed for this survey" />
              </div>
              <p className="text-[14px]">Specify number of responses</p>
              <div className="flex items-center mt-1">
                <div
                  className={`border rounded-l-md h-[30px] border-r-0  p-2 flex items-center justify-center ${
                    responses < 300 ? "text-gray-400 cursor-not-allowed" : "cursor-pointer"
                  }`}
                  onClick={() => setResponses(responses > 200 ? responses - 100 : responses)}
                >
                  <HiOutlineMinus />
                </div>
                <div className="border p-2 flex items-center justify-center h-[30px] text-[12px]">{responses}</div>
                <div
                  className="border rounded-r-md border-l-0 h-[30px]  p-2 flex items-center justify-center cursor-pointer"
                  onClick={() => setResponses(responses + 100)}
                >
                  <HiOutlinePlus />
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-[500] text-[16px] text-center md:text-left">Type of audience</p>
                <Tooltip text="The number of responses needed for this survey" />
              </div>
              <div className="mt-2">
                <SecondarySelectInput
                  options={audienceType}
                  name="audienceType"
                  value={values.audienceType}
                  onChange={handleChange}
                  text="Select audience type"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-[500] text-[24px] md:text-left">Geolocation Specifications</p>
                <Tooltip text="The number of responses needed for this survey" />
              </div>
              <p className="text-[14px]">Specify geolocation details (e.g., country, state, LGA)</p>
              <div className="mt-2">
                <SecondarySelectInput
                  options={countryData}
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  text="Country"
                />
              </div>
            </div>
            <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 w-full mt-5">
              <div className="w-full">
                <p className="font-[500] text-[16px] mb-2">State</p>
                <SelectMultiple
                  name="state"
                  value={values.state}
                  onChange={(selectedOptions) => setFieldValue("state", selectedOptions)}
                  options={stateArray}
                />
              </div>
              <div className="w-full">
                <p className="font-[500] text-[16px] mb-2">Local Government area(s)</p>
                <SelectMultiple
                  name="lga"
                  disabled={stateValue?.length !== 1 ? true : false}
                  value={values.lga}
                  onChange={(selectedOptions) => setFieldValue("lga", selectedOptions)}
                  options={cityArray}
                />
              </div>
            </div>
            <div className={`mt-5 md:block ${price !== null && "hidden"}`}>
              <div className="md:flex items-center justify-between mt-2 md:space-x-5 space-y-3 md:space-y-0 w-full">
                <div className="w-full">
                  <GreyButton text="Reset" css="w-full" onClick={clearForm} buttonId="reset" />
                </div>

                <div className="w-full flex justify-center ">
                  <BlueButton
                    text="Get a quote"
                    css="w-full"
                    onClick={getQuotation}
                    buttonId="submit_quote"
                    disabled={emptyCheck}
                  />
                </div>
              </div>
            </div>
            <div className={`p-3 border md:hidden bg-white ${price !== null ? "block" : "hidden"}`}>
              <div className="flex flex-col md:block items-center w-full text-center">
                <p>Estimated price</p>
                <p className="font-[700] text-[32px] text-primary ">{price !== null ? `$${price}` : "$0.00"}</p>
              </div>
              <div className="flex justify-center">
                {price !== null && (
                  <BlueButton text="Buy now" css="w-[200px]" buttonId="buy_now" onClick={() => setOpenSignup(true)} />
                )}
              </div>
            </div>
            <div>
              <p
                className="text-primary underline text-[12px] cursor-pointer mt-5 md:hidden"
                onClick={() => setOpenModal(!openModal)}
              >
                Preview selection
              </p>
            </div>
          </div>
          <div className="hidden md:block w-[40%] p-5 bg-[#FAFAFA]">
            <p className="font-[500] text-[16px] p-5 border bg-white">Estimate</p>
            <div className="bg-white border-x min-h-[60%] flex flex-col">
              {!emptyStateCheck ? (
                <div className="items-center justify-center flex h-[500px]">
                  <EmptyState
                    title="Nothing to show yet."
                    subtitle="Your custom selection will show up here."
                    img={emptyState}
                  />
                </div>
              ) : (
                <div className="p-5 space-y-5 h-[500px] overflow-y-auto">
                  <div>
                    <div>
                      {values.researchType !== "" && (
                        <>
                          <p className="text-[13px] font-[500]">Research</p>
                          <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                            {values.researchType}
                          </div>
                          <hr className="w-full mt-2" />
                        </>
                      )}
                    </div>
                    <div>
                      {emptyStateCheck && (
                        <>
                          <p className="text-[13px] font-[500]">Responses</p>
                          <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{responses}</div>
                          <hr className="w-full mt-2" />
                        </>
                      )}
                    </div>
                    {values.audienceType !== "" && (
                      <>
                        <p className="text-[13px] font-[500]">Audience</p>
                        <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{values.audienceType}</div>
                        <hr className="w-full mt-2" />
                      </>
                    )}
                  </div>
                  <div>
                    {values.country !== "" && (
                      <>
                        <p className="text-[13px] font-[500]">Country</p>
                        <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{values.country}</div>
                        <hr className="w-full mt-2" />
                      </>
                    )}
                  </div>
                  <div>
                    {stateValue.length !== 0 && (
                      <div>
                        <p>State</p>
                        <ul className="space-y-2">
                          {stateValue.map((el, i) => (
                            <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                              {el}
                            </li>
                          ))}
                        </ul>
                        <hr className="w-full mt-2" />
                      </div>
                    )}
                  </div>
                  <div>
                    {cityValue.length !== 0 && (
                      <div>
                        <p>Local Government Area(s)</p>
                        <ul className="space-y-2">
                          {cityValue.map((el, i) => (
                            <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                              {el}
                            </li>
                          ))}
                        </ul>
                        <hr className="w-full mt-2" />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 border bg-white">
              <div className="flex flex-col md:block items-center w-full text-center">
                <p>Estimated price</p>
                <p className="font-[700] text-[32px] text-primary ">{price !== null ? `$${price}` : "$0.00"}</p>
              </div>
              <div className="flex justify-center">
                {price !== null && (
                  <BlueButton buttonId="buy_now" text="Buy now" css="w-[200px]" onClick={() => setOpenSignup(true)} />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      {openModal && (
        <div className="md:hidden">
          <Modal title="" onClose={() => setOpenModal(false)}>
            <div className="w-[300px] overflow-y-auto">
              <p className="font-[500] text-[16px]">Estimate</p>
              <div>
                {!emptyStateCheck ? (
                  <div className="h-[500px]">
                    <EmptyState
                      title="Nothing to show yet."
                      subtitle="Your custom selection will show up here."
                      img={emptyState}
                    />
                  </div>
                ) : null}
              </div>
              <div>
                {values.researchType !== "" && (
                  <>
                    <p className="text-[13px] font-[500]">Research</p>
                    <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{values.researchType}</div>
                    <hr className="w-full mt-2" />
                  </>
                )}
              </div>
              <div>
                {emptyStateCheck && (
                  <>
                    <p className="text-[13px] font-[500]">Responses</p>
                    <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{responses}</div>
                    <hr className="w-full mt-2" />
                  </>
                )}
              </div>
              {values.audienceType !== "" && (
                <>
                  <p className="text-[13px] font-[500]">Audience</p>
                  <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{values.audienceType}</div>
                  <hr className="w-full mt-2" />
                </>
              )}
              <div>
                {values.country !== "" && (
                  <>
                    <p className="text-[13px] font-[500]">Country</p>
                    <div className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">{values.country}</div>
                    <hr className="w-full mt-2" />
                  </>
                )}
              </div>
              <div>
                {stateValue.length !== 0 && (
                  <div>
                    <p>State</p>
                    <ul className="space-y-2">
                      {stateValue.map((el, i) => (
                        <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                          {el}
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                )}
              </div>
              <div>
                {cityValue.length !== 0 && (
                  <div>
                    <p>Local Government Area(s)</p>
                    <ul className="space-y-2">
                      {cityValue.map((el, i) => (
                        <li key={i} className="w-fit bg-[#FAFAFA] p-3 text-[14px] mt-2 rounded-md">
                          {el}
                        </li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                )}
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Quotation;
