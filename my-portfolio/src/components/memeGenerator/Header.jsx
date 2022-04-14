import React from "react";
import Troll from "../../Images/troll.svg";

const Header = () => {
  return (
    <div className="meme--header p-5">
      <div className="flex text-white items-center justify-center">
        <a href="/">
          <div className="mr-5">
            <img src={Troll} alt="" />
          </div>
        </a>

        <h1>Meme Generator</h1>
      </div>
    </div>
  );
};

export default Header;
