import PlanCard from "../PlanCard";
import { TiStarFullOutline } from "react-icons/ti";

const plan = [
  {
    title: "Free",
    subtitle: "Perfect for freelancers",
    tag: "",
    // responses: "200",
    planId: "666b222326ecccaade42c891",
    info: "Get started with basic tools to manage your contacts and engage your audience. ",
    amount: 0,
    featureTitle: "Key plan features",
    buttonText: "Sign Up Free",
    features: [
      "1 user limit.",
      "100 contact profiles.",
      "Monthly sends of 100 SMS or emails.",
      "Create basic surveys, track leads and Pay-as-you-go beyond the limit.",
    ],
  },
  {
    title: "SME",
    subtitle: "Great for small businesses",
    tag: "",
    // responses: "200",
    planId: "666b222326ecccaade42c891",
    info: "Manage and grow your audience with advanced messaging and lead tracking.",
    amount: 29.99,
    featureTitle: "Key plan features",
    buttonText: "See all features",
    features: [
      "2 user limit.",
      "1,000 contact profiles.",
      "Monthly sends of 10,000 SMS or emails.",
      "Access advanced audience segmentation, lead management and survey creation.",
    ],
  },
  {
    title: "Business",
    subtitle: "Ideal for growing e-commerce",
    tag: (
      <div className="bg-[#6B7FFF] px-2 py-1 text-white rounded-md flex items-center space-x-1">
        <p>
          <TiStarFullOutline />
        </p>
        <p>Most Popular</p>
      </div>
    ),
    // responses: "200",
    planId: "666b222326ecccaade42c891",
    info: "Get more advanced tools for larger audiences and deeper insights. ",
    amount: 249.99,
    featureTitle: "Key plan features",
    buttonText: "See all features",
    features: [
      "5 user limit.",
      "25,000 contact profiles.",
      "Monthly sends of 50,000 SMS or emails.",
      "Access full survey tools, voice messaging  lead generation and advanced analytics (Report filtering).",
    ],
  },
  {
    title: "Pro",
    subtitle: "Best for startups and teams",
    tag: "",
    // responses: "200",
    planId: "666b222326ecccaade42c891",
    info: "Unlock unlimited users and advanced features to drive growth.",
    amount: 499.99,
    featureTitle: "Key plan features",
    buttonText: "See all features",
    features: [
      "Unlimited users.",
      "50,000 contact profiles.",
      "Monthly sends of 100,000 SMS or emails.",
      "Access to brand tracking, field surveys and workspaces.",
    ],
  },
];

const LandingPrice = ({
  conversionRate,
  values,
  toggleValue,
}: {
  values: number;
  toggleValue: boolean;
  conversionRate: number;
}) => {
  return (
    <>
      <div className="md:flex items-center space-x-5 hidden">
        {plan.map((el, i) => (
          <PlanCard
            key={i}
            title={el.title}
            subtitle={el.subtitle}
            info={el.info}
            amount={el.amount}
            featureTitle={el.featureTitle}
            features={el.features}
            conversionRate={conversionRate}
            toggle={toggleValue}
            buttonText={el.buttonText}
            tag={el.tag}
          />
        ))}
      </div>
      <div className="justify-center items-start mt-10 h-fit flex md:hidden">
        {values === 0 ? (
          <PlanCard
            title={plan[0].title}
            subtitle={plan[0].subtitle}
            tag={plan[0].tag}
            info={plan[0].info}
            featureTitle={plan[0].featureTitle}
            features={plan[0].features}
            conversionRate={conversionRate}
            amount={plan[0].amount}
            planId={plan[0].planId}
            buttonText={plan[0].buttonText}
            toggle={toggleValue}
          />
        ) : values === 1 ? (
          <PlanCard
            title={plan[1].title}
            subtitle={plan[1].subtitle}
            tag={plan[1].tag}
            info={plan[1].info}
            featureTitle={plan[1].featureTitle}
            features={plan[1].features}
            conversionRate={conversionRate}
            amount={plan[1].amount}
            buttonText={plan[1].buttonText}
            toggle={toggleValue}
          />
        ) : values === 2 ? (
          <PlanCard
            title={plan[2].title}
            subtitle={plan[2].subtitle}
            tag={plan[2].tag}
            info={plan[2].info}
            featureTitle={plan[2].featureTitle}
            conversionRate={conversionRate}
            planId={plan[2].planId}
            features={plan[2].features}
            amount={plan[2].amount}
            buttonText={plan[2].buttonText}
            toggle={toggleValue}
          />
        ) : (
          <PlanCard
            title={plan[3].title}
            subtitle={plan[3].subtitle}
            tag={plan[3].tag}
            info={plan[3].info}
            featureTitle={plan[3].featureTitle}
            planId={plan[3].planId}
            features={plan[3].features}
            buttonText={plan[3].buttonText}
            conversionRate={conversionRate}
            amount={plan[3].amount}
            toggle={toggleValue}
          />
        )}
      </div>
    </>
  );
};

export default LandingPrice;
