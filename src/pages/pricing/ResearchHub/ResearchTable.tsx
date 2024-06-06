import cancel from "@/assets/images/pricing/cancel.png";
import fullCheck from "@/assets/images/pricing/fullCheck.png";

type TResearchTable = {
  toggleValue: number;
};

type RawTableRow = {
  planDetails: string;
  businessPlan: string;
  proPlan: string;
};

const tableData: RawTableRow[] = [
  { planDetails: "Online survey responses", businessPlan: "200 Responses", proPlan: "1,000 Responses" },
  { planDetails: "Field interviews (voice/video responses)", businessPlan: "", proPlan: "1,000 Responses" },
  { planDetails: "Field interviews (text response)", businessPlan: "", proPlan: "1,000 Responses" },
  { planDetails: "Brand tracking survey", businessPlan: "", proPlan: "250 Responses" },
  { planDetails: "Survey design, analytics", businessPlan: "same", proPlan: "same" },
  { planDetails: "Survey set up, analysis, and reporting.", businessPlan: "", proPlan: "same" },
  { planDetails: "Online review page", businessPlan: "same", proPlan: "same" },
  { planDetails: "Generate QR code for easy review collection.", businessPlan: "same", proPlan: "same" },
  { planDetails: "Free emails every month", businessPlan: "20,000", proPlan: "200,000" },
];

const ResearchTable = ({ toggleValue }: TResearchTable) => {
  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];
  const column1 = [
    { field: "planDetails", header: "Plan Details" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  const removeIndex = (array: { field: string; header: string }[], index: number) => {
    array.splice(index, 1);
    return array;
  };

  const mobileColumns = toggleValue === 0 ? removeIndex(columns, 2) : removeIndex(columns, 1);

  console.log(toggleValue);

  return (
    <div>
      <div className="md:flex items-center bg-neutral-100 p-2 hidden">
        {column1.map((el) => {
          return (
            <p
              className={
                el.field === "planDetails"
                  ? "w-[50%] font-[600]"
                  : "w-[50%] text-primary flex justify-center font-[600]"
              }
            >
              {el.header}
            </p>
          );
        })}
      </div>
      <div className="flex items-center bg-neutral-100 p-2 md:hidden">
        {mobileColumns.map((el) => {
          return (
            <p
              className={
                el.field === "planDetails"
                  ? "w-[50%] font-[600]"
                  : "w-[50%] text-primary flex justify-center font-[600]"
              }
            >
              {el.header}
            </p>
          );
        })}
      </div>
      {tableData.map((el) => {
        return (
          <div className="flex items-center p-3 bg-neutral-100 my-2 ">
            <p className={`w-[50%] md:w-[50%]`}>{el.planDetails}</p>
            <p className={`w-[50%] md:w-[50%] flex justify-center ${toggleValue !== 0 ? "hidden md:block" : "block"} `}>
              {el.businessPlan === "same" ? (
                <div className="w-[24px] h-[24px] md:block flex justify-center text-center">
                  <img src={fullCheck} alt="" />
                </div>
              ) : el.businessPlan === "" ? (
                <div className="w-[24px] h-[24px] md:block flex justify-center text-center">
                  <img src={cancel} alt="" />
                </div>
              ) : (
                el.businessPlan
              )}
            </p>

            <p
              className={`w-[50%] md:w-[50%] md:flex justify-center ${toggleValue !== 1 ? "hidden md:block" : "flex"} `}
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
  );
};

export default ResearchTable;
