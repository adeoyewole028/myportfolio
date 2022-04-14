import React from "react";
import Globe from "../../Images/globe.svg";

const Nav = () => {
  return (
    <nav className="bg-red-400 flex justify-center py-3">
      <img className="mr-3" src={Globe} alt="globe" />
      <p className="text-white">My Travel Journal</p>
    </nav>
  );
};
export default Nav;
