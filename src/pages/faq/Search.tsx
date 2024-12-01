import PrimaryButton from "@/components/Button/PrimaryButton";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SecondarySelectInput from "@/components/Inputs/SecondarySelectInput";
import React, { useState } from "react";

type TSearchProps = {
  handleSearch?: (text: string) => void | undefined;
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>> | undefined;
};

const Search: React.FC<TSearchProps> = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [propertyType, setPropertyType] = useState("");

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
      label: "Select property option",
      value: "",
    },
    {
      label: "Flat",
      value: "flat",
    },
    {
      label: "Duplex",
      value: "duple",
    },
    {
      label: "Bungalow",
      value: "bungalow",
    },
    {
      label: "Mini-flat",
      value: "mini-flat",
    },
    {
      label: "Warehouse",
      value: "warehouse",
    },
    {
      label: "Office",
      value: "Office",
    },
    {
      label: "Mansion",
      value: "Mansion",
    },
    {
      label: "Shop",
      value: "Shop",
    },
    {
      label: "Land",
      value: "Land",
    },
    {
      label: "Terrace",
      value: "Terrace",
    },
    {
      label: "Fully Detached House",
      value: "Fully Detached House",
    },
    {
      label: "Semi Detached House",
      value: "Semi Detached House",
    },
    {
      label: "Tenement",
      value: "Tenement",
    },
    {
      label: "Storey Building",
      value: "Storey Building",
    },
    {
      label: "Hotel",
      value: "Hotel",
    },
    {
      label: "Office Complex",
      value: "Office Complex",
    },
  ];

  const handleSubmit = () => {
    const payload = {
      location,
      purchaseType: type,
      propertyType,
    };

    console.log(payload);
  };

  return (
    <div className="border rounded-[8px] p-2 flex items-center space-x-2 w-full bg-white">
      <div className="w-full">
        <PrimaryInput
          type="text"
          placeholder="Type your location"
          value={location}
          name="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="w-full">
        <SecondarySelectInput
          options={options}
          onChange={(e) => setType(e.target.value)}
          value={type}
          name="purchaseType"
        />
      </div>
      <div className="w-full">
        <SecondarySelectInput
          options={propertyOption}
          onChange={(e) => setPropertyType(e.target.value)}
          value={propertyType}
          name="propertyType"
        />
      </div>
      <div className="w-full">
        <PrimaryButton text="Search" variant="filled" onClick={handleSubmit} buttonId="search_id" />
      </div>
    </div>
  );
};

export default Search;
