import React, { useState } from "react";
import Image from "next/image";
import Logo from "@assets/images/Logo.svg";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import Drawer from "./drawer";
import uri from "../constants/external-links";
import CommmonUtils from "../utils/common";
import Link from "next/link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      id="home"
      className="container"
    >
      <div className="text-white flex items-center justify-between nav-bg lg:rounded-[20px] rounded-full px-5 h-[69px] mt-4">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" />
          {/* <h4 className="text-[27px] font-semibold text-[#FFFFFF] font-Roboto">
            Evmind
          </h4> */}
        </div>
        <div className="flex items-center justify-center gap-10 max-xl:hidden">
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Home"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Home");
              scrollToSection("hero");
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
            }}
          >
            About
          </h5>
          {/* <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "agent"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("agent");
              scrollToSection("agent");
            }}
          >
            our ai agent
          </h5> */}
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "agent"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
          >
            <Link href="/dapp">our ai agent</Link>
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "roadmap"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("roadmap");
              scrollToSection("roadmap");
            }}
          >
            Roadmap
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "Tokenomics"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("Tokenomics");
              scrollToSection("toknomics");
            }}
          >
            Tokenomics
          </h5>
          <h5
            className={`text-lg capitalize cursor-pointer ${
              activeTab === "faqs"
                ? "blue-txt-gradient"
                : "text-white font-light"
            }`}
            onClick={() => {
              setActiveTab("faqs");
              scrollToSection("faqs");
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
        </div>

        <button
          onClick={() => window.open(uri.UNISWAP)}
          className="text-[#00060B] blue-gradient px-6 py-2 rounded-full max-xl:hidden font-Nueu text-lg font-semibold cursor-pointer"
        >
          Buy Now
        </button>
        <div className="xl:hidden" onClick={() => setShowDrawer(true)}>
          <AiOutlineMenuFold className="text-3xl text-[#69F5FF]" />
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
