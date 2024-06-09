import { Bangers } from "next/font/google";
import "./globals.css";
import Navbar from "../../../packages/components/navbar";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

const play = Bangers({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comic-cult transform your Ideas ",
  description:
    "ever thought of bringing your imagination into real I am talking",
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">

      <body className={play.className}>

        <div className="relative hero min-h-screen bg-[url('./assets/c2.jpg')]">

          <div className=" hero-overlay bg-opacity-60"></div>

          <Navbar />
          {children}

        </div>
      </body>
    </html>
  );
}

export default RootLayout;