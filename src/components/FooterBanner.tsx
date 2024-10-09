// import PrimaryButton from "./Button/PrimaryButton";

const FooterBanner = (text: string) => {
  return (
    <div className="bg-deepBlue">
      <div
        className="bg-footerHero 
bg-center py-[4em] bg-cover bg-no-repeat 
 flex flex-col items-center justify-center text-white "
      >
        <h1 className="md:text-[44px] w-[100%] text-[32px] lg:w-[60%] font-[900] text-center leading-[37.76px] md:leading-[54px]">
          {text === "" ? "Start elevating your marketing today." : text}
        </h1>

        <a href={`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/auth/register`}>
          {/* <PrimaryButton
            text={ btnText === "" ? "Create an Account" : btnText}
            css=" font-normal w-[200px] h-[45px] text-[14px] mt-[2em]"
            type="button"
          /> */}
        </a>
        <p className="text-[14px] font-light mt-2">Terms and conditions apply.</p>
      </div>
    </div>
  );
};

export default FooterBanner;
