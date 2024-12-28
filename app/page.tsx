"use client";
import React, { useState } from "react";
import Hero from "./(home)/hero";
import Navbar from "@/src/components/navbar";
import About from "./(home)/about";
import Footer from "./(home)/footer";
import Roadmap from "./(home)/roadmap";
import Tokenomics from "./(home)/tokenomics";
import Ouragent from "./(home)/our-agent";
import Faqs from "./(home)/faq";

const Home: React.FC = () => {
  return (
    <main className="relative">
      <div className="fixed top-2 w-full z-50">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Ouragent />
      <Roadmap />
      <Tokenomics />
      <div className="mt-32 relative z-40">
        <Faqs />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
