"use client";
import React, { useState } from "react";
import TranactionAnalysis from "./tranaction-analusis";
import TransactionService from "@/src/services/transaction-service";
import { ethers } from "ethers";

const MainSection = () => {
  const [showTranaction, setShowTranaction] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleProceed = async () => {
    if (!walletAddress.trim()) {
      setError("Wallet Address can not be empty");
      return;
    }
    const isValid = ethers.isAddress(walletAddress);
    if (!isValid) {
      setError("Invalid Wallet Address");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const result = await TransactionService.analyzeTransactions(
        walletAddress
      );
      setAnalysisResult(result?.report);
      setShowTranaction(true);
    } catch (err) {
      setError("Failed to fetch transaction analysis. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container">
        {showTranaction ? (
          <TranactionAnalysis  result = {analysisResult}/>
        ) : (
          <div className="flex justify-center items-center mt-20">
            <div className="w-[614px] min-h-[604px] pb-10 max-sm:h-[400px] rounded-[20px] border-2 border-white border-opacity-20 backdrop-blur-[29px] wallet-address-div px-8 max-sm:px-2">
              <h5 className="text-white text-center text-[40px] font-medium mt-10 max-sm:text-2xl">
                Wallet <span className="wallet-address-text">Address</span>
              </h5>
              <p className="text-white text-opacity-[0.25] text-base font-normal text-center max-sm:text-xs max-sm:mt-5">
                Enter your wallet address below to receive an
                <br />
                AI-powered transaction analysis
              </p>

              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter Wallet Address"
                className="text-white placeholder:text-[#FFFFFF33] text-xl font-normal
               bg-[#FFFFFF05] rounded-[100px] border border-[#69F5FF] border-opacity-15
                w-full h-[69px] mt-20 pl-5 focus:outline-none max-sm:mt-10 max-sm:text-[10px] break-all"
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

              <button
                onClick={handleProceed}
                disabled={loading}
                className={`text-[#101423] text-2xl font-medium rounded-[100px] w-full h-[69px] proceed-btn-gradient mt-48 max-sm:mt-10 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Loading..." : "Proceed"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
