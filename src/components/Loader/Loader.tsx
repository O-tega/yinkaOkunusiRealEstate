import { ScaleLoader } from "react-spinners";
import Logo from "@/assets/images/favicon.png";

const Loader = () => {
  return (
    <div className="absolute bg-white flex justify-center items-center top-0 left-0 z-30 w-full h-[100vh]">
      <div className="space-y-5 flex flex-col items-center">
        <img src={Logo} alt="" className="w-[50px] h-[50px]" />

        <ScaleLoader height="20px" width={4} margin={4} color="#47AAE1" />
      </div>
    </div>
  );
};

export default Loader;
