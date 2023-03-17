import Toolkit from "../Components/Toolkit.js";
import PersonalityInfo from "../props/personalityInfo.js";
import Toolsplanning from "../Components/Toolsplanning.js";
const Plansections = () => {
  return (
    <div className="plansections">
      <Toolkit />
      <PersonalityInfo
        personaImg="/assets/plan/ore-plan.jpg"
        personaInfo="“Growing up, I learnt a lot on budgeting from my dad. I still struggled with dominating my finances as a young adult. Thanks to timely and helpful articles from Ope (of Cowrywise), I am currently planning better towards owning a business and going on a dream vacation.“"
        personaName="- Oreoluwa Macaulay,"
        personaJob="Dominating her finances."
      />
      <Toolsplanning />
    </div>
  );
};

export default Plansections;
