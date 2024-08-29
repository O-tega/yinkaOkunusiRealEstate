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
    starterPlan: "5,000",
    businessPlan: "50,000",
    proPlan: "500,000",
  },
  {
    planDetails: "Email",
    starterPlan: "10,000",
    businessPlan: "100,000",
    proPlan: "1,000,000",
  },
  {
    planDetails: "Voice (minutes)",
    starterPlan: "0",
    businessPlan: "500",
    proPlan: "5,000",
  },
  {
    planDetails: "Customer surveys",
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

const Tables: React.FC<TResearchTable> = ({ toggleValue }) => {
  const removeTwoIndices = (array: { field: string; header: string }[], index1: number, index2: number) => {
    // Ensure index1 is less than index2 to handle shifting of elements properly
    if (index1 > index2) {
      [index1, index2] = [index2, index1];
    }

    // Remove the element at the higher index first
    array.splice(index2, 1);
    // Then remove the element at the lower index
    array.splice(index1, 1);

    return array;
  };

  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "starterPlan", header: "Starter Plan" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  const column1 = [
    { field: "planDetails", header: "Plan Details" },
    { field: "starterPlan", header: "Starter Plan" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  const mobileColumns =
    toggleValue === 0
      ? removeTwoIndices(columns, 2, 3)
      : toggleValue === 1
      ? removeTwoIndices(columns, 1, 3)
      : toggleValue === 2
      ? removeTwoIndices(columns, 1, 2)
      : [];

  return (
    <div className="md:w-[80%] w-full md:px-0 my-[3em]">
      <div className="md:flex items-center bg-neutral-100 p-2 hidden ">
        {column1.map((el) => {
          return (
            <p
              className={
                el.field === "planDetails" ? "w-[30%] font-[600]" : "w-[22%] text-primary text-center font-[600]"
              }
            >
              {el.header}
            </p>
          );
        })}
      </div>
      <div className="flex items-center bg-neutral-100 p-2 md:hidden ">
        {mobileColumns.map((el) => {
          return (
            <p
              className={
                el.field === "planDetails"
                  ? "w-[50%] font-[600]"
                  : "w-[50%] font-[600] flex justify-center text-primary"
              }
            >
              {el.header}
            </p>
          );
        })}
      </div>

      <div>
        <p className="font-[600] text-center my-6">Customer Management Hub</p>
      </div>
      <div className="text-sm">
        {tableData1.map((el, i) => {
          return (
            <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2 `}>
              <p className={`w-[50%] md:w-[30%]`}>{el.planDetails}</p>
              <p
                className={`w-[50%] md:w-[22%] text-center flex justify-center ${
                  toggleValue !== 0 ? "hidden md:block" : "block"
                } `}
              >
                {el.starterPlan === "same" ? (
                  <div className="w-[24px] h-[24px] flex justify-center text-center">
                    <img src={fullCheck} alt="" />
                  </div>
                ) : el.starterPlan === "" ? (
                  <div className="w-[24px] h-[24px] flex justify-center text-center">
                    <img src={cancel} alt="" />
                  </div>
                ) : (
                  el.starterPlan
                )}
              </p>
              <p
                className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                  toggleValue !== 1 ? "hidden md:flex" : "block"
                } `}
              >
                {el.businessPlan === "same" ? (
                  <div className="w-[24px] h-[24px] text-center">
                    <img src={fullCheck} alt="" />
                  </div>
                ) : (
                  el.businessPlan
                )}
              </p>

              <p
                className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                  toggleValue !== 2 ? "hidden md:flex" : "block"
                } `}
              >
                {el.proPlan === "same" ? (
                  <div className="w-[24px] h-[24px] flex items-center justify-center">
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
        <p className="font-[600] text-center my-6">Customer engagement</p>
      </div>
      <div className="">
        {tableData2.map((el, i) => {
          return (
            <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2 `}>
              <p className={`w-[50%] md:w-[30%]`}>{el.planDetails}</p>
              <p
                className={`w-[50%] md:w-[22%] md:block text-center flex justify-center ${
                  toggleValue !== 0 ? "hidden md:block" : "block"
                } `}
              >
                {el.starterPlan}
              </p>
              <p
                className={`w-[50%] md:w-[22%] md:block flex text-center  justify-center ${
                  toggleValue !== 1 ? "hidden md:block" : "block"
                } `}
              >
                {el.businessPlan}
              </p>
              <p
                className={`w-[50%] md:w-[22%] md:block flex text-center  justify-center ${
                  toggleValue !== 2 ? "hidden md:block" : "block"
                } `}
              >
                {el.proPlan}
              </p>
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
            <div className="flex items-center">
              <p className={`w-[50%] md:w-[30%]`}>{el.planDetails}</p>
              <p
                className={`w-[50%] md:w-[22%] md:block flex text-center justify-center ${
                  toggleValue !== 0 ? "hidden md:flex" : "block"
                } `}
              >
                {el.starterPlan}
              </p>
              <p
                className={`w-[50%] md:w-[22%] md:block flex text-center justify-center ${
                  toggleValue !== 1 ? "hidden md:flex" : "block"
                } `}
              >
                <p className="w-[80%]">{el.businessPlan}</p>
              </p>
              <p
                className={`w-[50%] md:w-[22%] md:block flex text-center justify-center ${
                  toggleValue !== 2 ? "hidden md:flex" : "block"
                } `}
              >
                <p className="w-[80%]">{el.proPlan}</p>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tables;
