import cancel from "@/assets/images/pricing/cancel.png";
import fullCheck from "@/assets/images/pricing/fullCheck.png";

type TResearchTable = {
  toggleValue: number;
};

type RawTableRow = {
  planDetails: string;
  sme: string;
  free: string;
  business: string;
  pro: string;
};

const tableData1: RawTableRow[] = [
  {
    planDetails: "Build rich audience profiles with 360° views and dynamic segmentation.",
    free: "same",
    sme: "same",
    business: "same",
    pro: "same",
  },
  {
    planDetails: "Contact management, lead tracking, and audience segmentation.",
    free: "same",
    sme: "same",
    business: "same",
    pro: "same",
  },
];

const tableData2: RawTableRow[] = [
  {
    planDetails: "Engage your customers through SMS and email messaging.",
    free: "",
    sme: "same",
    business: "same",
    pro: "same",
  },
  {
    planDetails: "Voice messaging to engage your audience and drive action seamlessly.",
    free: "",
    sme: "",
    business: "same",
    pro: "same",
  },
];
const tableData3: RawTableRow[] = [
  {
    planDetails: "Keep track of key customer KPIs, like NPS, CSAT, and advanced profiling.",
    free: "",
    sme: "same",
    business: "same",
    pro: "same",
  },
];
const tableData4: RawTableRow[] = [
  {
    planDetails: "Create a quantitative or video survey, share links, and analyse feedback.",
    free: "same",
    sme: "same",
    business: "same",
    pro: "same",
  },
  {
    planDetails: "Get insights from our panel or your customers, partners, and employees.",
    free: "",
    sme: "",
    business: "same",
    pro: "same",
  },
  {
    planDetails: "Use advanced answer filters and export capabilities to drill down into your data.",
    free: "",
    sme: "",
    business: "same",
    pro: "same",
  },
  {
    planDetails: "Create an offline or field survey, analyse feedback and reward participants.",
    free: "",
    sme: "",
    business: "",
    pro: "same",
  },
  {
    planDetails: "Create a brand tracker and monitor your awareness, perception and other KPIs",
    free: "",
    sme: "",
    business: "",
    pro: "same",
  },
];

const tableData5: RawTableRow[] = [
  {
    planDetails: "Coordinate, share responsibilities, and manage research projects efficiently.",
    free: "1 seat",
    sme: "2 seats",
    business: "5 seats",
    pro: "Unlimited seats",
  },
];

const Tables: React.FC<TResearchTable> = ({ toggleValue }) => {
  const removeThreeIndices = (
    array: { field: string; header: string }[],
    index1: number,
    index2: number,
    index3: number,
  ) => {
    // Ensure indices are sorted in descending order to handle the removal properly
    const indices = [index1, index2, index3].sort((a, b) => b - a);

    // Remove elements from highest index to lowest
    indices.forEach((index) => array.splice(index, 1));

    return array;
  };

  const columns = [
    { field: "planDetails", header: "Plan Details" },
    { field: "free", header: "Free" },
    { field: "sme", header: "SME" },
    { field: "business", header: "Business" },
    { field: "pro", header: "Pro" }, // Added Pro column here
  ];

  const mobileColumns =
    toggleValue === 0
      ? removeThreeIndices([...columns], 2, 3, 4) // Show 'Free' and keep 'planDetails'
      : toggleValue === 1
      ? removeThreeIndices([...columns], 1, 3, 4) // Show 'SME' and keep 'planDetails'
      : toggleValue === 2
      ? removeThreeIndices([...columns], 1, 2, 4) // Show 'Business' and keep 'planDetails'
      : toggleValue === 3
      ? removeThreeIndices([...columns], 1, 2, 3) // Show 'Pro' and keep 'planDetails'
      : columns;

  const check = (
    <div className="w-[24px] h-[24px] text-center">
      <img src={fullCheck} alt="" />
    </div>
  );

  const cancelled = (
    <div className="w-[24px] h-[24px] text-center">
      <img src={cancel} alt="" />
    </div>
  );

  return (
    <div className="md:w-[80%] w-full md:px-0 my-[3em]">
      <div className="md:flex items-center bg-neutral-100 p-2 hidden">
        {columns.map((el) => (
          <p
            key={el.field}
            className={el.field === "planDetails" ? "w-[30%] font-[600]" : "w-[22%] text-center font-[600]"}
          >
            {el.header}
          </p>
        ))}
      </div>

      <div className="flex items-center bg-neutral-100 p-2 md:hidden">
        {mobileColumns.map((el) => (
          <p
            key={el.field}
            className={
              el.field === "planDetails" ? "w-[50%] font-[600]" : "w-[50%] font-[600] flex justify-center text-primary"
            }
          >
            {el.header}
          </p>
        ))}
      </div>

      <div>
        <p className="font-[600] text-center py-4 bg-blue-100 text-blue-800">Audience Hub</p>
      </div>
      <div className="text-ss">
        {tableData1.map((el, i) => (
          <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2`}>
            <p className="w-[50%] md:w-[30%] ">{el.planDetails}</p>
            <p
              className={`w-[50%] md:w-[22%] flex justify-center text-center ${
                toggleValue !== 0 ? "hidden md:flex" : "block"
              }`}
            >
              {el.free === "same" ? check : el.free === "" ? cancelled : el.free}
            </p>

            {/* SME */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 1 ? "hidden md:flex" : "block"
              }`}
            >
              {el.sme === "same" ? check : el.sme}
            </p>

            {/* Business */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 2 ? "hidden md:flex" : "block"
              }`}
            >
              {el.business === "same" ? check : el.business}
            </p>

            {/* Pro */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 3 ? "hidden md:flex" : "block"
              }`}
            >
              {el.pro === "same" ? check : el.pro}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-[600] text-center py-4 bg-blue-100 text-blue-800">Broadcast Hub</p>
      </div>
      <div className="">
        {tableData2.map((el, i) => (
          <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2`}>
            <p className="w-[50%] md:w-[30%] ">{el.planDetails}</p>
            <p
              className={`w-[50%] md:w-[22%] flex justify-center text-center ${
                toggleValue !== 0 ? "hidden md:flex" : "block"
              }`}
            >
              {el.free === "same" ? check : el.free === "" ? cancelled : el.free}
            </p>

            {/* SME */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 1 ? "hidden md:flex" : "block"
              }`}
            >
              {el.sme === "same" ? check : el.sme === "" ? cancelled : el.sme}
            </p>

            {/* Business */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 2 ? "hidden md:flex" : "block"
              }`}
            >
              {el.business === "same" ? check : el.business === "" ? cancelled : el.business}
            </p>

            {/* Pro */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 3 ? "hidden md:flex" : "block"
              }`}
            >
              {el.pro === "same" ? check : el.pro === "" ? cancelled : el.pro}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className="font-[600] text-center py-4 bg-blue-100 text-blue-800">Insights Hub</p>
      </div>
      <div className="">
        {tableData3.map((el, i) => (
          <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2`}>
            <p className="w-[50%] md:w-[30%] ">{el.planDetails}</p>
            <p
              className={`w-[50%] md:w-[22%] flex justify-center text-center ${
                toggleValue !== 0 ? "hidden md:flex" : "block"
              }`}
            >
              {el.free === "same" ? check : el.free === "" ? cancelled : el.free}
            </p>

            {/* SME */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 1 ? "hidden md:flex" : "block"
              }`}
            >
              {el.sme === "same" ? check : el.sme === "" ? cancelled : el.sme}
            </p>

            {/* Business */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 2 ? "hidden md:flex" : "block"
              }`}
            >
              {el.business === "same" ? check : el.business === "" ? cancelled : el.business}
            </p>

            {/* Pro */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 3 ? "hidden md:flex" : "block"
              }`}
            >
              {el.pro === "same" ? check : el.pro === "" ? cancelled : el.pro}
            </p>
          </div>
        ))}
      </div>
      <div>
        <p className="font-[600] text-center py-4 bg-blue-100 text-blue-800">Research Hub</p>
      </div>
      <div className="">
        {tableData4.map((el, i) => (
          <div key={i} className={`flex items-center p-3 ${i % 2 === 0 ? "bg-neutral-100" : ""} my-2`}>
            <p className="w-[50%] md:w-[30%] ">{el.planDetails}</p>
            <p
              className={`w-[50%] md:w-[22%] flex justify-center text-center ${
                toggleValue !== 0 ? "hidden md:flex" : "block"
              }`}
            >
              {el.free === "same" ? check : el.free === "" ? cancelled : el.free}
            </p>

            {/* SME */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 1 ? "hidden md:flex" : "block"
              }`}
            >
              {el.sme === "same" ? check : el.sme === "" ? cancelled : el.sme}
            </p>

            {/* Business */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 2 ? "hidden md:flex" : "block"
              }`}
            >
              {el.business === "same" ? check : el.business === "" ? cancelled : el.business}
            </p>

            {/* Pro */}
            <p
              className={`w-[50%] md:w-[22%] flex text-center justify-center ${
                toggleValue !== 3 ? "hidden md:flex" : "block"
              }`}
            >
              {el.pro === "same" ? check : el.pro === "" ? cancelled : el.pro}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-[600] text-center py-4 bg-blue-100 text-blue-800">Collaboration</p>
      </div>
      <div className="space-y-4 bg-neutral-100 p-3 text-sm ">
        {tableData5.map((el) => (
          <div key={el.planDetails} className="flex items-center">
            <p className="w-[50%] md:w-[30%]">{el.planDetails}</p>
            <p className={`w-[50%] md:w-[22%] text-center ${toggleValue !== 0 ? "hidden md:block" : "block"}`}>
              {el.free}
            </p>
            <p className={`w-[50%] md:w-[22%] text-center ${toggleValue !== 1 ? "hidden md:block" : "block"}`}>
              {el.sme}
            </p>
            <p className={`w-[50%] md:w-[22%] text-center ${toggleValue !== 2 ? "hidden md:block" : "block"}`}>
              {el.business}
            </p>
            <p className={`w-[50%] md:w-[22%] text-center ${toggleValue !== 3 ? "hidden md:block" : "block"}`}>
              {el.pro}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
