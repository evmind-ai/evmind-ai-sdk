import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AboutoBT from "@assets/images/about-b-t.svg";
import AboutoBB from "@assets/images/about-b-b.svg";
import Image from "next/image";

interface FAQItemProps {
    title: string;
    number: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
    title,
    number,
    content,
    isOpen,
    onClick,
}) => {
    return (
        <div
            id="faqs"
            className={`border-2 ${isOpen ? "border-[#FFFFFF0F]" : "border-[#FFFFFF0F]"
                } rounded-lg overflow-hidden`}
        >
            <motion.div
                className={`flex items-start justify-between px-6 py-4 cursor-pointer ${isOpen ? "bg-transparent" : "bg-transparent"
                    }`}
                onClick={onClick}
            >
                <span className="text-[#FFFFFF] font-Nueu font-medium sm:text-2xl text-lg">
                    {number}
                </span>
                <div className="flex space-x-6">
                    <div className="flex flex-col">
                        <span className="text-white md:text-2xl text-xl max-[570px]:text-sm font-medium text-center px-4 ">
                            {title}
                        </span>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden mt-2"
                            >
                                <div className="text-gray-300 font-Nueu sm:text-xl text-sm  font-light text-center mt-6">
                                    {content}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
                {isOpen ? (
                    <ChevronUp
                        className="text-white h-fit faqs-gradiant p-2"
                        size={114}
                    />
                ) : (
                    <ChevronDown className="text-white faq-gray p-2" size={40} />
                )}
            </motion.div>
        </div>
    );
};

const Faqs: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            number: "01",
            title:
                "What sets Project Evmind apart from other algorithmic trading platforms?",
            content:
                "Project Evmind distinguishes itself through a network of specialized AI agents, each skilled in unique trading strategies. These agents operate in a self-improving, incentive-driven environment overseen by a Master Agent, ensuring continuous adaptation, knowledge exchange, and performance enhancement.",
        },
        {
            number: "02",
            title: "How are Evmind tokens used within the ecosystem?",
            content:
                "Evmind tokens serve as the internal currency, enabling agents to purchase trading signals and insights from top-performing agents. Over time, users will also be able to acquire entire AI agents and their proven strategies by paying in Evmind tokens, further enriching the ecosystem’s utility and value proposition.",
        },
        {
            number: "03",
            title: "Are the strategies and trades made by the agents transparent?",
            content:
                "Individual agent activities remain private to ensure competitive advantage and strategy originality. However, the Master Agent provides aggregated performance metrics every 24 hours, promoting transparency and allowing underperforming agents (and eventually users) to identify which strategies or signals are worth purchasing. All trades done by the agent are publicly available on its respective blockchain.",
        },
        {
            number: "04",
            title: "How does the Master Agent ensure agents continue to improve?",
            content:
                "The Master Agent monitors key performance indicators—profitability, execution speed, and accuracy—triggering retraining when agents underperform. This central oversight ensures that the network remains adaptive, driving agents to continuously refine their models and stay ahead of market shifts.",
        },
        {
            number: "05",
            title: "Is the Evmind token considered an investment?",
            content:
                "The Evmind token is purely a utility token designed to facilitate internal operations, signal exchanges, and agent acquisitions. It does not represent equity, dividends, or any intrinsic investment value. Users should engage with the ecosystem understanding that the token’s function is limited to platform-specific activities.",
        },
    ];

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
            x: -50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="max-lg:px-4">
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
                    FAQs
                </h4>
                <Image
                    src={AboutoBB}
                    alt="border"
                    className="absolute -bottom-10 right-0 max-sm:-bottom-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-bottom-2"
                />
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="w-full max-w-4xl mx-auto mt-10 space-y-4"
            >
                {faqData.map((faq, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <FAQItem
                            number={faq.number}
                            title={faq.title}
                            content={faq.content}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Faqs;
