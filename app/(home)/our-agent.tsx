import React from "react";
import AboutoBT from "@assets/images/about-b-t.svg";
import AboutoBB from "@assets/images/about-b-b.svg";
import Image from "next/image";
import MasterAgent from "@assets/images/agent/master-agent-icon.png";
import Degen from "@assets/images/agent/degen-trade-icon.png";
import Fundamental from "@assets/images/agent/fundamental-icon.png";
import Technical from "@assets/images/agent/technical-icon.png";
import Trend from "@assets/images/agent/trend-icon.png";
import Social from "@assets/images/agent/social-icon.png";
import Telegram from "@assets/images/agent/telegram-icon.png";
import Copy from "@assets/images/agent/copy-icon.png";
import Twitter from "@assets/images/agent/twitter-icon.png";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion"

const Ouragent = () => {

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
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            id="agent" className="min-h-screen container mb-20">
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
                    Our Ai Agents
                </h4>
                <Image
                    src={AboutoBB}
                    alt="border"
                    className="absolute -bottom-10 right-0 max-sm:-bottom-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-bottom-3"
                />
            </motion.div>
            <motion.div
                variants={itemVariants}
                className="mt-20 our-agent-card sm:py-7 py-5 sm:px-10 px-3 flex max-lg:flex-col lg:gap-x-20 gap-y-10 items-center lg:hidden">
                <Image
                    src={MasterAgent}
                    alt="master agent icon"
                    className="max-xl:w-[240px] max-sm:w-[70%]"
                />
                <div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[Brico] flex items-start gap-2">
                        <GoDotFill className="sm:mt-2 mt-1 text-xl" /> Monitors all eight
                        specialized agents, accessing their full trading logs, decision
                        paths, and wallet balances.
                    </p>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[Brico] flex items-start gap-2">
                        <GoDotFill className="sm:mt-2 mt-1 text-xl" />
                        Evaluates profitability, execution speed, accuracy, and other key
                        performance indicators.
                    </p>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[Brico] flex items-start gap-2">
                        <GoDotFill className="sm:mt-2 mt-1 text-xl" />
                        Initiates retraining of underperforming agents, adjusting their
                        internal models, hyperparameters, or data feeds.
                    </p>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[Brico] flex items-start gap-2">
                        <GoDotFill className="sm:mt-2 mt-1 text-xl" />
                        Schedules daily performance reports, aggregating key statistics
                        without revealing agents’ trade-by-trade data.
                    </p>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[Brico] flex items-start gap-2">
                        <GoDotFill className="sm:mt-2 mt-1 text-3xl" />
                        Privacy & Control: The Master Agent keeps all agent activities
                        confidential. No direct agent-to-agent visibility exists except via
                        the aggregated performance reports.
                    </p>
                </div>
            </motion.div>

            <div className="grid sm:grid-cols-6 grid-cols-1 sm:grid-rows-4  gap-4 lg:mt-20 -mt-[20rem] max-sm:mt-4">
                {/* one  */}

                <motion.div
                    variants={itemVariants} className="col-span-6 our-agent-card py-7 px-10 flex max-lg:flex-col lg:gap-x-20 gap-y-10 items-center max-lg:hidden">
                    <Image
                        src={MasterAgent}
                        alt="master agent icon"
                        className="max-xl:w-[240px]"
                    />
                    <div>
                        <p className="font-Brico xl:text-2xl text-xl text-[Brico] flex items-start gap-2">
                            <GoDotFill className="mt-2 text-xl" /> Monitors all eight
                            specialized agents, accessing their full trading logs, decision
                            paths, and wallet balances.
                        </p>
                        <p className="font-Brico xl:text-2xl text-xl text-[Brico] flex items-start gap-2">
                            <GoDotFill className="mt-2 text-xl" />
                            Evaluates profitability, execution speed, accuracy, and other key
                            performance indicators.
                        </p>
                        <p className="font-Brico xl:text-2xl text-xl text-[Brico] flex items-start gap-2">
                            <GoDotFill className="mt-2 text-xl" />
                            Initiates retraining of underperforming agents, adjusting their
                            internal models, hyperparameters, or data feeds.
                        </p>
                        <p className="font-Brico xl:text-2xl text-xl text-[Brico] flex items-start gap-2">
                            <GoDotFill className="mt-2 text-xl" />
                            Schedules daily performance reports, aggregating key statistics
                            without revealing agents’ trade-by-trade data.
                        </p>
                        <p className="font-Brico xl:text-2xl text-xl text-[Brico] flex items-start gap-2">
                            <GoDotFill className="mt-2 text-3xl" />
                            Privacy & Control: The Master Agent keeps all agent activities
                            confidential. No direct agent-to-agent visibility exists except
                            via the aggregated performance reports.
                        </p>
                    </div>
                </motion.div>

                {/* two  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3 sm:row-start-2 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Degen} alt="degen icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Degen Trade
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Executes high-risk, high-reward trades, often short-term and
                        speculative. Specializes in volatile crypto assets and leverages
                        quick in-and-out strategies.
                    </p>
                </motion.div>

                {/* three  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3 xl:col-start-3 sm:col-start-4 sm:row-start-2 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Fundamental} alt="fundamental icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Fundamental Analysis Trader
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Focuses on long-term value, studying tokenomics, protocol
                        fundamentals, on-chain metrics, and macroeconomic factors to make
                        rational investment decisions.
                    </p>
                </motion.div>

                {/* four  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3  lg:col-start-5 sm:lg:row-start-2 sm:row-start-3 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Technical} alt="technical icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Technical Analysis Trader
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Relies on chart patterns, technical indicators (RSI, MACD, volume
                        profiles), and historical price data to pinpoint entry and exit
                        points.
                    </p>
                </motion.div>

                {/* five  */}

                <motion.div variants={itemVariants} className=" lg:col-span-2 sm:col-span-3 lg:col-start-1 sm:col-start-4 sm:row-start-3 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Trend} alt="trend icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Trend/Meta Trader
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Identifies broad market regimes, seeks momentum opportunities, and
                        exploits systematic shifts in asset correlations, volatility cycles,
                        and trending sectors.
                    </p>
                </motion.div>

                {/* six  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3 lg:col-start-3 lg:row-start-3 sm:row-start-4 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Social} alt="social icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Social Activity-Based Trade
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Scans social platforms, forums, and community-driven signals (beyond
                        Telegram and Twitter) for crowd sentiment, influencer endorsements,
                        or hype cycles influencing asset prices.
                    </p>
                </motion.div>

                {/* seven  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3 lg:col-start-5 sm:col-start-4 lg:row-start-3 sm:row-start-4 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Telegram} alt="telegram icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Telegram Activity-Based Trader
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Monitors Telegram groups, private channels, and alpha groups for
                        signals, news, or early tips about upcoming pumps, token listings,
                        and market-moving announcements.
                    </p>
                </motion.div>

                {/* eight  */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3 lg:col-start-2 sm:col-start-4 lg:row-start-4 sm:row-start-5 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Copy} alt="copy icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Copy Trading Agent
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Emulates strategies from known profitable external portfolios or
                        whitelisted expert traders. It utilizes historical performance
                        correlation and wallet tracking on Ethereum/Solana block explorers
                        to identify good models.
                    </p>
                </motion.div>

                {/* nine */}

                <motion.div variants={itemVariants} className="lg:col-span-2 sm:col-span-3  lg:row-start-4 sm:row-start-5 our-agent-card flex flex-col justify-start pt-10 items-center px-4 xl:gap-10 gap-5 py-5">
                    <div className="flex items-center justify-center">
                        <Image src={Twitter} alt="twitter icon" className="z-20" />
                        <div className="our-agent-txt h-[71px] w-[220px] -ms-6 ps-8 flex items-center justify-center">
                            <p className="font-Brico font-medium sm:text-xl text-lg text-[#FFFFFF]">
                                Twitter Activity-Based Trader
                            </p>
                        </div>
                    </div>
                    <p className="font-Brico xl:text-2xl sm:text-xl text-base text-[#FFFFFF] flex items-start gap-2">
                        <GoDotFill className="-mt-2 text-5xl" />
                        Applies NLP and sentiment analysis to tweets, hashtags, trending
                        topics, and influencer accounts on Twitter to anticipate market
                        shifts driven by social media trends.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Ouragent;
