"use client";
import React from "react";
import loaderimg from "@assets/images/loaderimg.png";
import Image from "next/image";
import { motion } from "framer-motion";
const MainLoader = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-50 flex flex-col justify-center items-center bg-[#00000080]  backdrop-blur-[1rem] overflow-x-clip">
      <motion.div
        animate={{ rotate: 360 }} // Rotate 360 degrees
        transition={{
          duration: 2, // Duration of one rotation (in seconds)
          repeat: Infinity, // Infinite loop
          ease: "linear", // Smooth, constant speed
        }}
      >
        <Image
          src={loaderimg}
          alt="loaderimg"
          className="size-8 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default MainLoader;
