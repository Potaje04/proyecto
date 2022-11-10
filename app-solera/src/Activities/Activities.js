import React from "react";
import ActivitiesList from "./ActivitiesList.js";
import "./Activities.css";

const Activities = (props) => {
  console.log(props.team.activities);
  return (
    <div className="Activities">
      <div className="Activities-Header">
        <h2>{props.team.name}</h2>
        <h3>{props.team.totalPoints}</h3>
      </div>
      <ActivitiesList activities={props.team.activities}/>
    </div>
  );
};

export default Activities;
