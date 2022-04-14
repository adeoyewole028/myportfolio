import React from "react";
import Mail from "../../Images/Mail.png";
import Linkedin from "../../Images/linked.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const LandingPage = ({ firstName, lastName, userImage, desc, slack }) => {
  return (
    <div className="landingpage">
      <div>
        <img src={userImage} alt="profile" className="img--profile" />
      </div>
      <div className="main--background">
        <div>
          <h1 className="text-white text-2xl">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="text-center">
          <h3 className="text-amber-300 text-xs p-2">{slack}</h3>
          <Link to="/portfolio"
            className="flex text-black text-xs"
            href="https://adegboyega-portfolio.netlify.app/"
          >
            <button className="bg-slate-300 p-2 rounded font-semibold">
              Checkout My Portfolio
            </button>
          </Link>
        </div>
        <div className="flex flex-row justify-between w-full mt-4">
          <a href="mailto:adeoyewole028@gmail.com">
            <button className="button--email bg-white text-xs">
              <img className="px-2" src={Mail} alt="" /> Email
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/adegboyega-oyewole-199a0b7a/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <button className="button--linkedin bg-blue-500 text-xs">
              <img className="px-2" src={Linkedin} alt="" /> LinkedIn
            </button>
          </a>
        </div>
        <div className="about--main--interest">
          <h1>About</h1>
          <p>{desc.about}</p>
        </div>
        <div className="about--main--interest">
          <h1>Interests</h1>
          <p>{desc.interests}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default LandingPage;
