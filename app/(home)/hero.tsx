import React from "react";
import Image from "next/image";
import BorderImg from "@assets/images/border-image.svg";
import Logo from "@assets/images/Logo.svg";
import HeroBtnBg from "@assets/images/hero-btn-bg.svg";
import HeroBgLeft from "@assets/images/hero-bg-left.png";
import HeroBgRight from "@assets/images/hero-bg-right.png";
import logo2 from "@assets/images/logo2.png";
import { motion } from "framer-motion";
const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center"
    >
      <Image
        src={HeroBgLeft}
        alt="HeroBgLeft"
        className="absolute left-0 bottom-0 max-xl:w-[440px] max-md:w-[300px] z-20"
        style={{ mixBlendMode: "screen" }}
      />
      <Image
        src={HeroBgRight}
        alt="HeroBgLeft"
        className="absolute right-0 top-0 max-xl:w-[440px] max-md:w-[300px] z-20"
        style={{ mixBlendMode: "screen" }}
      />
      <div className="w-full h-screen bg-[#00000052] fixed inset-0" />
      <div className=" w-full h-full absolute inset-0 -z-30">
        <video
          muted
          autoPlay
          loop
          playsInline
          className=" w-full h-full object-cover "
        >
          <source src={"/assets/video/hero-video.mp4"} type="video/mp4" />
        </video>
      </div>

      <motion.div
        variants={itemVariants}
        className="relative h-[37px] w-[226px] flex justify-center items-center gap-1 z-40"
      >
        <Image src={BorderImg} alt="Border image" className="" />
        <div className="absolute flex justify-center items-center left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap gap-2">
          <Image src={logo2} alt="logo" className="" />
          <h4 className="font-ClashGrotesk text-[30px] font-medium text-white">
            Evmind
          </h4>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-4 z-40">
        <h4 className="font-ClashGrotesk  xl:text-[109px] sm:text-6xl text-3xl font-medium xl:leading-[105px] text-center ">
          An inter <span className="blue-txt-gradient">agent</span> economy{" "}
          <br />
          Where <span className="blue-txt-gradient">AI Agents</span> trade,
          <br /> adopt and thrive
        </h4>
      </motion.div>
      <motion.p
        variants={itemVariants}
        className="md:text-2xl text-xl font-light text-center text-[#FFFFFF] max-[550px]:px-10 max-[550px]:mt-5 z-40"
      >
        Networked Exploratory Xilinear Utility System
      </motion.p>
      <motion.div
        onClick={() =>
          window.open(
            "https://Evmind-ai-agents-network.gitbook.io/Evmind-ai-agents-network-docs"
          )
        }
        variants={itemVariants}
        className="relative w-[203px] h-[59px] flex items-center justify-center mt-10 cursor-pointer z-40"
      >
        <Image
          src={HeroBtnBg}
          alt="HeroBtnBg"
          className="absolute inset-0 -z-10"
        />
        <h4 className="font-Nueu text-lg font-medium text-[#FFFFFF]">
          Whitepaper
        </h4>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
