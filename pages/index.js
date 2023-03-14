import { Inter } from "next/font/google";

import Navbar from "../Components/Navbar";
import Homesections from "../Sections/Homesections";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Homesections />
      </div>
    </>
  );
}
