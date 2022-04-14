import React from "react";
import JP from "../../Images/JP Morgan.svg";
import Samsung from "../../Images/Samsung.svg";
import Tinder from "../../Images/Tinder.svg";
import Verizon from "../../Images/Verizon.svg";
import Visa from "../../Images/Visa.svg";
import Walmart from "../../Images/Walmart.svg";
import Card from "./Card";

const Hero = () => {
  const logo = [Walmart, JP, Visa, Tinder, Samsung, Verizon, ];

  const company = logo.map((logos) => <img className="p-3 w-32" src={logos} key={logos} alt="" />);

  return (
    <div className="hero text-white">
      <div className="dev--hero sm:px-24">
        <h1 className="text-4xl sm:text-6xl">
          Helping companies build better, scalable software.
        </h1>
        <p className="text-neutral-500">
          Award-winning web developer and author, with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook and
          more.
        </p>
      </div>

      <div className="company flex flex-wrap justify-center mt-16">{company}</div>
      <div className="">
        <Card />
      </div>
    </div>
  );
};

export default Hero;
