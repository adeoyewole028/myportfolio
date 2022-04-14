import React from "react";
import Logo from "../../../Images/Time--Logo.svg";
import { Button } from "../Main";
import Nav, { HamburgerNav } from "../Nav";
import Cards from "./Cards";
import Hero from "./Hero";

const Pricing = () => {
  return (
    <div>
      <div className="grid grid-cols-2 mt-10 sm:px-24 px-4">
        <div className="flex">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="hidden sm:flex">
            <Nav />
          </div>{" "}
        </div>

        <div className="hidden sm:flex col-span-2 sm:col-span-1">
          <Button />
        </div>
        <div className="justify-self-end sm:hidden">
          <HamburgerNav />
        </div>
      </div>

      <Hero />
      <Cards />
      <Cards />
    </div>
  );
};
export default Pricing;
