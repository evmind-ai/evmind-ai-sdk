import React from "react";
import footerlogo from "@assets/images/footerlogo.png";
import Image from "next/image";
import x from "@assets/images/x.png";
import telegram from "@assets/images/telegram.png";
import eterscan from "@assets/images/etherscan.png";
import dextool from "@assets/images/dextool.png";
import toast from "react-hot-toast";
import uri from "@/src/constants/external-links";
import pumpin from "@assets/images/pumpin.png";
import { motion } from "framer-motion"

const Footer = () => {
  const ethtext = "0x4A1e6Cea0C19152bd70C42296223AE51718eb8f2";
  const soltext = "FQnSa9XvoXVzC15MnoNyCCs9vNhF5AKQuFuZ5Dkhpump";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="pt-40">
      <div className="container flex justify-center items-center">
        <div className="w-[1320px] min-h-[411px] backdrop-blur-[27px] footer-div pt-9 px-7 max-xl:w-full max-xl:pb-5 max-sm:px-2">
          <div className="flex justify-between items-center max-lg:flex-col">
            <div className="flex items-start gap-2">
              <Image
                src={footerlogo}
                alt="footerlogo"
                className="max-sm:w-[70px]"
              />
              <div>
                <h5 className="text-white text-[32px] font-semibold max-sm:text-2xl">
                  Evmind{" "}
                </h5>
                <p className="text-white text-opacity-[0.46] text-base font-normal max-sm:text-xs">
                  Networked Exploratory Xilinear Utility System
                </p>
              </div>
            </div>

            <div>
              <div
                className="w-[731px] h-[63px] rounded-[100px] border-2 border-white border-opacity-[0.03]
           bg-white bg-opacity-[0.07] backdrop-blur-[10px] flex items-center justify-between pl-5 max-lg:w-full max-lg:mt-10 max-sm:w-[320px]"
              >
                <h5 className="text-white text-lg font-medium max-md:text-xs break-all">
                  CA: {ethtext}
                </h5>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(ethtext); // Copy to clipboard
                    toast.success("Address copied!"); // Show success toast
                  }}
                  className="text-[#000409] text-center text-xl font-normal rounded-[100px] w-[127px] 
                  h-[63px] border-2 border-[#FFFFFF08] copy-shadow break-all max-sm:w-[70px] max-sm:h-[50px] max-sm:text-xs"
                >
                  Copy
                </button>
              </div>
              <div
                className="w-[731px] h-[63px] rounded-[100px] border-2 border-white border-opacity-[0.03]
           bg-white bg-opacity-[0.07] backdrop-blur-[10px] flex items-center justify-between pl-5 max-lg:w-full max-lg:mt-10 max-sm:w-[320px] mt-5"
              >
                <h5 className="text-white text-lg font-medium max-md:text-xs break-all">
                  Sol CA: {soltext}
                </h5>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(soltext); // Copy to clipboard
                    toast.success("Address copied!"); // Show success toast
                  }}
                  className="text-[#000409] text-center text-xl font-normal rounded-[100px] w-[127px] 
                  h-[63px] border-2 border-[#FFFFFF08] copy-shadow break-all max-sm:w-[70px] max-sm:h-[50px] max-sm:text-xs"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="mt-14 flex justify-between items-center max-xl:flex-col max-xl:justify-center max-lg:mt-10">
            <div className="flex gap-[29px] items-center">
              <Image
                src={x}
                alt="x"
                onClick={() => window.open(uri.TWITTER)}
                className="max-sm:w-[50px] cursor-pointer"
              />
              <Image
                src={telegram}
                alt="x"
                onClick={() => window.open(uri.TG)}
                className="max-sm:w-[50px] cursor-pointer"
              />
              <Image
                onClick={() => window.open(uri.DEXTOOL)}
                src={dextool}
                alt="x"
                className="max-sm:w-[50px] cursor-pointer"
              />
              <Image
                onClick={() => window.open(uri.PUMPIN)}
                src={pumpin}
                alt="x"
                className="max-sm:w-[50px] cursor-pointer"
              />
            </div>
            <div className="max-lg:mt-10">
              <p className="text-white text-opacity-30 text-xl font-normal">
                Menu
              </p>
              <div className="flex items-center gap-[49px] mt-5 max-sm:gap-3 ">
                <h5
                  onClick={() => {
                    scrollToSection("about");
                  }}
                  className="text-white text-2xl max-lg:text-xl max-md:text-xs font-normal max-[400px]:text-[10px] cursor-pointer"
                >
                  About Us
                </h5>
                <h5
                  onClick={() => {
                    scrollToSection("agent");
                  }}
                  className="text-white text-2xl max-lg:text-xl max-md:text-xs font-normal max-[400px]:text-[10px] cursor-pointer"
                >
                  Our Ai Agents
                </h5>
                <h5
                  onClick={() => {
                    scrollToSection("roadmap");
                  }}
                  className="text-white text-2xl max-lg:text-xl max-md:text-xs font-normal max-[400px]:text-[10px] cursor-pointer"
                >
                  Roadmap
                </h5>
                <h5
                  onClick={() => {
                    scrollToSection("toknomics");
                  }}
                  className="text-white text-2xl max-lg:text-xl max-md:text-xs font-normal max-[400px]:text-[10px] cursor-pointer"
                >
                  Tokenomics
                </h5>
                <h5
                  onClick={() => {
                    scrollToSection("faqs");
                  }}
                  className="text-white text-2xl max-lg:text-xl max-md:text-xs font-normal max-[400px]:text-[10px] cursor-pointer"
                >
                  FAQs
                </h5>
              </div>
            </div>
          </div>

          <h5 className="text-white text-xl font-normal text-center mt-[3rem] max-sm:mt-[3rem] max-sm:text-base">
            All rights reserved - Evmind AI Network - {new Date().getFullYear()}
          </h5>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
