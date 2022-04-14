import React, { useState } from "react";
import Hamburger from "../../Images/Hamburger.svg";
import { Link } from "react-router-dom";

export const HamburgerNav = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <nav className="flex justify-between relative">
      <div onClick={handleToggle}>
        <img className="bg-black" src={Hamburger} alt="" />
      </div>
      <div>
        {toggle ? (
          <div className="text-center flex flex-col space-y-4 absolute right-0 top-10 bg-white">
            <Link to="/timenow">Features</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

const Nav = () => {
  return (
    <nav className="flex">
      <div className="ml-10 sm:space-x-4">
        <Link to="/timenow">Features</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </nav>
  );
};
export default Nav;
