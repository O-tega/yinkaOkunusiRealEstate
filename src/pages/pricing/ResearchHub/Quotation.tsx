import React, { useEffect, useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { IoInformationCircle } from "react-icons/io5";
import * as Yup from "yup";
import { useFormik } from "formik";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { TQuotation } from "@/types/formTypes";
import { useQuery } from "@tanstack/react-query";
import { getCity, getState } from "@/service/stateCities";
import SelectMultiple from "@/components/Inputs/MultiSelect";
import { Option } from "@/types/componentTypes";
import BlueButton from "@/components/Button/BlueButton";
import EmptyState from "@/components/EmptyState";
import emptyState from "@/assets/images/pricing/emptyEstimate.png";
import Modal from "@/components/Modal";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/externalUrls";
import { RiDeleteBin5Fill } from "react-icons/ri";

interface TProps {
  name: string;
}
const initialValues: TQuotation = {
  leastAge: "",
  mostAge: "",
  gender: [],
  state: [] as Option[],
  lga: [] as Option[],
  categoryOfInterest: [] as Option[],
};

const validationSchema = Yup.object().shape({
  gender: Yup.string().required("Please fill in this field"),
  leastAge: Yup.string().required("Please fill in this field"),
  mostAge: Yup.string().required("Please fill in this field"),
  state: Yup.string().required("Please fill in this field"),
  lga: Yup.string().required("Please fill in this field"),
});

const Quotation: React.FC = () => {
  const [surveyType, selectSurveyType] = useState<number | null>(0);
  const [responses, setResponses] = useState<number>(200);
  const [newCityArray, setNewCityArray] = useState([]);
  const [price, setPrice] = useState<number | null>(null);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const handleSelect = (id: number | null) => {
    selectSurveyType(id === surveyType ? null : id);
  };

  useEffect(() => {
    setPrice(responses);
  }, [responses]);

  const onSubmit = async (data: TQuotation) => {
    console.log(data);
  };

  const { handleChange, values, handleBlur, handleSubmit, setFieldValue } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  const { data: stateData } = useQuery({ queryKey: ["getState"], queryFn: getState });

  const { data: cityData } = useQuery({
    queryKey: ["getCity"],
    queryFn: () => getCity("Nigeria"),
  });

  const stateArray = stateData?.data?.states?.map((el: TProps) => ({
    label: el.name,
    value: el.name,
  }));
  const stateValue = values?.state?.map((el) => el.value);
  const cityValue = values?.lga?.map((el) => el.value);
  const categoryValue = values?.categoryOfInterest?.map((el) => el.value);

  const emptyCheck =
    !values.gender ||
    categoryValue.length === 0 ||
    !values.leastAge ||
    !values.mostAge ||
    stateValue.length === 0 ||
    cityValue.length === 0;

  const emptyStateCheck =
    (values.leastAge !== "" && values.mostAge !== "") ||
    selectedGenders.length !== 0 ||
    stateValue.length !== 0 ||
    cityValue.length !== 0 ||
    categoryValue.length !== 0;

  const handleClear = () => {
    setFieldValue("leastAge", "");
    setFieldValue("mostAge", "");
  };

  useEffect(() => {
    if (stateArray !== undefined && stateValue.length === 1) {
      const pickKey = (key: string) => {
        for (const state in cityData) {
          const newKey = key?.replace(" State", "");
          const newState = state?.replace(" State", "");

          if (newKey === newState) {
            setNewCityArray(cityData[newKey]);
          }
        }
      };

      pickKey(stateValue[0]?.toString());
    }
  }, [cityData, stateArray, stateValue, values.state]);

  const cityArray = newCityArray?.map((el: string) => ({
    label: el,
    value: el,
  }));

  const handleClick = () => {
    console.log("submit");
  };

  const handleGender = (gender: string) => {
    if (gender === "Prefer not to say") {
      setSelectedGenders([gender]);
    } else {
      setSelectedGenders((prevSelectedGenders) => {
        if (prevSelectedGenders.includes(gender)) {
          return prevSelectedGenders.filter((g) => g !== gender);
        } else {
          const newSelectedGenders = prevSelectedGenders.filter((g) => g !== "Prefer not to say");
          return [...newSelectedGenders, gender];
        }
      });
    }
  };

  const categoryArray = [
    { label: "Sports", value: "Sports" },
    { label: "Entertainment", value: "Entertainment" },
    { label: "Reading Habits", value: "Reading Habits" },
    { label: "Travel", value: "Travel" },
    { label: "Cooking and Culinary Interests", value: "Cooking and Culinary Interests" },
  ];
  return (
    <div className="bg-white md:w-[1058px] rounded-xl border drop-shadow-2xl p-5 md:pb-[7rem] pb-[12rem] relative">
      <div className="md:flex items-start relative">
        <div className="md:w-[60%]">
          <div>
            <p className="font-[500] text-[24px] text-center md:text-left">Get a custom quote</p>
            <p className="text-[14px] text-center md:text-left">
              Set number of responses and your preferred audience preference to get a quote.
            </p>
          </div>
          <div className="mt-5">
            <p className="font-[500] text-[16px]">What type of survey do you want to run?</p>
            <div className="flex items-center space-x-3 mt-2">
              {["Online survey", "Field interview"].map((el, i) => (
                <div
                  key={i}
                  className={`border px-5 py-2 rounded-md text-[14px] cursor-pointer ${
                    surveyType === i ? "border-primary" : ""
                  }`}
                  onClick={() => handleSelect(i)}
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center space-x-1">
              <p className="font-[500] text-[16px]">How many response do you need?</p>
              <p className="cursor-pointer">
                <IoInformationCircle />
              </p>
            </div>
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
          <div className="mt-5">
            <div className="flex items-center space-x-1">
              <p className="font-[500] text-[16px]">Set your audience demographic(s)</p>
              <p className="cursor-pointer">
                <IoInformationCircle />
              </p>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="mt-2">
              <p>Age range</p>
              <div className="flex items-center space-x-4">
                <PrimaryInput
                  type="number"
                  css="w-[100px]"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="leastAge"
                  placeholder="18"
                  value={values.leastAge}
                />
                <PrimaryInput
                  type="number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  css="w-[100px]"
                  name="mostAge"
                  placeholder="100"
                  value={values.mostAge}
                />
                {values.leastAge !== "" && values.mostAge !== "" ? (
                  <div className="bg-gray-300 rounded-full p-2 text-white" onClick={handleClear}>
                    <RiDeleteBin5Fill size={15} />
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mt-5">
              <p className="font-[500] text-[16px]">What type of survey do you want to run?</p>
              <div className="flex items-center space-x-3 mt-2">
                {["Male", "Female", "Prefer not to say"].map((el, i) => (
                  <div
                    key={i}
                    className={`border px-5 py-2 rounded-md md:text-[14px] text-[12px] cursor-pointer ${
                      selectedGenders.includes(el) ? "border-primary" : ""
                    }`}
                    onClick={() => handleGender(el)}
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex items-center md:space-x-5 space-y-5 md:space-y-0 md:w-[70%] w-full mt-5">
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
            <div className="mt-5">
              <p className="font-[500] text-[16px] mb-2">Category of interest</p>
              <SelectMultiple
                name="categoryOfInterest"
                value={values.categoryOfInterest}
                css="md:w-[70%] w-full"
                onChange={(selectedOptions) => setFieldValue("categoryOfInterest", selectedOptions)}
                options={categoryArray}
              />
            </div>
            <div>
              <p
                className="text-primary underline text-[12px] cursor-pointer mt-5 md:hidden"
                onClick={() => setOpenModal(!openModal)}
              >
                Preview selection
              </p>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-[40%] h-[650px] p-5 bg-[#FAFAFA]">
          <p className="font-[500] text-[16px]">Preview</p>
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
          <div className="mt-5">
            {values.leastAge !== "" && values.mostAge !== "" ? (
              <div>
                <p>Age</p>
                <p>
                  {values.leastAge} to {values.mostAge}
                </p>
                <hr className="w-full mt-2" />
              </div>
            ) : null}
          </div>
          <div className="mt-3">
            {selectedGenders.length !== 0 ? (
              <div>
                <p>Genders</p>
                <ul className="space-y-2">
                  {selectedGenders.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
                <hr className="w-full mt-2" />
              </div>
            ) : null}
          </div>
          <div className="mt-3">
            {stateValue.length !== 0 ? (
              <div>
                <p>State</p>
                <ul className="space-y-2">
                  {stateValue.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
                <hr className="w-full mt-2" />
              </div>
            ) : null}
          </div>
          <div className="mt-3">
            {cityValue.length !== 0 ? (
              <div>
                <p>Local Government Area(s)</p>
                <ul className="space-y-2">
                  {cityValue.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
                <hr className="w-full mt-2" />
              </div>
            ) : null}
          </div>
          <div className="mt-3">
            {categoryValue.length !== 0 ? (
              <div>
                <p>Category of interest(s)</p>
                <ul className="space-y-2">
                  {categoryValue.map((el, i) => (
                    <li key={i}>{el}</li>
                  ))}
                </ul>
                <hr className="w-full mt-2" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="bg-white absolute w-[99%] border-t mt-5 right-1">
        <div className="md:flex items-center justify-between mt-2 px-5 w-full">
          <div className="flex flex-col md:block items-center w-full">
            <p>Estimated price</p>
            <p className="font-[700] text-[32px] text-primary">{price !== null ? `$${price}` : "$0.00"}</p>
          </div>
          <div className="w-full flex justify-center ">
            <Link to={emptyCheck ? "#" : `${ROUTES.LOGIN}/register`} className="w-full flex justify-end">
              <BlueButton text="Buy now" type="button" css="w-[80%]" onClick={handleClick} disabled={emptyCheck} />
            </Link>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="md:hidden">
          <Modal title="" onClose={() => setOpenModal(false)}>
            <div className="w-[350px]">
              <p className="font-[500] text-[16px]">Preview</p>
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
              <div className="mt-5">
                {values.leastAge !== "" && values.mostAge !== "" ? (
                  <div>
                    <p>Age</p>
                    <p>
                      {values.leastAge} to {values.mostAge}
                    </p>
                    <hr className="w-full mt-2" />
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                {selectedGenders.length !== 0 ? (
                  <div>
                    <p>Genders</p>
                    <ul className="space-y-2">
                      {selectedGenders.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                {stateValue.length !== 0 ? (
                  <div>
                    <p>State</p>
                    <ul className="space-y-2">
                      {stateValue.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                {stateValue.length === 1 ? (
                  <div>
                    <p>Local Government Area(s)</p>
                    <ul className="space-y-2">
                      {cityValue.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                ) : null}
              </div>
              <div className="mt-3">
                {categoryValue.length !== 0 ? (
                  <div>
                    <p>Category of interest(s)</p>
                    <ul className="space-y-2">
                      {categoryValue.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                    <hr className="w-full mt-2" />
                  </div>
                ) : null}
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Quotation;
