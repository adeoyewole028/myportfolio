import React from "react";

const Cards = ({ cardImage, title, url, desc, arrow }) => {
  return (
    <figure>
      <img className="" src={cardImage} alt="" />

      <figcaption className="">
        <h1 className="text-4xl">
          <a className="relative" href={url}>{title} <img className="absolute rotate-180 -translate-y-8 -right-8 " src={arrow} alt="" />  </a>
        </h1>
        <p className="mt-3">{desc}</p>
      </figcaption>
    </figure>
  );
};

export default Cards;
