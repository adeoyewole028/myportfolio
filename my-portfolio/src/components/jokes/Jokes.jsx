import React from "react";

const Jokes = (props) => {
  return (
    <div>
      <div className="container p-2 w-60 border shadow-lg h-48">
        <h1 className="font-bold">{props.setup}</h1>
        <hr />

        <p className="mt-4">{props.punchline}</p>
      </div>
    </div>
  );
};

export default Jokes;
