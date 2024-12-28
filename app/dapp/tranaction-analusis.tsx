import React from "react";

const TransactionAnalysis = ({ result }: { result: any }) => {
  const transactionData = result?.transactionData || {};
  const aiAnalysis = result?.aiAnalysis || {};
  const calculateTransactionStats = () => {
    const transactions = transactionData?.transactions || [];
    const stats = {
      incomingTransactions: 0,
      outgoingTransactions: 0,
      totalIncomingValue: 0,
      totalOutgoingValue: 0,
      totalTransactedValue: 0,
    };

    transactions.forEach((transaction: any) => {
      const value = parseFloat(transaction.value) || 0;
      if (transaction.transactionType === "incoming") {
        stats.incomingTransactions += 1;
        stats.totalIncomingValue += value;
      } else if (transaction.transactionType === "outgoing") {
        stats.outgoingTransactions += 1;
        stats.totalOutgoingValue += value;
      }
    });

    stats.totalTransactedValue =
      stats.totalIncomingValue + stats.totalOutgoingValue;

    return stats;
  };

  const {
    incomingTransactions,
    outgoingTransactions,
    totalIncomingValue,
    totalOutgoingValue,
    totalTransactedValue,
  } = calculateTransactionStats();

  const data = [
    {
      name: "Total Transactions",
      value: transactionData?.totalTransactions || "N/A",
    },
    {
      name: "Total Value Transacted",
      value: `${totalTransactedValue || "N/A"} ETH`,
    },
    {
      name: "Average Transaction Value",
      value: `${
        totalTransactedValue / transactionData?.totalTransactions || "N/A"
      } ETH`,
    },
    {
      name: "Incoming Transactions",
      value: incomingTransactions || "N/A",
    },
    {
      name: "Outgoing Transactions",
      value: outgoingTransactions || "N/A",
    },
    {
      name: "Total Incoming Value",
      value: `${totalIncomingValue || "N/A"} ETH`,
    },
    {
      name: "Total Outgoing Value",
      value: `${totalOutgoingValue || "N/A"} ETH`,
    },
  ];

  return (
    <div className="pt-10 pb-20">
      <h5 className="text-white text-[40px] font-medium max-sm:text-2xl">
        Transaction Analysis
      </h5>
      <p className="text-white text-xl font-normal text-opacity-50 max-sm:text-xs max-sm:mt-2">
        {result?.walletAddress || "N/A"}
      </p>

      {/* Transactions Pattern Section */}
      <div className="w-[1320px] min-h-[594px] rounded-[24px] border-2 border-white border-opacity-20 backdrop-blur-[29px] wallet-address-div px-8 pt-5 max-sm:px-4 mt-5 max-2xl:w-full max-sm:min-h-[420px] pb-8">
        <h5 className="text-[32px] font-medium wallet-address-text max-sm:text-2xl">
          Transactions Pattern
        </h5>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-white border-opacity-10 pb-3 mt-6"
            >
              <h5 className="text-white text-2xl font-normal max-md:text-xl max-sm:text-xs">
                {item.name}
              </h5>
              <p className="text-white text-2xl font-medium max-md:text-xl max-sm:text-xs">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Analysis Insights Section */}
      <div className="w-[1320px] min-h-[594px] rounded-[24px] border-2 border-white border-opacity-20 backdrop-blur-[29px] wallet-address-div px-8 pt-5 max-sm:px-4 mt-5 max-2xl:w-full max-sm:min-h-[420px] pb-8">
        <h5 className="text-[32px] font-medium wallet-address-text max-sm:text-2xl">
          Insights
        </h5>

        {/* Overall Transaction Patterns */}
        <div>
          <h5 className="text-white text-2xl max-sm:text-base font-medium mt-2">
            1. Overall Transaction Patterns:
          </h5>
          <p className="text-white text-xl max-sm:text-sm font-normal pl-6 mt-1">
            {aiAnalysis?.analysis?.overAllTransactionPatterns
              ? aiAnalysis?.analysis?.overAllTransactionPatterns[
                  Object.keys(
                    aiAnalysis?.analysis?.overAllTransactionPatterns
                  )[0]
                ]
              : "N/A"}
          </p>
        </div>

        {/* Investment or Trading Strategies */}
        <div>
          <h5 className="text-white text-2xl max-sm:text-base font-medium mt-4">
            2. Potential Investment or Trading Strategies:
          </h5>
          <p className="text-white text-xl max-sm:text-sm font-normal pl-6 mt-1">
            {aiAnalysis?.analysis?.investmentStrategy
              ? aiAnalysis?.analysis?.investmentStrategy[
                  Object.keys(aiAnalysis?.analysis?.investmentStrategy)[0]
                ]
              : aiAnalysis?.analysis?.investmentOrTradingStrategy
              ? aiAnalysis?.analysis?.investmentOrTradingStrategy[
                  Object.keys(
                    aiAnalysis?.analysis?.investmentOrTradingStrategy
                  )[0]
                ]
              : "N/A"}
          </p>
        </div>

        {/* Recommendations */}
        <div>
          <h5 className="text-white text-2xl max-sm:text-base font-medium mt-4">
            3. Recommendations:
          </h5>
          <p className="text-white text-xl max-sm:text-sm font-normal pl-6 mt-1">
            {aiAnalysis?.analysis?.recommendations
              ? aiAnalysis?.analysis?.recommendations[
                  Object.keys(aiAnalysis?.analysis?.recommendations)[0]
                ]
              : "N/A"}
          </p>
        </div>

        {/* Risk Assessment */}
        <div>
          <h5 className="text-white text-2xl max-sm:text-base font-medium mt-4">
            4. Risk Assessment:
          </h5>
          <p className="text-white text-xl max-sm:text-sm font-normal pl-6 mt-1">
            {aiAnalysis?.analysis?.riskAssessment
              ? aiAnalysis?.analysis?.riskAssessment[
                  Object.keys(aiAnalysis?.analysis?.riskAssessment)[0]
                ]
              : "N/A"}
          </p>
        </div>

        {/* Unusual Transaction Behavior */}
        <div>
          <h5 className="text-white text-2xl max-sm:text-base font-medium mt-4">
            5. Unusual Transaction Behavior:
          </h5>
          <p className="text-white text-xl max-sm:text-sm font-normal pl-6 mt-1">
            {aiAnalysis?.analysis?.unusualBehaviour
              ? aiAnalysis?.analysis?.unusualBehaviour[
                  Object.keys(aiAnalysis?.analysis?.unusualBehaviour)[0]
                ]
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionAnalysis;
