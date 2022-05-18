import React, { useState } from "react";

const Things = () => {
  //   const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);

  //   const things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  //   const handleAddArray = () => {
  //     // //   To add new modified element to the array
  //     // thingsArray.push(`things ${thingsArray.length + 1}`);
  //     setThingsArray((prevState) => [
  //       ...prevState,
  //       `Things ${prevState.length + 1}`,
  //     ]);
  //     console.log(thingsArray);
  //   };

  const [thing, setThing] = useState(["things 1", "things 2"]);

  const things = thing.map((something) => <p key={something}>{something}</p>);

  const handleAdd = () => {
    setThing((prevState) => [...prevState, `things ${prevState.length + 1}`]);
  };

  return (
    <div>
      {things}

      <button className="meme--button text-white" onClick={handleAdd}>
        Click me
      </button>
    </div>
  );
};

export default Things;
