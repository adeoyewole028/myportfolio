import React from "react";

const Travel = (props) => {
  return (
    <div>
      <div className="flex p-4 justify-center">
        <div>
          <img className="w-32 h-40 rounded-md" src={props.journal.links.img} alt="" />
        </div>
        <div className="p-3">
          <h3 className="location ">
            {props.journal.location}{" "}
            <span className="maps">
              <a href={props.journal.links.maps}>View on Google Maps</a>
            </span>
          </h3>

          <h1 className="title mt-2">{props.journal.title}</h1>
          <p className="dates mt-2">
            {props.journal.startDate} - {props.journal.endDate}
          </p>
          <p className="desc w-80 mt-2">{props.journal.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Travel;
