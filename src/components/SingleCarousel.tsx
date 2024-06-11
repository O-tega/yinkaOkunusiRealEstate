"use client";
import React, { useEffect, useState } from "react";
import flutterwave1 from "@/assets/images/futterwave/flutterwave1.png";
import flutterwave3 from "@/assets/images/futterwave/flutterwave3.png";
import flutterwave4 from "@/assets/images/futterwave/flutterwave4.png";
import flutterwave5 from "@/assets/images/futterwave/flutterwave5.png";
import { AnimatePresence, motion } from "framer-motion";

const flutterImages = [flutterwave1, flutterwave3, flutterwave4, flutterwave5];

const SingleCarousel: React.FC = () => {
  const [images, setImages] = useState([...flutterImages]);
  const [isAnimating, setIsAnimating] = useState(false);
  // const variant = {
  //   visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  //   hidden: { opacity: 0, x: "-10%", transition: { duration: 0.8 } },
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setImages((prevImages) => [
          ...prevImages.slice(1),
          prevImages[0], // Put the first image at the back
        ]);
        setIsAnimating(false);
      }, 500); // Adjust the duration of the animation
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center md:space-x-5 overflow-hidden overflow-x-auto no-scrollbar">
      <AnimatePresence initial={false}>
        {images.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: "-10%" }}
            className="min-w-[555px] md:min-w-[555px] overflow-hidden "
            style={{
              opacity: isAnimating && i === 0 ? 0 : 1, // Hide the first image during animation
            }}
            animate={{
              translateX: isAnimating ? "-555px" : 0,
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: isAnimating ? 0.5 : 0 }}
          >
            <img src={item} alt="flutter images" className="transition-all duration-300 w-full" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SingleCarousel;
