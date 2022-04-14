import React from "react";
import Twitter from "../../Images/Twitter.svg";
import Linkedin from "../../Images/LinkedIn.svg";
import Github from "../../Images/Github.svg";

const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="text-white flex justify-around py-8">
        <div className="text-xl">
          <a href="/">Johnathan Specter</a>
        </div>
        <div className="flex justify-evenly w-32">
          <div className="">
            <img src={Twitter} alt="" />
          </div>
          <div className="">
            <img src={Linkedin} alt="" />
          </div>
          <div className="">
            <img src={Github} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
