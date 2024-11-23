import { TProperty } from "@/types/PropertyTypes";
import React from "react";
import { useNavigate } from "react-router-dom";

type TCarolInfo = {
  img: string;
  title: string;
  text: string;
  category?: string;
  amount?: string;
  currency?: string;
  id?: number;
  data: TProperty;
};

const CarouselCard: React.FC<TCarolInfo> = ({ img, title, text, category, amount, currency, id, data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="space-y-3 mt-2 mx-5 overflow-hidden rounded-md border hover:border-blue-100 relative h-[300px] cursor-pointer"
      onClick={() =>
        navigate(id !== undefined ? `/property-detail/${id}` : "", { state: id !== undefined ? data : "" })
      }
    >
      <div className="flex items-center justify-center">
        <div className="   ">
          <img src={img} alt="" className="object-cover md:w-[600px] w-[400px] h-[200px]" />
        </div>
      </div>
      <div>
        {category !== undefined && (
          <div className="bg-white absolute top-1 right-1 py-1 rounded-md px-3">
            <p>{category}</p>
          </div>
        )}
      </div>
      <div>
        {amount !== undefined && (
          <div className="bg-white absolute top-[10rem] right-1 py-1 rounded-md px-3">
            <p>
              {amount} <span className="text-[11px]">{currency}</span>
            </p>
          </div>
        )}
      </div>
      <div className="space-y-1 text-center md:text-left px-5 pb-2">
        <p className="md:text-[17px] font-secondary">{title}</p>
        <div className="flex justify-center md:justify-start">
          <p className="md:text-[16px] text-[14px]  font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
