const MiniHeader = ({ heading, texts, buttonText, imgsrc, headimg }) => {
  return (
    <div className="mini-header grid-two aligncenter">
      <div className="mini-header__texts">
        <h1>{heading}</h1>
        <p>{texts}</p>
        <button className="btn">{buttonText}</button>
      </div>
      <div className="mini-header__image">
        <div className="headerimg">{headimg}</div>
      </div>
    </div>
  );
};

export default MiniHeader;
