import React, { useState } from "react";
import Header from "./Header";
import { memeData } from "./memesData";

const Meme = (props) => {
  const [memeImage, setMemeImage] = useState("");

  const handleClick = () => {
    const memesArray = memeData.data.memes;
    const getRandom = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[getRandom].url;
    setMemeImage(url);
  };


//   const [isGoingOut, setIsGoingOut] = useState(true);

//   const handleChange = () =>{
//     setIsGoingOut(prevStat => !prevStat)
//     // setIsGoingOut(true)
//   }

  return (
    <div className="">
      <Header />
      {/* <div>
        <h1>Do I feel like ging out tonight?</h1>
        <div onClick={handleChange}>
          <h1>{isGoingOut ? "yes" : "no"} </h1>
        </div>
      </div> */}

      {/* <Counter /> */}

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
          <button className="meme--button p-4 mt-10 text-white" onClick={handleClick}>
            Get a new meme Image
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <img className="sm:w-96 w-full" src={memeImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Meme;
