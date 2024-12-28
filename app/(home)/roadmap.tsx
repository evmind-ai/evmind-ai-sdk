"use client";
import React, { useRef } from "react";
import AboutoBT from "@assets/images/about-b-t.svg";
import AboutoBB from "@assets/images/about-b-b.svg";
import Image from "next/image";
import roadmapimg from "@assets/images/roadmapimg.png";
import roadmapLine from "@assets/images/roadmapLine.png";
import { useScroll, useTransform, motion } from "framer-motion";

const Roadmap = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -2250]);

  const data = [
    {
      title: `Foundation & Architecture`,
      text1: `Establish project infrastructure and development environment.`,
      text2: `Define system architecture and data pipelines.`,
      text3: `Set up Solana and Ethereum blockchain integration for agent
                  wallets.`,
      action1: `System Architecture & Design Specs: Finalize high-level system
                  diagrams, data flow models, agent-to-Master Agent protocols,
                  and security measures.`,
      action2: ` Dev Environment Setup: Configure CI/CD pipelines,
                  containerization, and version control.`,
      action3: ` Blockchain Integration: Connect test wallets on Solana and
                  Ethereum testnets, ensuring agents can access balances and
                  transact as needed.`,
      action4: "",
      deliverable1: ` Architecture Documentation: Comprehensive system blueprint
                  (including all agents, Master Agent, and blockchain
                  integration).`,
      deliverable2: `Infrastructure Ready: Cloud environment or on-prem setup,
                  CI/CD pipeline running unit tests.`,

      deliverable3: `Blockchain Wallet Setup: Functional test wallets for Solana
                  and Ethereum networks accessible by the system.`,
      deliverable4: "",
      deliverable5: "",
    },
    {
      title: `Agent Development & Core Logic`,
      text1: ` Implement the eight specialized trading agents with baseline
                  strategies.`,
      text2: ` Integrate the Master Agent’s monitoring, evaluation, and
                  retraining triggers.`,
      text3: `    Implement basic incentive (Evmind Coin) logic and internal
                  ledgering.`,
      action1: `   Agent Implementation: Code and train first-pass versions of
                  all eight agents (Degen, Fundamental, Technical, Trend/Meta,
                  Social-based, Copy, Telegram-based, Twitter-based).`,
      action2: `   Master Agent Core: Implement functionality for the Master
                  Agent to read agent performance, maintain hidden logs, and
                  trigger retraining routines.`,
      action3: `    Internal Economy Setup: Establish Evmind Coin as an internal
                  accounting mechanism, including methods for agents to
                  “purchase” signals.`,
      action4: "",
      deliverable1: `  Baseline Agent Models: Each agent running a basic strategy and
                  able to produce initial trading signals..`,
      deliverable2: `  Master Agent MVP: Master Agent capable of monitoring agent
                  outputs, storing performance data, and initiating retraining
                  calls.`,

      deliverable3: `  Incentive Mechanism Prototype: Working code for Evmind Coin
                  transactions between agents, albeit simplified for test
                  scenarios.`,
      deliverable4: "",
      deliverable5: "",
    },
    {
      title: `Integration, Testing & Refinement`,
      text1: `  Integrate all agents with the Master Agent in a testbed
                  environment and simulate trading scenarios.`,
      text2: ` Test performance reporting, signal purchasing, and retraining
                  triggers in mock conditions.`,
      text3: `         Refine agents’ strategies for improved accuracy, speed, and
                  initial profitability.`,
      action1: `  End-to-End Integration: Connect all agents and the Master
                  Agent in a stable test environment, run simulation data feeds
                  for various market conditions.`,
      action2: `   Performance Reporting: Validate the 24-hour reporting cycle
                  and ensure aggregated performance metrics are correctly
                  generated and distributed.`,
      action3: `     Economic Interaction Testing: Simulate scenarios where
                  low-performing agents purchase signals from top performers
                  using Evmind Coins. \n Agent Fine-Tuning: Adjust
                  hyperparameters and incorporate additional data feeds or
                  indicators to improve baseline agent performance.`,
      action4: `  Agent Fine-Tuning: Adjust
                  hyperparameters and incorporate additional data feeds or
                  indicators to improve baseline agent performance.`,
      deliverable1: `    Integrated Network: All agents and the Master Agent
                  functioning cohesively, completing at least one successful
                  test cycle.`,
      deliverable2: ` Verified Performance Reports: Correct, reproducible
                  performance summaries after simulated 24-hour periods.`,

      deliverable3: `  Signal Purchase Validation: Successful demonstration of an
                  agent buying signals from another and benefitting in
                  subsequent trades.`,
      deliverable4: "",
      deliverable5: "",
    },
    {
      title: `Final Optimization, Security Review & Deployment`,
      text1: `   Optimize agent performance and Master Agent decision-making
                  logic for near-production quality.`,
      text2: `  Conduct a security review (encryption, access controls, data
                  integrity checks).`,
      text3: `     Deploy a stable version of the Evmind system in a controlled
                  pre-production environment.`,
      action1: `    Optimization & Stabilization: Improve execution speed, refine
                  strategies, and ensure minimal downtime or errors.`,
      action2: `   Security & Privacy Review: Verify that the Master Agent’s
                  private logs are secure and agent communication is encrypted.
                  Ensure that blockchain operations follow best practices.`,
      action3: `     Documentation & Onboarding Materials: Prepare final
                  documentation, user guides, and maintenance instructions.`,
      action4: `      Pre-Production Deployment: Move the integrated network into a
                  staging or limited-access environment for longer-term,
                  real-time simulations.`,
      deliverable1: `     Optimized Network: Agents and Master Agent operating smoothly,
                  showcasing improved profitability and reliable performance
                  metrics.`,
      deliverable2: ` Security-Compliant System: Confirmed encryption, restricted
                  access protocols, and secure handling of blockchain
                  credentials.`,

      deliverable3: `  Comprehensive Documentation: Updated system and technical
                  docs, user guides, and operation manuals.`,
      deliverable4: ` Pre-Production Launch: Working Evmind AI system running
                  end-to-end simulations, ready for scaling or direct exposure
                  to controlled market inputs.`,
      deliverable5: `By the end of the one-month roadmap, the Evmind AI project will
                  have evolved from architectural plans to a functional,
                  integrated agent network under Master Agent governance. The
                  system will demonstrate stable operations, baseline
                  profitability, privacy-protecting architecture, and support
                  for multi-chain wallet integration, positioning it well for
                  subsequent enhancements or live-market deployment.`,
    },
  ];

  return (
    <div
      id="roadmap"
      className="relative container pb-40 pt-60 max-sm:pt-10 max-sm:pb-10"
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
          Roadmap
        </h4>
        <Image
          src={AboutoBB}
          alt="border"
          className="absolute -bottom-10 right-0 max-sm:-bottom-5 max-[520px]:w-[200px] max-[430px]:w-[150px] max-[380px]:-bottom-2"
        />
      </motion.div>

      <div
        className="flex justify-center items-start h-[400vh] mt-20 max-xl:hidden"
        ref={targetRef}
      >
        <div className="sticky top-10 min-h-svh flex justify-center items-center">
          <div className="2xl:w-[1320px] w-full h-[706px]  relative overflow-clip">
            <div className="absolute rounded-2xl inset-0 w-full h-full border border-white border-opacity-20">
              <Image
                src={roadmapimg}
                alt="roadmapimg"
                className="w-full rounded-2xl h-full"
              />
            </div>
            <div className="relative px-8 pt-10 isolate space-y-10">
              {/* <div className="absolute left-[185px] z-[-1] h-full w-2 bg-roadmapBG top-32 rounded-full" /> */}
              <motion.div style={{ y }}>
                {data.map((item, i) => (
                  <div className="flex justify-center mt-10 items-start gap-20">
                    <div className="mt-8 relative isolate self-stretch">
                      <div className="size-16 rounded-full flex justify-center items-center text-2xl text-black font-medium bg-roadmapBG">
                        0{i + 1}
                      </div>

                      <Image
                        src={roadmapLine}
                        className="absolute left-1/2 z-[-1] -translate-x-1/2 top-4 h-3/4 w-2 rounded-full"
                        alt="roadmap line"
                      />
                    </div>

                    <div>
                      <div className="rounded-[20px] backdrop-blur-[52px] w-[859px] h-[127px] week1-shadow pl-6 pt-4">
                        <h5 className="text-[36px] font-ClashGrotesk font-semibold week-text-gradient">
                          Week {i + 1}
                        </h5>
                        <p className="text-white text-2xl font-medium tracking-[-0.336px]">
                          {item.title}
                        </p>
                      </div>

                      <div className="rounded-[20px] backdrop-blur-[52px] w-[859px] pb-6 week1-shadow px-5 pt-3 mt-5">
                        <p className="text-white text-xl font-medium tracking-[-0.336px]">
                          Objectives:
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-1">
                          {item.text1}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.text2}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.text3}
                        </p>

                        <p className="text-white text-xl font-medium tracking-[-0.336px] mt-5">
                          Key Actions:
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.action1}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.action2}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2 ">
                          {item.action3}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2 ">
                          {item.action4}
                        </p>
                        <p className="text-white text-xl font-medium tracking-[-0.336px] mt-2">
                          Deliverables:
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.deliverable1}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.deliverable2}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.deliverable3}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.deliverable4}
                        </p>
                        <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                          {item.deliverable5}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile */}

      <div className="mt-20 xl:hidden">
        <div className="relative w-full min-h-[706px] pb-10">
          <div className="relative pt-7 px-3">
            <div>
              <div className="rounded-[20px] backdrop-blur-[52px] w-full h-[127px] week1-shadow pl-6 pt-4 max-sm:h-[90px]">
                <h5 className="text-[36px] font-ClashGrotesk font-semibold week-text-gradient max-sm:text-2xl">
                  Week 1
                </h5>
                <p className="text-white text-2xl font-medium tracking-[-0.336px] max-sm:text-base">
                  Foundation & Architecture
                </p>
              </div>

              <div className="rounded-[20px] backdrop-blur-[52px] w-full pb-6 week1-shadow px-5 pt-3 mt-5">
                <p className="text-white text-xl font-medium tracking-[-0.336px]">
                  Objectives:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-1">
                  Establish project infrastructure and development environment.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Define system architecture and data pipelines.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Set up Solana and Ethereum blockchain integration for agent
                  wallets.
                </p>

                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-5">
                  Key Actions:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  System Architecture & Design Specs: Finalize high-level system
                  diagrams, data flow models, agent-to-Master Agent protocols,
                  and security measures.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Dev Environment Setup: Configure CI/CD pipelines,
                  containerization, and version control.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Blockchain Integration: Connect test wallets on Solana and
                  Ethereum testnets, ensuring agents can access balances and
                  transact as needed.
                </p>
                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-2">
                  Deliverables:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Architecture Documentation: Comprehensive system blueprint
                  (including all agents, Master Agent, and blockchain
                  integration).
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Infrastructure Ready: Cloud environment or on-prem setup,
                  CI/CD pipeline running unit tests.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Blockchain Wallet Setup: Functional test wallets for Solana
                  and Ethereum networks accessible by the system.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-[20px] backdrop-blur-[52px] w-full h-[127px] week1-shadow pl-6 pt-4 max-sm:h-[90px]">
                <h5 className="text-[36px] font-ClashGrotesk font-semibold week-text-gradient max-sm:text-2xl">
                  Week 2
                </h5>
                <p className="text-white text-2xl font-medium tracking-[-0.336px] max-sm:text-base">
                  Agent Development & Core Logic
                </p>
              </div>

              <div className="rounded-[20px] backdrop-blur-[52px] w-full pb-6 week1-shadow px-5 pt-3 mt-5">
                <p className="text-white text-xl font-medium tracking-[-0.336px]">
                  Objectives:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-1">
                  Implement the eight specialized trading agents with baseline
                  strategies.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Integrate the Master Agent’s monitoring, evaluation, and
                  retraining triggers.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Implement basic incentive (Evmind Coin) logic and internal
                  ledgering.
                </p>

                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-5">
                  Key Actions:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Agent Implementation: Code and train first-pass versions of
                  all eight agents (Degen, Fundamental, Technical, Trend/Meta,
                  Social-based, Copy, Telegram-based, Twitter-based).
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Master Agent Core: Implement functionality for the Master
                  Agent to read agent performance, maintain hidden logs, and
                  trigger retraining routines.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Internal Economy Setup: Establish Evmind Coin as an internal
                  accounting mechanism, including methods for agents to
                  “purchase” signals.
                </p>
                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-2">
                  Deliverables:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Baseline Agent Models: Each agent running a basic strategy and
                  able to produce initial trading signals.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Master Agent MVP: Master Agent capable of monitoring agent
                  outputs, storing performance data, and initiating retraining
                  calls.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Incentive Mechanism Prototype: Working code for Evmind Coin
                  transactions between agents, albeit simplified for test
                  scenarios.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-[20px] backdrop-blur-[52px] w-full h-[127px] week1-shadow pl-6 pt-4 max-sm:h-[90px]">
                <h5 className="text-[36px] font-ClashGrotesk font-semibold week-text-gradient max-sm:text-2xl">
                  Week 3
                </h5>
                <p className="text-white text-2xl font-medium tracking-[-0.336px] max-sm:text-base">
                  Integration, Testing & Refinement
                </p>
              </div>

              <div className="rounded-[20px] backdrop-blur-[52px] w-full pb-6 week1-shadow px-5 pt-3 mt-5">
                <p className="text-white text-xl font-medium tracking-[-0.336px]">
                  Objectives:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-1">
                  Integrate all agents with the Master Agent in a testbed
                  environment and simulate trading scenarios.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Test performance reporting, signal purchasing, and retraining
                  triggers in mock conditions.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Refine agents’ strategies for improved accuracy, speed, and
                  initial profitability.
                </p>

                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-5">
                  Key Actions:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  End-to-End Integration: Connect all agents and the Master
                  Agent in a stable test environment, run simulation data feeds
                  for various market conditions.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Performance Reporting: Validate the 24-hour reporting cycle
                  and ensure aggregated performance metrics are correctly
                  generated and distributed.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Economic Interaction Testing: Simulate scenarios where
                  low-performing agents purchase signals from top performers
                  using Evmind Coins. <br /> Agent Fine-Tuning: Adjust
                  hyperparameters and incorporate additional data feeds or
                  indicators to improve baseline agent performance.
                </p>
                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-2">
                  Deliverables:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Integrated Network: All agents and the Master Agent
                  functioning cohesively, completing at least one successful
                  test cycle.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Verified Performance Reports: Correct, reproducible
                  performance summaries after simulated 24-hour periods.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Signal Purchase Validation: Successful demonstration of an
                  agent buying signals from another and benefitting in
                  subsequent trades.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-[20px] backdrop-blur-[52px] w-full h-[127px] week1-shadow pl-6 pt-4 max-sm:h-[90px]">
                <h5 className="text-[36px] font-ClashGrotesk font-semibold week-text-gradient max-sm:text-2xl">
                  Week 4
                </h5>
                <p className="text-white text-2xl font-medium tracking-[-0.336px] max-sm:text-xs">
                  Final Optimization, Security Review & Deployment
                </p>
              </div>

              <div className="rounded-[20px] backdrop-blur-[52px] w-full pb-6 week1-shadow px-5 pt-3 mt-5">
                <p className="text-white text-xl font-medium tracking-[-0.336px]">
                  Objectives:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-1">
                  Optimize agent performance and Master Agent decision-making
                  logic for near-production quality.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Conduct a security review (encryption, access controls, data
                  integrity checks).
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Deploy a stable version of the Evmind system in a controlled
                  pre-production environment.
                </p>

                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-5">
                  Key Actions:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Optimization & Stabilization: Improve execution speed, refine
                  strategies, and ensure minimal downtime or errors.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Security & Privacy Review: Verify that the Master Agent’s
                  private logs are secure and agent communication is encrypted.
                  Ensure that blockchain operations follow best practices.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Documentation & Onboarding Materials: Prepare final
                  documentation, user guides, and maintenance instructions.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Pre-Production Deployment: Move the integrated network into a
                  staging or limited-access environment for longer-term,
                  real-time simulations.
                </p>
                <p className="text-white text-xl font-medium tracking-[-0.336px] mt-2">
                  Deliverables:
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Optimized Network: Agents and Master Agent operating smoothly,
                  showcasing improved profitability and reliable performance
                  metrics.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Security-Compliant System: Confirmed encryption, restricted
                  access protocols, and secure handling of blockchain
                  credentials.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Comprehensive Documentation: Updated system and technical
                  docs, user guides, and operation manuals.
                </p>
                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  Pre-Production Launch: Working Evmind AI system running
                  end-to-end simulations, ready for scaling or direct exposure
                  to controlled market inputs.
                </p>

                <p className="text-white text-sm font-normal tracking-[-0.336px] mt-2">
                  By the end of the one-month roadmap, the Evmind AI project will
                  have evolved from architectural plans to a functional,
                  integrated agent network under Master Agent governance. The
                  system will demonstrate stable operations, baseline
                  profitability, privacy-protecting architecture, and support
                  for multi-chain wallet integration, positioning it well for
                  subsequent enhancements or live-market deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
