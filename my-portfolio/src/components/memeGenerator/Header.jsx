import React from "react";
import Troll from "../../Images/troll.svg";

const Header = () => {
  return (
    <div className="header flex text-white items-center justify-center">
      <div className="mr-5">
        <img src={Troll} alt="" />
      </div>
      <h1>Meme Generator</h1>
    </div>
  );
};

export default Header;
