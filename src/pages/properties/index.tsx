import { useState } from "react";
import FaqHero from "../faq/faqHero";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import ToLet from "./ToLet";
import ForSale from "./ForSale";
import AllProperties from "./AllProperties";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SecondarySelectInput from "@/components/Inputs/SecondarySelectInput";
import PrimaryButton from "@/components/Button/PrimaryButton";

const Properties = () => {
  const [tabValue, setTabvalue] = useState(0);
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const tab = [
    { name: "All", value: 0 },
    { name: "For sale", value: 1 },
    { name: "To let", value: 2 },
  ];

  const options = [
    {
      label: "To let",
      value: "to let",
    },
    {
      label: "Lease",
      value: "lease",
    },
    {
      label: "For sale",
      value: "for sale",
    },
  ];

  const propertyOption = [
    {
      label: "please set a property option",
      value: "",
    },
  ];

  const display = () => {
    switch (tabValue) {
      case 0:
        return <AllProperties />;
      case 1:
        return <ForSale />;
      case 2:
        return <ToLet />;
      default:
    }
  };

  const handleSubmit = () => {
    const payload = {
      location,
      purchaseType: type,
      propertyType,
    };

    console.log(payload);
  };

  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden">
        <FaqHero title="Properties" desc="" desktopImg={faqBackground} />
      </div>
      <div className="my-10 px-[2rem]">
        <div className="flex items-start space-x-5 w-full">
          <div className="w-[20%] px-2">
            <div className="border rounded-[8px] p-2 space-y-4">
              {tab.map((el) => (
                <div
                  key={el.value}
                  onClick={() => setTabvalue(el.value)}
                  className={`cursor-pointer ${
                    tabValue === el.value ? "bg-blue-400 text-[600] w-full p-2 rounded-[4px]" : "px-2"
                  }`}
                >
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[60%] h-screen overflow-y-auto">
            <div>{display()}</div>
          </div>
          <div className="w-[20%] px-2">
            <div className="border rounded-[8px] p-2">
              <p className="text-[18px] font-[600] mb-2">Properties search</p>
              <div>
                <PrimaryInput
                  type="text"
                  placeholder="Type your location"
                  value={location}
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <SecondarySelectInput
                  options={options}
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  name="purchaseType"
                />
              </div>
              <div>
                <SecondarySelectInput
                  options={propertyOption}
                  onChange={(e) => {
                    () => setPropertyType(e.target.value);
                  }}
                  value={propertyType}
                  name="propertyType"
                />
              </div>
              <div>
                <PrimaryButton text="Search" variant="filled" onClick={handleSubmit} buttonId="search_id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
