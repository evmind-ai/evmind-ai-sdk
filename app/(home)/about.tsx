import React from "react";
import Image from "next/image";
import AboutoBT from "@assets/images/about-b-t.svg";
import AboutoBB from "@assets/images/about-b-b.svg";
import AboutLogo from "@assets/images/about-logo.svg";
import AboutTexture from "@assets/images/about-texture-top.png";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div
            id="about"
            className="min-h-screen container flex flex-col justify-center relative "
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}

                className="relative lg:w-[698px] w-full mx-auto">
                <Image
                    src={AboutoBT}
                    alt="border"
                    className="absolute -top-10 left-0 max-sm:-top-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-top-2"
                />
                <h4 className="font-ClashGrotesk font-medium sm:text-[64px] text-4xl max-[380px]:text-3xl text-center">
                    About Us
                </h4>
                <Image
                    src={AboutoBB}
                    alt="border"
                    className="absolute -bottom-10 right-0 max-sm:-bottom-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-bottom-2"
                />
            </motion.div>
            <div className="lg:h-[594px] h-[440px] min-h-full relative lg:w-[90%] w-full mx-auto mt-20 xl:p-24 lg:p-10 p-6 about-card-bg rounded-[20px] ">
                <motion.p initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, type: "spring", damping: 12 }}
                    viewport={{ once: true }}

                    className="font-light md:text-2xl text-base text-[#FFFFFF] xl:w-[800px] md:w-[60%] w-[70%] max-[540px]:w-full">
                    <span className="font-bold sm:text-[38px] text-2xl blue-txt-gradient">
                        Evmind AI,
                    </span>{" "}
                    Network is built on a bold vision: to create a self-evolving network
                    of AI agents that can navigate the complexities of global
                    cryptocurrency markets. Each agent specializes in a unique trading
                    discipline—ranging from fundamental analysis to trend following and
                    social sentiment extraction—while a central Master Agent oversees
                    their performance, triggers retraining, and promotes continuous
                    improvement.
                </motion.p>
                <motion.h4
                    initial={{ opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="about-txt lg:text-[104px] text-7xl max-[400px]:text-5xl font-bold absolute bottom-0 leading-[129px] right-7 ">
                    Evmind AI
                </motion.h4>
                <Image
                    src={AboutLogo}
                    alt="Image"
                    className="absolute -top-44 -right-44 max-[1740px]:w-[300px] max-[1740px]:-right-20 max-[1740px]:-top-20 max-lg:top-0 max-lg:right-0 max-lg:w-[200px] max-[540px]:hidden"
                />
                <Image
                    src={AboutTexture}
                    alt="Texture"
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                />
            </div>
            <div className="sm:w-[478px] w-[40%] h-[478px] about-light absolute top-1/2 -translate-y-1/2 left-0" />
        </div>
    );
};

export default About;
