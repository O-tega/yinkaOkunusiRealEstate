import CarouselCard from "@/components/Web/CarouselCArd";
import { TProperty } from "@/types/PropertyTypes";

const ToLet = ({ data }: { data: TProperty[] }) => {
  return (
    <div>
      <div className="text-[25px] font-[700] bg-blue-900 text-white w-full h-[50px] flex items-center justify-center rounded-t-[8px]">
        TO LET
      </div>
      <div className="mt-10">
        <div className="mt-2 md:grid grid-cols-3 gap-y-4 hidden ">
          {data?.map((item, i) => (
            <CarouselCard
              key={i}
              id={item.l_id}
              title={item.l_type}
              text={item.l_title}
              img={`https://yinka-web-cpbgdjcdhrd5bhfr.westeurope-01.azurewebsites.net/images/properties/${item.l_img1}`}
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
