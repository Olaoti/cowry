import ArrowedLink from "../props/arrowedLink.js";

const Toolkit = () => {
  return (
    <div className="toolkit">
      <div className="center">
        <h2>Your personal money toolkit</h2>
        <p>
          You know the tedious process that comes with planning for the future?
          We just tossed it out the window and replaced it with our set of easy
          to use financial tools.
        </p>
      </div>
      <div className="grid-two toolkit__info">
        <div className="tools">
          <div className="tools__card">
            <h5>Can I send my child to her dream university?</h5>
            <p>
              With Cowrywise, you can plan your kid's education using our well
              researched data.
            </p>
            <ArrowedLink
              linktext="try the tool"
              linkcolor="#0066f5"
              className="tools__card__link"
            />
          </div>
          <div className="tools__card">
            <h5>What will my daily savings amount to?</h5>
            <p>
              That is why we have the interest calculator to help you get
              estimates of your savings & returns over time.
            </p>
            <ArrowedLink
              linktext="try the tool"
              linkcolor="#0066f5"
              className="tools__card__link"
            />
          </div>
        </div>
        <div className="toolkit__info__image">
          <img src="/assets/plan/financial-plan.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
