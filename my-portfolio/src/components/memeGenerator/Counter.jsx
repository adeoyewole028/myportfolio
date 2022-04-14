import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    //   console.log(count += 1)
    // count = count + 1;
    setCount(preVal => preVal + 1);
  };
  const handleMinus = () => {
    setCount(preVal => preVal - 1);
  };

  return (
    <div className="flex">
      <button onClick={handleMinus} className="bg-red-100 w-10">
        -
      </button>
      <div className="p-5">
        <h1>{count}</h1>
      </div>
      <button onClick={handleAdd} className="bg-green-100 w-10">
        +
      </button>
    </div>
  );
};

export default Counter;
