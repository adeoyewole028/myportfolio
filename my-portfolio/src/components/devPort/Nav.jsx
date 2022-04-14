import React, { useState } from "react";
import Hamburger from "../../Images/Hamburger.svg";

export const Menu = () => {
  return (

    <nav className="flex sm:space-x-52">
      <div className="flex sm:justify-center sm:space-x-4 self-center">
        {[
          ["Articles", "/articles"],
          ["Chats", "/chats"],
          ["Awards", "/awards"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </a>
        ))}
      </div>
      <button className="sm:mr-20 self-center bg-yellow-300 sm:p-3 sm:px-8 md:w-44 text-white sm:text-black font-bold">
        Get in touch
      </button>
    </nav>
  );
};

export const HamburgerMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prevState) => !prevState);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className=""
      >
        <img src={Hamburger} alt="" />
      </div>

      <div className="relative -left-32 top-10">
        {toggleMenu ? (
          <nav className="flex absolute flex-col self-center bg-white p-10 text-black">
            <div className="flex flex-col">
              {[
                ["Articles", "/articles"],
                ["Chats", "/chats"],
                ["Awards", "/awards"],
                ["About", "/about"],
              ].map(([title, url]) => (
                <a
                  key={title}
                  href={url}
                  className="rounded-lg px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
                >
                  {title}
                </a>
              ))}
            </div>
            <button className="sm:mr-20  self-center bg-yellow-300 sm:p-3 sm:px-8 md:w-44 text-white sm:text-black font-bold">
              Get in touch
            </button>
          </nav>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="nav bg-black text-neutral-500 text-lg sm:px-24 py-3">
      <div className="flex justify-between">
        <div className="logo shrink-0 self-center">
          <a href="/">Johnathan Specter</a>
        </div>
      <div className="hamburger self-center">
        <HamburgerMenu />
      </div>
        <div className="nav--menu">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
