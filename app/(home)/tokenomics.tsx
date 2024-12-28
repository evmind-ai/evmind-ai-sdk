import React from "react";
import Image from "next/image";
import tokenomicsImg from "@assets/images/tokenomics-img.svg";
import AboutoBT from "@assets/images/about-b-t.svg";
import AboutoBB from "@assets/images/about-b-b.svg";
import { motion } from "framer-motion"

const Tokenomics = () => {
    return (
        <div id="toknomics" className="container min-h-full mb-10">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}

                className="relative lg:w-[698px] w-full mx-auto">
                <Image
                    src={AboutoBT}
                    alt="border"
                    className="absolute -top-10 left-0 max-sm:-top-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-top-3"
                />
                <h4 className="font-ClashGrotesk font-medium md:text-[64px] text-4xl max-[550px]:text-3xl text-center">
                    Tokenomics
                </h4>
                <Image
                    src={AboutoBB}
                    alt="border"
                    className="absolute -bottom-10 right-0 max-sm:-bottom-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-bottom-3"
                />
            </motion.div>
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative">
                <Image src={tokenomicsImg} alt="tokenomics" className="mx-auto mt-20" />
                <div className="md:w-[600px] w-[70%] h-[70%] md:h-[600px] about-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
        </div>
    );
};

export default Tokenomics;
