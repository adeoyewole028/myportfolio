import React from "react";
import Nav, { HamburgerNav } from "./Nav";
import Logo from "../../Images/Time--Logo.svg";
import Mockup from "../../Images/Mockup.png";
import Shield from "../../Images/Shield.svg";
import People from "./People";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export const Button = () => {
  return (
    <button className="bg-indigo-900 p-3 px-8 text-white rounded text-lg font-bold">
      Start Scheduling
    </button>
  );
};
const Main = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="sm:px-24 mt-5">
          <div className="px-5 sm:px-5 flex justify-between sm:justify-start">
              <img src={Logo} alt="logo" />
            <div className="hidden sm:flex">
              <Nav />
            </div>
            <div className="sm:hidden">
              <HamburgerNav />
            </div>
          </div>

          <h1 className="p-4 text-5xl text-blue-900 font-bold sm:mt-28">
            Post when your audience is most active.
          </h1>
          <p className="p-4 sm:py-0 text-lg">
            With TimeNow, automatically schedule your posts on Twitter,
            LinkedIn, and Instagram to post when your followers are most active.
          </p>
          <div className="flex py-4 justify-around sm:justify-start sm:ml-4">
            <div>
              <Button />
            </div>
            <h1 className="self-center">
              <a className="text-indigo-900 font-bold text-lg sm:ml-8" href="/">
                View Demo
              </a>
            </h1>
          </div>

          <div className="flex p-4 space-x-4">
            <img className="self-start" src={Shield} alt="she" />
            <p className="text-xl">
              TimeNow does not sell your data. <br />
              <span>
                <a className="underline font-semibold text-blue-900" href="/">
                  Learn more
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="bg-cyan-300 sm:px-24 sm:pl-10">
          <div className="invisible sm:visible sm:p-3 float-right mr-20">
            <Button />
          </div>

          <div className="sm:my-10 sm:pt-20">
            <img className="p-4 sm:p-0 pt-0 pb-10" src={Mockup} alt="moc" />
          </div>
        </div>
      </div>
      <People />
      <Dashboard />
      <Footer />
    </main>
  );
};

export default Main;
