import Navbar from "../Components/Navbar.js";
import MiniHeader from "../props/miniHeader";
import Investsvg from "../public/assets/mutual-funds/invest-bg.svg";
import Footer from "../Sections/Footer.js";

const MutualFunds = () => {
  return (
    <div className="mutual-funds" style={{ backgroundColor: "#f4f8fc" }}>
      <Navbar />
      <MiniHeader
        heading="Invest in the largest collection of mutual funds"
        texts="Invest any amount. Get guided on funds that work for you. Track your investment performance real time. No long forms."
        buttonText="Start Investing Now"
        headimg={<Investsvg />}
      />
      <Footer />
    </div>
  );
};

export default MutualFunds;
