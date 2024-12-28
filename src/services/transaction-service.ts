import { API_ROUTES } from "../constants/apiPaths";
import APIService from "./core/api-service";

namespace TransactionService {
  export const analyzeTransactions = async (walletAddress: string) => {
    const body = { walletAddress };

    try {
      const data = await APIService.post(API_ROUTES.ANALYZE_TRANSACTION, body);

      if (data?.response === "success" && data?.data) {
        return data.data;
      }

      throw new Error("Failed to analyze transactions.");
    } catch (error) {
      console.error("Error analyzing transactions:", error);
      throw error;
    }
  };
}

export default TransactionService;
