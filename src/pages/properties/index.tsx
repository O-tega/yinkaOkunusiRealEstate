import { useState } from "react";
import FaqHero from "../faq/faqHero";
import faqBackground from "@/assets/images/landing/337fd9292d.jpg";
import ToLet from "./ToLet";
import ForSale from "./ForSale";
import AllProperties from "./AllProperties";
import SideCard from "@/components/Web/SideCard";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "@/service/propertyServices";

const Properties = () => {
  const { data } = useQuery({ queryKey: ["allproperties"], queryFn: getProperties });
  const [tabValue, setTabvalue] = useState(0);
  const tab = [
    { name: "All", value: 0 },
    { name: "For sale", value: 1 },
    { name: "To let", value: 2 },
  ];

  console.log(data);

  const filterData = (category: string) => {
    return data?.filter((el) => el.l_category === category);
  };

  const display = () => {
    switch (tabValue) {
      case 0:
        return <AllProperties data={data} />;
      case 1:
        return <ForSale data={filterData("Sales")} />;
      case 2:
        return <ToLet data={filterData("To Let")} />;
      default:
    }
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
          <div className="w-[20%]">
            <SideCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
