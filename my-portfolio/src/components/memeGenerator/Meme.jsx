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

  //   const thingsArray = ["Thing 1", "Thing 2"];

  //   const things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  //   const handleAddArray = () => {
  //       thingsArray.push(`things ${thingsArray.length + 1}` )
  //     console.log(thingsArray);
  //   };

  const [isGoingOut, setIsGoingOut] = useState(true);

  const handleChange = () =>{
    setIsGoingOut(prevStat => !prevStat)
    // setIsGoingOut(true)
  }

  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div>
        <h1>Do I feel like ging out tonight?</h1>
        <div onClick={handleChange}>
          <h1>{isGoingOut ? "yes" : "no"} </h1>
        </div>
      </div>
      {/* {things}
      <button className="meme--button text-white" onClick={handleAddArray}>
        Click me
      </button> */}

      {/* <Counter /> */}

      <div className="flex flex-col justify-center px-52">
        <div className="flex justify-center justify-evenly mt-5">
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
        <div className="p-10 self-center">
          <button className="meme--button text-white" onClick={handleClick}>
            Get a new meme Image
          </button>
        </div>
        <div className="self-center">
          <img className="w-96" src={memeImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Meme;
