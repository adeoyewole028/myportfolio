import React, { useState } from "react";
import Header from "./Header";
import { memeData } from "./memesData";

const Meme = (props) => {
  const [meme, setMeme] = useState({
    randomImages: "http://i.imgflip.com/1bij.jpg",
    topText: "",
    bottomText: "",
  });

  const [allMemeIMages, setAllMemeIMages] = useState(memeData);

  const handleClick = () => {
    const memesArray = allMemeIMages.data.memes;
    const getRandom = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[getRandom].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImages: url,
    }));
  };

  return (
    <div className="">
      <Header />

      <div className="">
        <div className="flex justify-center sm:space-x-24 mt-10 space-y-5 sm:space-y-0 flex-wrap">
          <div>
            <input
              className="border text-2xl"
              placeholder="Top"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              className="border text-2xl"
              type="text"
              name=""
              id=""
              placeholder="Bottom"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="meme--button p-4 mt-10 text-white"
            onClick={handleClick}
          >
            Get a new meme Image
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img className="sm:w-96 w-full" src={meme.randomImages} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Meme;
