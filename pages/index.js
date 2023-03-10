import { Inter } from "next/font/google";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Richstep from "../Components/Richstep.js";
import Invest from "../Components/Invest.js";
import AppInfo from "../Components/AppInfo.js";
import Security from "../Components/Security.js";
import Footer from "../Sections/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Richstep />
        <Invest />
        <AppInfo />
        <Security />
        <Footer/>
      </div>
    </>
  );
}
