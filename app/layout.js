import { Bangers } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const play = Bangers({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Comic-cult transform your Ideas ",
  description:
    "ever thought of bringing your imagination into real I am talking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={play.className}>

        <div className="relative hero min-h-screen bg-[#191919] ">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
