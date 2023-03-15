import Faq from "../props/Faq.js";
const PlanningTools = () => {
  return (
    <div className="planning-tools grid-two">
      <div className="planning-tools__info">
        <h2>Financial planning happens with every interaction</h2>
      </div>
      <div className="faq-section">
        <Faq
          question="Savings and investment performance"
          answer="With inbuilt performance trackers that enable you get a visual sense of your savings and investment performance, you are assured of simple financial planning experience. From your Savings Scores to behavioural analysis of your savings and investment decisions, we provide useful insights on how well you are doing with your money."
        />
        <Faq
          question="Planning tools packed in clicks"
          answer={`Planning is no longer just a word, it's something you can see, feel and play with. The Cowrywise platform packs the intelligence of experienced financial analysts into a few clicks making it possible to visualize the outcomes of your financial decisions today. As you create your investment plans, we onboard you into well thought out steps that enable you plan simple.`}
        />
        <Faq
          question="Planning for life moments has never been easier"
          answer="You know the tedious process that comes with planning for the future? We just tossed it out the window on your behalf. To replace that process, we present you with our set of easy to use financial tools that enables you plan for life moments like education, retirement or buying your first home."
        />
      </div>
      
    </div>
  );
};

export default PlanningTools;
