import ScaleLoader from "react-spinners/ScaleLoader";

const PreLoader = ({ text="" }) => {
  return (
    <div className="absolute bg-white flex flex-col justify-center items-center top-0 left-0 z-30 w-full h-[100vh]">
      <ScaleLoader height="70px" width={4} margin={4} color="#0A1F44" />
      <p className="text-deepBlue mt-2">{text}...</p>
    </div>
  );
};

export default PreLoader;
