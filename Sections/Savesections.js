import Savingkit from "../Components/Savingkit.js";
import PersonalityInfo from "../props/personalityInfo.js";

const Savesections = () => {
  return (
    <div className="save-sections">
      <Savingkit />
      <PersonalityInfo
        personaImg="/assets/save/wura-save.jpg"
        personaInfo="“I probably didn't fully understand the power of small steps leading to big strides till I started saving with Cowrywise. The first laptop I bought, myself, was funded by the savings I built one step at a time with Cowrywise, the discipline made things easier.“"
        personaName="Wuraola Kayode,"
        personaJob="Little saving steps."
      />
    </div>
  );
};

export default Savesections;
