import "./Dev.css";
import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const DevLandingPage = () => {
  return (
    <div className="dev flex flex-col">
      <Nav />
      <Main/>
      <Footer />
    </div>
  );
};

export default DevLandingPage;
