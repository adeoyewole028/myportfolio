import React from "react";
import LandingPage from "./LandingPage";
import { person } from "./data";

const profile = person.map((user) => <LandingPage key={user.id} {...user} />);

const Main = () => {
  return (
    <div className="main">
      {profile}
    </div>
  );
};

export default Main;
