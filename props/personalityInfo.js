import ArrowedLink from "./arrowedLink";
const PersonalityInfo = ({
  personaImg,
  personaInfo,
  personaName,
  personaJob,
}) => {
  return (
    <div className="personality-info grid-two">
      <div className="persona-image">
        <img src={`${personaImg}`} alt="" />
      </div>
      <div className="persona">
        <h4>{personaInfo}</h4>
        <p>
          {personaName}
          <span>{personaJob}</span>
        </p>
        <ArrowedLink linktext="read more stories" linkcolor="#0066f5" />
      </div>
    </div>
  );
};

export default PersonalityInfo;
