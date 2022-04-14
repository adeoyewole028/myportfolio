import React from "react";
import UA1 from "../../Images/UA1.png";
import UA2 from "../../Images/UA2.png";
import UA3 from "../../Images/UA3.png";
import UA4 from "../../Images/UA4.png";
import UA5 from "../../Images/UA5.png";
import UA6 from "../../Images/UA6.png";
import UA7 from "../../Images/UA7.png";
import UA8 from "../../Images/UA8.png";

const peopleData = [UA1, UA2, UA3, UA4, UA5, UA6, UA7, UA8,];

const People = () => {
  const user = peopleData.map((users) => (
    <img className="w-14 p-1" src={users} key={users} alt="" />
  ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 p-4">
      <div className="sm:px-24 sm:pr-0 mt-5">
        <h1 className="text-4xl text-indigo-900 font-bold ">TimeNow is used by the most influencial people.</h1>
        <div className="flex flex-wrap sm:mt-3">{user}</div>
      </div>

      <div className="py-4 text-lg sm:px-24 sm:pl-16 sm:pr-40">
        <p>
          The most influential people on Facebook, Twitter, and Instagram are
          using TweetNow to schedule posts when their followers are most active.
        </p>

        <p className="mt-5 sm:pr-10">They generally receive 23% more engagement than people who do not</p>
      </div>
    </div>
  );
};

export default People;
