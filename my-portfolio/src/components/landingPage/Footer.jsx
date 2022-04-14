import React from "react";
import Twitter from "../../Images/Twitter.png";
import Facebook from "../../Images/Facebook.png";
import Instagram from "../../Images/Instagram.png";
import Github from "../../Images/GitHub.png";

const Footer = () => {
  return (
    <div className="footer--social flex justify-evenly items-center">
      <a
        href="https://twitter.com/reactdeve"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Twitter} alt="twitter-icon" />
      </a>

      <a href="facebook.com/prinzecharmin/" target="_blank" rel="noreferrer">
        <img src={Facebook} alt="facebook-icon" />
      </a>

      <a
        href="https://www.instagram.com/call_me_aprilis/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="instagram-icon" />
      </a>

      <a
        href="https://github.com/adeoyewole028"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="github-icon" />
      </a>
    </div>
  );
};

export default Footer;
