import { Link } from "react-router-dom";

type TCard = {
    img: string;
    title: string;
    subtitle: string;
    link: string;
  };
  
  const Card: React.FC<TCard> = ({ img, title, subtitle, link }) => {
    return (
      <Link to={link}>
        <div className="bg-white drop-shadow-xl rounded-lg w-[359px] h-[348px] flex flex-col items-center justify-center space-y-3 px-5 hover:border-primary hover:border transition-all delay-100">
          <div>
            <img src={img} alt="" className="w-[140px] h-[130px] object-contain" />
          </div>
          <div className="text-center pt-5">
            <p className="font-[500] text-[30px]">{title}</p>
            <p className="text-gray-400">{subtitle}</p>
          </div>
        </div>
      </Link>
    );
  };


  export default Card