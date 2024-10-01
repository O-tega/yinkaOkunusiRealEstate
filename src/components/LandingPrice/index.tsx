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
      "Access full survey tools, voice messaging  and lead generation.",
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
      "Access to brand tracking, field surveys and advanced analytics.",
    ],
  },
];

const LandingPrice: React.FC = () => {
  return (
    <div className="flex items-center space-x-5">
      {plan.map((el, i) => (
        <PlanCard
          key={i}
          title={el.title}
          subtitle={el.subtitle}
          info={el.info}
          amount={el.amount}
          featureTitle={el.featureTitle}
          features={el.features}
          buttonText={el.buttonText}
          tag={el.tag}
        />
      ))}
    </div>
  );
};

export default LandingPrice;
