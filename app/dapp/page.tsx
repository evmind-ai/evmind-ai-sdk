import React from "react";
import DappNavbar from "./dapp-navbar";
import MainSection from "./main-section";

const Dapp = () => {
  return (
    <div className="relative min-h-screen">
      <video
        muted
        autoPlay
        loop
        playsInline
        className=" w-full h-full object-cover  absolute inset-0 -z-30 "
      >
        <source src={"/assets/video/hero-video.mp4"} type="video/mp4" />
      </video>
      <div>
        <DappNavbar />
        <MainSection />
      </div>
    </div>
  );
};

export default Dapp;
