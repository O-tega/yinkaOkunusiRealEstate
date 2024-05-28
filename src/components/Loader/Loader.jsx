import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  return (
    <div className="absolute bg-black flex justify-center items-center top-0 left-0 z-30 w-full h-[100vh]">
      <ScaleLoader height="70px" width={4} margin={4} color="#FFFFFF" />
    </div>
  );
};

export default Loader;
