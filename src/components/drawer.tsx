"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import uri from "../constants/external-links";
import CommmonUtils from "../utils/common";
import Link from "next/link";

interface DrawerTypes {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ setShowDrawer }: DrawerTypes) => {
  const [activeTab, setActiveTab] = useState("Home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed flex justify-end items-center inset-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm z-[200]"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25 }}
        className="h-full bg-black border-l-2 border-[#ffffff1f]  p-4 w-60 "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="text-white text-2xl cursor-pointer"
          onClick={() => setShowDrawer(false)}
        />

        <div className="flex  flex-col gap-4 mt-7">
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Home"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Home");
              scrollToSection("hero");
              setShowDrawer(false);
            }}
          >
            Home
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "About"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("About");
              scrollToSection("about");
              setShowDrawer(false);
            }}
          >
            About
          </h5>
          {/* <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Features"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Features");
              scrollToSection("agent");
              setShowDrawer(false);
            }}
          >
            our ai agent
          </h5> */}

          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Features"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
          >
            <Link href="/dapp">our ai agent</Link>
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Tokenomics"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Tokenomics");
              scrollToSection("roadmap");
              setShowDrawer(false);
            }}
          >
            Roadmap
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Whitepaper"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Whitepaper");
              scrollToSection("toknomics");
              setShowDrawer(false);
            }}
          >
            Tokenomics
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Whitepaper"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Whitepaper");
              scrollToSection("faqs");
              setShowDrawer(false);
            }}
          >
            FAQs
          </h5>

          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "github"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("github");
              CommmonUtils.openExternalLink(
                "https://github.com/Evmind-AI-Protocol/Evmind-AI-Trading"
              );
            }}
          >
            Github
          </h5>

          <button
            onClick={() => {
              window.open(uri.UNISWAP);
              setShowDrawer(false);
            }}
            className="text-[#00060B] blue-gradient px-6 py-2 rounded-full font-Nueu text-lg font-semibold text-center"
          >
            Buy now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
