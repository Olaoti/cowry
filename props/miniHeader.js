const MiniHeader = ({ heading, texts, buttonText, imgsrc, headimg }) => {
  return (
    <div className="mini-header grid-two">
      <div className="mini-header__texts">
        <h1>{heading}</h1>
        <p>{texts}</p>
        <button className="btn">{buttonText}</button>
      </div>
      <div className="mini-header__image">{headimg}</div>
    </div>
  );
};

export default MiniHeader;
