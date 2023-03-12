import React from "react";
import ArrowedLink from "../props/arrowedLink.js";

const Security = () => {
  const securityobj = [
    {
      id: 0,
      head: "Top-Notch Security",
      texts:
        " We use industry-standard encryption technology to protect user data. We also use two-factor authentication to verify all customer accounts, so you can be sure that your funds are safe and secure.",
    },
    {
      id: 1,
      head: "Assets Custody",
      texts:
        "Our users' financial assets are held with a licensed custodian, Zenith Nominees Limited, for safekeeping to prevent misappropriation, misuse, theft, and/or loss, and in accordance with applicable law. ",
    },
    {
      id: 2,
      head: "Regulatory Compliance",
      texts:
        "Cowrywise is a duly registered fund manager with the Securities and Exchange Commission (SEC) of Nigeria. All our activities are in full compliance with regulatory requirements to the ultimate protection of our clients.",
    },
    {
      id: 3,
      head: "Best-In-Class Assets",
      texts:
        "All the investment options listed on Cowrywise, are carefully screened, managed by professional fund managers. All the diverse mutual funds registered with the SEC, with standard third-party custodian structure.",
    },
  ];
  return (
    <div className="security">
      <div className="securitybg"></div>
      <div className="security__head">
        Keeping your money safe is our business.
      </div>
      <div className="security__description">
        Trust is our currency. We are committed to the security of your money
        and the protection of your account.
      </div>
      <div className="security__link">
        <ArrowedLink linktext="learn more" linkcolor="white" />
      </div>
      <div className="security__details">
        {securityobj.map((sec) => {
          return (
            <div key={sec.id} className="detail">
              <div className="point">
                <span></span>
                <span></span>
              </div>
              <div className="detail__info">
                <div className="detail__info__head">{sec.head}</div>
                <div className="detail__info__texts">{sec.texts}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Security;
