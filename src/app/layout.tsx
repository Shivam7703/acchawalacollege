import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {global} from "@/data/globalData"
import ReduxProvider from "@/Redux/provider";
import { ApolloWrapper } from "@/lib/client";
const inter = Inter({ subsets: ["latin"] });

// import setupLocatorUI from "@locator/runtime";

// if (process.env.NODE_ENV === "development") {
//   setupLocatorUI();
// }

export const metadata: Metadata = {
  title: "Accha Wala College",
  description: "Find College that suits you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-primary-text font-poppins relative bg-gray-100">
      <ReduxProvider>
        <ApolloWrapper>
          <Header  header={global?.header}  />
          {children}
          <Footer footer={global?.footer} />
        </ApolloWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
