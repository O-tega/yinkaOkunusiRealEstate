import { useEffect, useState } from "react";
import Data1 from "assets/images/data1.png";
import Data2 from "assets/images/data2.png";
import { motion } from "framer-motion";

const MobileMarketing = () => {
  const [active, setActive] = useState<number | null>(1);

  const toggleSlider = (id: number) => {
    setActive(active === id ? null : id);
  };

  useEffect(() => {
    if (active !== null) {
      if (active >= 3) {
        setActive(1);
      } else {
        const response = setInterval(() => setActive((v) => (v !== null ? v + 1 : null)), 5000);

        return function () {
          clearInterval(response);
        };
      }
    }
  }, [active]);

  return (
    <div className="bg-[#fff] sm:py-[4em] py-[1em]">
      {active === 1 ? (
        <div className="w-[85%] md:w-[85%]  flex md:flex-col flex-col-reverse mx-auto my-[2em] sm:my-[4em]">
          <motion.div
            className="w-[100%] md:w-[70%] flex flex-col gap-y-[24px]"
            initial={{
              opacity: 0.1,
            }}
            transition={{
              duration: 3,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <p
              className="font-[900] md:text-[44px] 
          text-[#0F172A] text-[32px] leading-[37.76px]
          md:leading-[56px]"
            >
              In-built CRM to start managing customers immediately.
            </p>
            <p className=" text-[#737373] text-[16px] md:text-[18px]  w-[100%] md:w-[75%]">
              Migrating your data can take hours to weeks. You waste time and aren’t convinced you got it right.
            </p>
          </motion.div>

          <motion.div
            className="md:w-[70%] w-[100%] mx-auto mt-[4em]"
            initial={{
              opacity: 0.1,
            }}
            transition={{
              duration: 3,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <img src={Data1} alt="Single" className="sm:w-[70%] w-[100%]  mx-auto" />
          </motion.div>
        </div>
      ) : null}

      {active === 2 ? (
        <div className="w-[85%] md:w-[85%]  flex md:flex-col flex-col-reverse mx-auto  my-[4em]">
          <motion.div className=" w-[100%]  md:w-[60%] flex flex-col gap-y-[24px]">
            <p className="font-[900] md:text-[44px] text-[#0F172A] text-[32px] leading-[37.76px] md:leading-[56px]">
              Easy data entry and bulk upload, CSV and XLSX compatible.
            </p>
            <p className=" text-[#737373] text-[16px] md:text-[18px]  w-[100%] md:w-[85%]">
              mooyi lets you migrate your data quickly, flexibly and in minutes.
            </p>
          </motion.div>

          <motion.div
            className=" sm:w-[70%] w-[100%] mx-auto my-[1em]  mt-[4em]"
            initial={{
              opacity: 0.1,
            }}
            transition={{
              duration: 3,
            }}
            animate={{
              // x: [40, 0],
              opacity: 1,
            }}
          >
            <img src={Data2} alt="Single" className="sm:w-[70%] w-[100%] mx-auto" />
          </motion.div>
        </div>
      ) : null}

      {/* {active === 3 ? (
   <div className="w-[85%] md:w-[85%]  flex md:flex-col flex-col-reverse mx-auto  my-[4em]">
          <motion.div
            className=" w-[100%] 
     md:w-[70%] flex flex-col gap-y-[24px]"
            initial={{
              opacity: 0.1,
            }}
            transition={{
              duration: 3,
            }}
            animate={{
              opacity: 1,
            }}
          >
            <p
              className="font-[900] md:text-[48px] 
         text-[#0F172A] text-[32px] leading-[37.76px]
         md:leading-[56px]"
            >
              Flexible integration - APIs and 1-click connect to your
              Flutterwave store. (Coming soon)
            </p>
            <p className=" text-[#737373] text-[16px] md:text-[18px]  w-[100%] md:w-[85%]">
              Now you can spend less time you spend less time cleaning up data
              and more on engaging customers for growth.
            </p>
          </motion.div>

          <motion.div
            className=" md:w-[70%] w-[100%]  mx-auto my-[1em] "
            initial={{
              opacity: 0.1,
            }}
            transition={{
              duration: 3,
            }}
            animate={{
              //  x: [40, 0],
              opacity: 1,
            }}
          >
            <Image src={Data3} alt="Single" className="sm:w-[70%] w-[100%]  mx-auto" />
          </motion.div>
        </div>
      ) : null} */}

      <div className="flex w-[90px] items-center justify-between mx-auto">
        <div
          className={`bg-deepBlue transition ease-in duration-300 ${
            active === 1 ? "opacity-[1] w-[48px]" : "opacity-[0.3] w-[12px]"
          } h-[8px] rounded-[6px]`}
          onClick={() => toggleSlider(1)}
        ></div>
        <div
          className={`bg-deepBlue transition ease-in duration-300 ${
            active === 2 ? "opacity-[1] w-[48px]" : "opacity-[0.3] w-[12px]"
          }   h-[8px] rounded-[6px]`}
          onClick={() => toggleSlider(2)}
        ></div>
        {/* <div
          className={`bg-deepBlue transition ease-in ${
            active === 3 ? "opacity-[1] w-[48px]" : "opacity-[0.3] w-[12px]"
          } h-[8px] rounded-[6px]`}
          onClick={() => toggleSlider(3)}
        ></div> */}
      </div>
    </div>
  );
};

export default MobileMarketing;
