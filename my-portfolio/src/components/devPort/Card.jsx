import React from "react";
import { card } from "./cardData";
import Cards from "./Cards";

const Card = () => {
  const cardEl = card.map((cards) => <Cards key={cards.id} {...cards} />);

  return (
    <div className="mt-16">
      <div className="cards sm:flex sm:px-24">{cardEl}</div>
    </div>
  );
};

export default Card;
