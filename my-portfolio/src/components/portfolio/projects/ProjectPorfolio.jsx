import React from "react";
import { Link } from "react-router-dom";

const ProjectPortfolio = ({ projectImage, title, links }) => {
  return (
    <div className="">
      <div className="sm:w-72 p-5 text-white text-center border m-5 rounded">
        <div>
          <Link to={links.link}>
            <img className="port" src={projectImage} alt="" />
          </Link>

          <h2>{title}</h2>

          <button className="p-2 bg-green-500 rounded ">
            <Link to={links.link}> {links.title}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectPortfolio;
