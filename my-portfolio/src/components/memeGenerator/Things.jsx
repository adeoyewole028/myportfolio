import React, {useState} from "react";


const Things = () => {
  const [things, setThings] = useState("Thing 1", "Thing 2");

  things = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  const handleAddArray = () => {
    thingsArray.push(`things ${thingsArray.length + 1}`);
    console.log(thingsArray);
  };
  return (
    <div>
      {things}

      <button className="meme--button text-white" onClick={handleAddArray}>
        Click me
      </button>
    </div>
  );
};

export default Things;
