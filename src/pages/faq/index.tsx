import React, { useState } from "react";
import FaqHero from "./faqHero";
import faqBackground from "@/assets/images/mooyi/faqbackground.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    id: 1,
    title: "Getting started",
    content: [
      {
        subtitle: "Who can use Mooyi?",
        subContent:
          "Businesses of all sizes and stages can benefit from Mooyi™. Whether you're a startup, SME, or a large enterprise, if you're looking to make data-driven decisions, Mooyi™ is for you.",
      },
      {
        subtitle: "How do I get started with Mooyi?",
        subContent:
          "Simply sign up for a free account, choose a subscription plan that fits your needs, and you're ready to start gathering insights.",
      },
      {
        subtitle: "Is there a demo available?",
        subContent: "You can request a demo to see how Mooyi™ works and how it can benefit your business",
      },
    ],
  },
  {
    id: 2,
    title: "Subscription and Costs",
    content: [
      {
        subtitle: "Is there a cost to using Mooyi?",
        subContent:
          "Different subscription plans are available on Mooyi™, like Starter, Business, and Pro plans, with varying access levels to various features. You will need to purchase credits in the app to run campaigns.",
      },
      {
        subtitle: "What are Mooyi™ credits?",
        subContent:
          "Mooyi credits are flexible currency lodged in your wallet on the Mooyi platform. They allow you to engage with your audience and capture their attention online and offline.",
      },
      {
        subtitle: "What do I do if I exhaust the credits in my wallet?",
        subContent:
          "You can easily top up your Mooyi credits when your balance has been exhausted. Simply navigate to the billing section and follow the instructions to add credits, ensuring uninterrupted engagement with your audience.",
      },
      {
        subtitle: "How much does a survey response cost?",
        subContent: "The response cost varies, generally from $2 to $5. You can buy units whenever you need them.",
      },
      {
        subtitle: "Do unused units roll over to the next period?",
        subContent:
          "No, unused units do not roll over to the next subscription period. Nevertheless, there is a 7-day grace period during which you can still utilise these responses before the next payment.",
      },
    ],
  },
  {
    id: 3,
    title: "Survey Creation and Support",
    content: [
      {
        subtitle: "How do I create a survey on Mooyi™?",
        subContent:
          "Creating a survey is straightforward. Use our intuitive survey builder, select from pre-existing templates, or design your questions from scratch.",
      },
      {
        subtitle: "What are screening questions?",
        subContent:
          "Screening questions allow you to filter participants based on specific criteria, ensuring you only gather insights from the most relevant audience.",
      },
      {
        subtitle: "What are branching questions?",
        subContent:
          "Branching questions allow you to guide customers through tailored question paths based on their answers.",
      },
      {
        subtitle: "Can I choose whether to survey the Mooyi audience or my contacts?",
        subContent:
          "Yes. Depending on your research needs and objectives, you can survey our diverse audience or your contacts. It's all about allowing you to tailor your surveys for impact.",
      },
      {
        subtitle: "What counts as a response?",
        subContent:
          "A response is counted when all the required survey questions are completed and submitted by one individual.",
      },
      {
        subtitle: "What kind of support does Mooyi™ offer?",
        subContent:
          "All paid subscription plans come with dedicated support from our in-house research, strategy, and analytics consultant team.",
      },
      {
        subtitle: "Can I get expert advice on survey design?",
        subContent:
          "Absolutely! Our team is here to assist you with survey design, question types, and audience targeting to ensure meaningful data collection.",
      },
    ],
  },
  {
    id: 4,
    title: "Contacts",
    content: [
      {
        subtitle: "How do I add contacts on Mooyi?",
        subContent:
          "You can add contacts by uploading a CSV file, entering their details manually, or integrating an API. The aim is to build a database of likely survey participants or feedback providers.",
      },
      {
        subtitle: "How many contacts can I add on Mooyi?",
        subContent:
          "The number varies depending on your subscription plan. Choose the plan that best suits your needs for managing your contacts effectively.",
      },
      {
        subtitle: "What are contact tags?",
        subContent: "Contact tags allow for easy organisation and targeting specific segments within your contacts.",
      },
    ],
  },
  {
    id: 5,
    title: "Mooyi Audience and Data Quality",
    content: [
      {
        subtitle: "Who makes up the Mooyi audience?",
        subContent:
          "Our audience consists of individuals from various demographics, ensuring a comprehensive view of your research needs.",
      },
      {
        subtitle: "Where does Mooyi source its audience from?",
        subContent:
          "We collaborate with trusted partners to tap into large audience panels and employ stringent validation processes to source our audience, ensuring authenticity and reliability",
      },
      {
        subtitle: "Can I select my audience based on specific criteria?",
        subContent:
          "Absolutely! We offer various targeting options, allowing you to target your surveys based on specific demographics or characteristics relevant to your research.",
      },
      {
        subtitle: "How does Mooyi handle incomplete or inconsistent data?",
        subContent:
          "We have algorithms and processes to identify and handle incomplete or inconsistent data, ensuring that only high-quality data is used for analysis.",
      },
      {
        subtitle: "What steps are taken to prevent data bias or skewing?",
        subContent:
          "We are committed to eliminating bias in our data collection and analysis processes. To ensure unbiased insights, we employ various techniques, including random sampling and statistical adjustments.",
      },
      {
        subtitle: "Is the data compliant with privacy regulations and standards?",
        subContent:
          "Absolutely! We adhere to all relevant global and state privacy regulations and standards, ensuring that the data is collected, stored, and processed securely and competently.",
      },
    ],
  },
  {
    id: 6,
    title: "Integration and Customisation",
    content: [
      {
        subtitle: "Can I integrate Mooyi with other tools or platforms we use?",
        subContent:
          "Yes. Mooyi offers API integrations to connect seamlessly with other tools and platforms, enhancing data collection and analysis capabilities.",
      },
      {
        subtitle: "Is there an option for white labelling or custom branding of the surveys?",
        subContent:
          "Absolutely! We offer custom branding options to align the survey experience with your brand identity, ensuring a cohesive user experience.",
      },
      {
        subtitle: "What types of analytics and reporting options does Mooyi offer?",
        subContent:
          "Mooyi provides detailed analytics and reporting features, including real-time dashboards, to help you derive actionable insights from your survey data.",
      },
      {
        subtitle: "Can I export the survey data for further analysis or integration with other systems?",
        subContent:
          "Yes. You can easily export your survey data in various formats for further analysis or integration with other systems.",
      },
    ],
  },
  {
    id: 7,
    title: "Support",
    content: [
      {
        subtitle: "What support do you offer?",
        subContent:
          "All paid subscription plans enjoy dedicated support from Scalelab, our in-house team of product experts who help you enhance and act on your findings.",
      },
      {
        subtitle: "Can you help me get started?",
        subContent:
          "Your dedicated expert will help you onboard to publish your first survey. The objective is to help you get the most out of the platform and provide ongoing research advice every step of the way. Read more about how enterscale can help support your growth goals.",
      },
    ],
  },
];

const Faq: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const handleSetIndex = (idx: number) => {
    setIndex(idx);
  };

  const handleToggle = (id: number) => {
    setIndex(index === id ? 0 : id);
  };

  const handleSearch = (searchTerm: string) => {
    const filteredData = faqData.filter((item) => {
      return item.content.some((contentItem) => contentItem.subtitle.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    setIndex(filteredData[0]?.id);
    window.location.hash = `#${filteredData[0]?.id}`;
    setSearch("");
  };

  return (
    <div>
      <FaqHero
        title="Frequently Asked Questions "
        desc="Mooyi helps businesses gain actionable insights through surveys. Whether you want to understand customer behaviour, test new products, or analyse market trends, Mooyi has got you covered."
        desktopImg={faqBackground}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
      <div className="md:flex items-start md:space-x-5 md:p-[4rem] px-5 py-[7rem]">
        <div className="border rounded-2xl p-8 space-y-5 w-[40%] hidden md:block">
          {faqData.map((item, i) => (
            <p
              key={i}
              className={`py-2 w-full hover:bg-hoverBlue px-5 rounded-lg text-[20px] font-[500] cursor-pointer transition-all duration-300 ease-in-out ${
                index === item.id && "bg-primary text-white hover:bg-primary"
              }`}
              onClick={() => handleSetIndex(item.id)}
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="w-full md:px-10 space-y-2">
          {faqData.map((item, i) => {
            const { title, content, id } = item;
            return (
              <div
                id={`${item.id}`}
                key={i}
                className={`border rounded-xl px-5 py-3 transition-all duration-300 cursor-pointer ${
                  index === id && "border-primary transition-colors"
                }`}
                onClick={() => handleToggle(id)}
              >
                <div className={`flex justify-between items-center ${index === id && "text-primary"}`}>
                  <p className="text-[20px] font-[500]">{title}</p>
                  {index === id ? (
                    <p>
                      <IoIosArrowUp />
                    </p>
                  ) : (
                    <p>
                      <IoIosArrowDown />
                    </p>
                  )}
                </div>
                {index === id ? (
                  <div className="pt-5 space-y-4">
                    {content.map((item, j) => (
                      <div key={j} className="space-y-1">
                        <p className="font-medium text-[18px]">{item.subtitle}</p>
                        <p className="text-[15px]">{item.subContent}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
