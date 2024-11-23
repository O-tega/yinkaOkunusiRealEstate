import CarouselCard from "@/components/Web/CarouselCArd";
import { propertyData } from "@/data/propertyData";

const ToLet = () => {
  const saleData = propertyData.filter((el) => el.l_category === "To Let");

  return (
    <div>
      <div className="text-[25px] font-[700] bg-blue-900 text-white w-full h-[50px] flex items-center justify-center rounded-t-[8px]">
        FOR SALES
      </div>
      <div className="mt-10">
        <div className="mt-2 md:grid grid-cols-3 gap-y-4 hidden ">
          {saleData?.map((item, i) => (
            <CarouselCard
              key={i}
              id={item.l_id}
              title={item.l_type}
              text={item.l_title.slice(0, 45)}
              img={item.l_img1}
              category={item.l_category}
              amount={item.l_amount}
              currency={item.l_currency}
              data={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToLet;
