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

type TableRow = {
  planDetails: string;
  businessPlan: string | JSX.Element;
  proPlan: string | JSX.Element;
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
  const indexToRemove = toggleValue === 1 ? "businessPlan" : "proPlan";

  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "businessPlan", header: "Business Plan" },
    { field: "proPlan", header: "Pro Plan" },
  ];

  console.log(toggleValue);

  const transformData = (data: RawTableRow[]): TableRow[] => {
    return data.map((item) => ({
      planDetails: item.planDetails,
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

  const table = transformData(tableData);

  return (
    <div>
      <div className="md:hidden">
        <table className="w-[100%] mb-4">
          <thead className="h-[50px] text-[14px]">
            <tr className="h-[50px] overflow-hidden">
              {columns
                .filter((column) => column.field !== indexToRemove)
                .map((head, i) => (
                  <th key={i} className="px-2 text-left">
                    {head.header}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {table.map((row, i) => {
              return (
                <tr className="h-[50px] text-[14px] text-[#404040] font-[400] cursor-pointer" key={i}>
                  {columns
                    .filter((column) => column.field !== indexToRemove)
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
          <tbody>
            {table.map((row, i) => {
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

export default ResearchTable;
