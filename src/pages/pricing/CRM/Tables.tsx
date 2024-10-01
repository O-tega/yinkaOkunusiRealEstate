import React from "react";
import cancel from "@/assets/images/pricing/cancel.png";
import fullCheck from "@/assets/images/pricing/fullCheck.png";

type TResearchTable = {
  toggleValue: number;
};

type RawTableRow = {
  planDetails: string;
  businessPlan: string;
  starterPlan: string;
  proPlan: string;
};

type TableRow = {
  planDetails: string;
  businessPlan: string | JSX.Element;
  starterPlan: string | JSX.Element;
  proPlan: string | JSX.Element;
};

const tableData1: RawTableRow[] = [
  {
    planDetails: "Contact Limit",
    starterPlan: "1,000 Contacts",
    businessPlan: "20,000 contacts",
    proPlan: "200,000 contacts",
  },
  {
    planDetails: "Tags",
    starterPlan: "same",
    businessPlan: "same",
    proPlan: "same",
  },
  {
    planDetails: "Segments & Custom fields",
    starterPlan: "",
    businessPlan: "same",
    proPlan: "same",
  },
];

const tableData2: RawTableRow[] = [
  {
    planDetails: "SMS",
    starterPlan: "4,000",
    businessPlan: "40,000",
    proPlan: "400,000",
  },
  {
    planDetails: "Email",
    starterPlan: "8,000",
    businessPlan: "80,000",
    proPlan: "800,000",
  },
  {
    planDetails: "Voice (minutes)",
    starterPlan: "100",
    businessPlan: "1,000",
    proPlan: "10,000",
  },
];
const tableData3: RawTableRow[] = [
  {
    planDetails: "Customer profile, NPS, CSAT",
    starterPlan: "1,000 invites",
    businessPlan: "10,000 invites",
    proPlan: "100,000 invites",
  },
];
const tableData4: RawTableRow[] = [
  {
    planDetails: "Team collaboration",
    starterPlan: "Single user access",
    businessPlan: "up to 3 workspaces and 5 members each",
    proPlan: "Unlimited workspaces and team members",
  },
];

const Tables = ({ toggleValue }: TResearchTable) => {
  //   const indexToRemove = toggleValue === 0 ? "starterPlan" : toggleValue === 1 ? "businessPlan" : "proPlan";

  const columnsToKeep = [
    "planDetails",
    toggleValue === 0 ? "starterPlan" : toggleValue === 1 ? "businessPlan" : "proPlan",
  ];

  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "starterPlan", header: "Starter Plan" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  const transformData = (data: RawTableRow[]): TableRow[] => {
    return data.map((item) => ({
      planDetails: item.planDetails,
      starterPlan:
        item.starterPlan === "" ? (
          <div className="w-[24px] h-[24px] flex justify-center">
            <img src={cancel} alt="" />
          </div>
        ) : item.starterPlan === "same" ? (
          <div className="w-[24px] h-[24px] flex justify-center text-center">
            <img src={fullCheck} alt="" />
          </div>
        ) : (
          item.starterPlan
        ),
      businessPlan:
        item.businessPlan === "" ? (
          <div className="w-[24px] h-[24px] flex justify-center">
            <img src={cancel} alt="" />
          </div>
        ) : item.businessPlan === "same" ? (
          <div className="w-[24px] h-[24px] flex justify-center text-center">
            <img src={fullCheck} alt="" />
          </div>
        ) : (
          item.businessPlan
        ),
      proPlan:
        item.proPlan === "" ? (
          <div className="w-[24px] h-[24px] flex justify-center">
            <img src={cancel} alt="" />
          </div>
        ) : item.proPlan === "same" ? (
          <div className="w-[24px] h-[24px] flex justify-center">
            <img src={fullCheck} alt="" />
          </div>
        ) : (
          item.proPlan
        ),
    }));
  };

  const table1 = transformData(tableData1);
  const table2 = transformData(tableData2);
  const table3 = transformData(tableData3);
  const table4 = transformData(tableData4);

  return (
    <div>
      <div className="md:hidden">
        <table className="w-[100%] mb-4 text-[14px]">
          <thead className="h-[50px] text-[14px]">
            <tr className="h-[50px] overflow-hidden">
              {columns
                .filter((column) => columnsToKeep.includes(column.field))
                .map((head, i) => (
                  <th key={i} className="px-2 text-left">
                    {head.header}
                  </th>
                ))}
            </tr>
          </thead>
        </table>
        <div>
          <p className="font-[600] text-center">Customer Management Hub</p>
        </div>
        <table className="w-[100%] mb-4 text-[14px]">
          <tbody>
            {table1.map((row, i) => {
              return (
                <tr className="h-[50px] text-[14px] text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns
                    .filter((column) => columnsToKeep.includes(column.field))
                    .map((col, j) => {
                      return (
                        <td key={j} className={`px-4 relative`}>
                          {row[col.field as keyof TableRow] || "-"}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">Multichannel messaging</p>
        </div>
        <table className="w-[100%] mb-4 text-[14px]">
          <tbody>
            {table2.map((row, i) => {
              return (
                <tr className="h-[50px] text-[14px] text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns
                    .filter((column) => columnsToKeep.includes(column.field))
                    .map((col, j) => {
                      return (
                        <td key={j} className={`px-4 relative`}>
                          {row[col.field as keyof TableRow] || "-"}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">Customer insight</p>
        </div>
        <table className="w-[100%] mb-4 text-[14px]">
          <tbody>
            {table3.map((row, i) => {
              return (
                <tr className="h-[50px] text-[14px] text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns
                    .filter((column) => columnsToKeep.includes(column.field))
                    .map((col, j) => {
                      return (
                        <td key={j} className={`px-4 relative`}>
                          {row[col.field as keyof TableRow] || "-"}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">User access</p>
        </div>
        <table className="w-[100%] mb-4 text-[14px]">
          <tbody>
            {table4.map((row, i) => {
              return (
                <tr className="h-[50px] text-[14px] text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns
                    .filter((column) => columnsToKeep.includes(column.field))
                    .map((col, j) => {
                      return (
                        <td key={j} className={`px-4 relative text-[14px]`}>
                          {row[col.field as keyof TableRow] || "-"}
                        </td>
                      );
                    })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="hidden md:block">
        <table className="w-[100%] mb-4">
          <thead className="h-[50px] text-s">
            <tr className="h-[50px] overflow-hidden">
              {columns.map((head, i) => (
                <th key={i} className="px-2 text-left">
                  {head.header}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div>
          <p className="font-[600] text-center">Customer Management Hub</p>
        </div>
        <table className="w-[100%] mb-4">
          <tbody>
            {table1.map((row, i) => {
              return (
                <tr className="h-[50px] text-ss text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns.map((col, j) => {
                    return (
                      <td key={j} className={`px-4 relative`}>
                        {row[col.field as keyof TableRow] || "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">Multichannel messaging</p>
        </div>
        <table className="w-[100%] mb-4">
          <tbody>
            {table2.map((row, i) => {
              return (
                <tr className="h-[50px] text-ss text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns.map((col, j) => {
                    return (
                      <td key={j} className={`px-4 relative`}>
                        {row[col.field as keyof TableRow] || "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">Customer insight</p>
        </div>
        <table className="w-[100%] mb-4">
          <tbody>
            {table3.map((row, i) => {
              return (
                <tr className="h-[50px] text-ss text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns.map((col, j) => {
                    return (
                      <td key={j} className={`px-4 relative`}>
                        {row[col.field as keyof TableRow] || "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <p className="font-[600] text-center">User access</p>
        </div>
        <table className="w-[100%] mb-4">
          <tbody>
            {table4.map((row, i) => {
              return (
                <tr className="h-[50px] text-ss text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns.map((col, j) => {
                    return (
                      <td key={j} className={`px-4 relative`}>
                        {row[col.field as keyof TableRow] || "-"}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
