import MiniHeader from "../props/miniHeader";
import Navbar from "../Components/Navbar.js";
import NairaPlan from "../public/assets/plan/naira-plan.svg";
import Plansections from "../Sections/Plansections.js";
import Footer from "../Sections/Footer.js";

const plan = () => {
  return (
    <div className="plan" style={{ backgroundColor: "#cdf2fc" }}>
      <Navbar />
      <MiniHeader
        heading="Get the future you want by planning it"
        texts="We offer great advice, tools and guides to help you plan your future. Live your best life for free."
        buttonText="Start Investing Now"
        headimg={<NairaPlan />}
      />
      <Plansections />
      <Footer />
    </div>
  );
};

export default plan;
