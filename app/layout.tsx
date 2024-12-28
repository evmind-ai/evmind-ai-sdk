import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Web3ModalProvider from "@/src/components/connect-wallet";
import { Toaster } from "react-hot-toast";

const spacGrostek = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Evmind AI",
  description: "Evmind AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spacGrostek.className}>
        <Web3ModalProvider>
          <Toaster />

          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
