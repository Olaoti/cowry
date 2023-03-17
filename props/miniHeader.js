const MiniHeader = ({ heading, texts, buttonText, smallText, headimg }) => {
  return (
    <div className="mini-header grid-two aligncenter">
      <div className="mini-header__texts">
        <p className="small-text">{smallText && smallText}</p>
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
