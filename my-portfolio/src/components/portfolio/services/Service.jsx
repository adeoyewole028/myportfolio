import React from "react";
import { Icon } from "@iconify/react";

const Service = ({ icon, title, desc }) => {
  return (
    <div>
      <div className="sm:w-72 p-5 bg-white text-black text-center border m-5 rounded h-60 sm:w-96">
        <div className="flex flex-col justify-center">
          <Icon className="self-center text-4xl" icon={icon} />
          <h2 className="text-2xl mt-3 font-bold">{title}</h2>
          <p className="mt-2 tracking-wider	">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Service;
