import React from "react";

import { ReactComponent as Logo } from "../assets/icons/logoLight.svg";

import "../scss/footer.scss";

const Footer = ({chatActive}) => {
  return (
    <footer className={`footer ${!chatActive ? "chatActive" : ""}`}>
      <div className="footer-info">
        <div className="logo">
          <Logo />
        </div>
        <p className="info">This website offers gaming with risk experience. To be a user of our site you must be over 18 years old. We are not responsible for the violation of your local laws related to i-gaming. Play responsibly and have fun on Betfury.</p>
        <div className="images">
          <img className="img" alt="18+" src={require("../assets/18+.png")} />
          <img className="img" alt="license" src={require("../assets/license.png")} />
        </div>
        <p className="copyright">
          Copyright © 2019-2021 BetFury All rights reserved.
        </p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a>JOIN US</a></li>
          <li><a>HELP CENTER</a></li>
          <li><a>USER AGREEMENT</a></li>
          <li><a>PRIVACY POLICY</a></li>
        </ul>
        <ul>
          <li><a>FORUM</a></li>
          <li><a>GAMPLE AWARE</a></li>
          <li><a>NEWS</a></li>
          <li><a>AML</a></li>
          <li><a>CONTACT US</a></li>
        </ul>
      </div>
      <div className="footer-icons">
        <div className="title">Payment methods</div>
        <div className="items methods">
          <img className="item" alt="method" src={require("../assets/footer/methods/Component 1.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Component 6.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Component 9.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Group.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Protocol Icon-1.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Protocol Icon.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/Tether (USDT).png")}/>
          <img className="item" alt="method" src={require("../assets/footer/methods/TRON (TRX).png")}/>
        </div>

        <div className="title">Follow us</div>
        <div className="items">
          <img className="item" alt="method" src={require("../assets/footer/socials/Component 1.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/socials/INSTAGRAM - MOHIT SAVALIYA-1.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/socials/INSTAGRAM - MOHIT SAVALIYA.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/socials/Telegram.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/socials/Twitter.png")}/>
          <img className="item" alt="method" src={require("../assets/footer/socials/Youtube.png")}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
