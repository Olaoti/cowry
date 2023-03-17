<<<<<<< HEAD
const MiniHeader = ({ heading, texts, buttonText, smallText, headimg }) => {
  return (
    <div className="mini-header grid-two aligncenter">
      <div className="mini-header__texts">
        <p className="small-text">{smallText && smallText}</p>
=======
const MiniHeader = ({ heading, texts, buttonText, imgsrc, headimg }) => {
  return (
    <div className="mini-header grid-two aligncenter">
      <div className="mini-header__texts">
>>>>>>> 9b8b9504063135d3430f34c0cd06ae86b499cd96
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
