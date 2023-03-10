import React from "react";
import Twitter from "../public/assets/socials/twitter.svg";
import Facebook from "../public/assets/socials/facebook.svg";
import Whatsapp from "../public/assets/socials/whatsapp.svg";
import Telegram from "../public/assets/socials/telegram.svg";
import Instagram from "../public/assets/socials/instagram.svg";
import Youtube from "../public/assets/socials/youtube.svg";

const Footeraddress = () => {
  return (
    <div className="address">
      <div className="socials">
        <Twitter />
        <Facebook />
        <Whatsapp />
        <Telegram />
        <Instagram />
        <Youtube />
      </div>
      <div className="physical-address">
        <div className="office-address">
          <p>
            🇳🇬 &nbsp; 5C Reverend Ogunbiyi Street, Ikeja GRA, Lagos Nigeria.
          </p>
          <p>🇺🇸 &nbsp; 2261 Market Street #4817 San Francisco, CA 94114</p>
        </div>
        <div className="license">
          <img src="/assets/license.png" alt="license" />
          <div className="license__info">
            <h5>Licensed by the Sec</h5>
            <h6>Fund Manager</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footeraddress;
