import React from "react";
import Article from "./Article";
import Hero from "./Hero";
import Interest from "./Interest";

const Main = () => {
  return (
    <div className="flex flex-col bg-black">
      <Hero />
        <Article />
      <Interest />
    </div>
  );
};

export default Main;
