import { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondarySelectInput from "../Inputs/SecondarySelectInput";
import { getLatestProperties } from "@/service/propertyServices";
import { useQuery } from "@tanstack/react-query";
import { TProperty } from "@/types/PropertyTypes";
import { useNavigate } from "react-router-dom";

const SideCard = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const navigate = useNavigate();
  const { data: recentPropertiesList, isPending: loadingLatest } = useQuery({
    queryKey: ["recentProperties"],
    queryFn: getLatestProperties,
  });
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

  const Card = ({
    img,
    title,
    id,
    data,
    loading,
  }: {
    img?: string;
    title?: string;
    id?: string;
    data?: TProperty;
    loading?: boolean;
  }) => (
    <div
      className="cursor-pointer p-1 hover:bg-blue-100 transition-all delay-75"
      onClick={() =>
        navigate(id !== undefined ? `/property-detail/${id}` : "", { state: id !== undefined ? data : "" })
      }
    >
      <div className="flex items-start space-x-5">
        <div className="">
          {loading ? (
            <div className="w-full h-full bg-gray-300 animate-pulse" />
          ) : (
            <img
              src={`https://yinka-okunusi-real-estate.vercel.app/images/properties/${img}`}
              alt=""
              className="w-[50px] h-[50px] object-cover"
            />
          )}
        </div>
        <div>
          {loading ? (
            <div className="w-24 h-4 bg-gray-300 animate-pulse mb-2" />
          ) : (
            <p className="text-[12px]">{title}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full px-2">
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
            onChange={(e) => setPropertyType(e.target.value)}
            value={propertyType}
            name="propertyType"
          />
        </div>
        <div>
          <PrimaryButton text="Search" variant="filled" onClick={handleSubmit} buttonId="search_id" />
        </div>
        <div className="mt-5">
          <p className="font-[700] text-[24px]">Latest Properties</p>
        </div>
        <div>
          <div className="space-y-1">
            {loadingLatest
              ? Array.from({ length: 5 }).map((_, index) => <Card key={index} loading={true} />)
              : recentPropertiesList
                  ?.slice(0, 6)
                  ?.map((property, index) => (
                    <Card
                      key={index}
                      img={property.l_img1}
                      title={property.l_title}
                      loading={false}
                      id={property.l_id}
                      data={property}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
