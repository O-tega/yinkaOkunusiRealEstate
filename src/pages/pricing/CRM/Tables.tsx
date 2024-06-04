// import cancel from "@/assets/images/pricing/cancel.png";
import fullCheck from "@/assets/images/pricing/fullCheck.png";

// type TResearchTable = {
//   toggleValue: number;
// };

type RawTableRow = {
  planDetails: string;
  businessPlan: string;
  starterPlan: string;
  proPlan: string;
};

// type TableRow = {
//   planDetails: string;
//   businessPlan: string | JSX.Element;
//   starterPlan: string | JSX.Element;
//   proPlan: string | JSX.Element;
// };

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

const Tables = () => {
  //   const indexToRemove = toggleValue === 0 ? "starterPlan" : toggleValue === 1 ? "businessPlan" : "proPlan";

  // const columnsToKeep = [
  //   "planDetails",
  //   toggleValue === 0 ? "starterPlan" : toggleValue === 1 ? "businessPlan" : "proPlan",
  // ];

  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "starterPlan", header: "Starter Plan" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  // const transformData = (data: RawTableRow[]): TableRow[] => {
  //   return data.map((item) => ({
  //     planDetails: item.planDetails,
  //     starterPlan:
  //       item.starterPlan === "" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center">
  //           <img src={cancel} alt="" />
  //         </div>
  //       ) : item.starterPlan === "same" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center text-center">
  //           <img src={fullCheck} alt="" />
  //         </div>
  //       ) : (
  //         item.starterPlan
  //       ),
  //     businessPlan:
  //       item.businessPlan === "" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center">
  //           <img src={cancel} alt="" />
  //         </div>
  //       ) : item.businessPlan === "same" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center text-center">
  //           <img src={fullCheck} alt="" />
  //         </div>
  //       ) : (
  //         item.businessPlan
  //       ),
  //     proPlan:
  //       item.proPlan === "" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center mx-auto">
  //           <img src={cancel} alt="" />
  //         </div>
  //       ) : item.proPlan === "same" ? (
  //         <div className="w-[24px] h-[24px] flex justify-center">
  //           <img src={fullCheck} alt="" />
  //         </div>
  //       ) : (
  //         item.proPlan
  //       ),
  //   }));
  // };

  // const table1 = transformData(tableData1);
  // const table2 = transformData(tableData2);
  // const table3 = transformData(tableData3);
  // const table4 = transformData(tableData4);

  return (
    <div className="w-[80%] my-[3em]">
      <div className="flex items-center bg-neutral-100 p-2 ">
        {columns.map((el) => {
          return <p className={el.field === "planDetails" ? "w-[30%]" : "w-[22%]"}>{el.header}</p>;
        })}
      </div>

      <div>
        <p className="font-[600] text-center my-6">Customer Management Hub</p>
      </div>

      <div className="text-sm">
        {tableData1.map((el) => {
          return (
            <div className="flex items-center p-3 bg-neutral-100 my-2 ">
              <p className="w-[30%]">{el.planDetails}</p>
              <p className="w-[22%] ">
                {el.starterPlan === "same" ? (
                  <div className="w-[24px] h-[24px] flex justify-center text-center ml-[15%]">
                    <img src={fullCheck} alt="" />
                  </div>
                ) : (
                  el.starterPlan
                )}
              </p>
              <p className="w-[22%]">
                {el.businessPlan === "same" ? (
                  <div className="w-[24px] h-[24px] flex justify-center text-center ml-[15%]">
                    <img src={fullCheck} alt="" />
                  </div>
                ) : (
                  el.businessPlan
                )}
              </p>

              <p className="w-[22%]">
                {el.proPlan === "same" ? (
                  <div className="w-[24px] h-[24px] flex items-center justify-center ml-[15%]">
                    <img src={fullCheck} alt="" />
                  </div>
                ) : (
                  el.proPlan
                )}
              </p>
            </div>
          );
        })}
      </div>

      <div>
        <p className="font-[600] text-center my-6">Multichannel messaging</p>
      </div>

      <div className="">
        {tableData2.map((el) => {
          return (
            <div className="flex items-center justify-between text-sm p-3 bg-neutral-100 my-2">
              <p className="w-[30%]">{el.planDetails}</p>
              <p className="w-[22%]">{el.starterPlan}</p>
              <p className="w-[22%]">{el.businessPlan}</p>
              <p className="w-[22%]">{el.proPlan}</p>
            </div>
          );
        })}
      </div>

      <div>
        <p className="font-[600] text-center my-6">Customer insight</p>
      </div>

      <div className="space-y-4 bg-neutral-100 p-3 text-sm ">
        {tableData3.map((el) => {
          return (
            <div className="flex items-center justify-between ">
              <p className="w-[30%]">{el.planDetails}</p>
              <p className="w-[22%]">{el.starterPlan}</p>
              <p className="w-[22%]">{el.businessPlan}</p>
              <p className="w-[22%]">{el.proPlan}</p>
            </div>
          );
        })}
      </div>

      <div>
        <p className="font-[600] text-center my-6">User access</p>
      </div>

      <div className="space-y-4 bg-neutral-100 p-3 text-sm ">
        {tableData4.map((el) => {
          return (
            <div className="flex items-center justify-between">
              <p className="w-[25%]">{el.planDetails}</p>
              <p className="w-[25%]">{el.starterPlan}</p>
              <p className="w-[25%]">{el.businessPlan}</p>
              <p className="w-[25%]">{el.proPlan}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tables;
