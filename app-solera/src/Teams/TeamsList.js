import React from "react";

import "./TeamsList.css";
import Team from "./Team.js";

const TeamsList = (props) => {
  if (props.teams.length === 0) {
    return <h2 className="teams-list__fallback">Found no teams</h2>;
  }
  return (
    <ul className="teams-list">
      {props.teams.map((team) => (
        <Team onChangeTeam={props.onChangeTeam} id={team.id} key={team.id} name={team.name} totalPoints={team.totalPoints} activities={team.activities} />
      ))}
    </ul>
  );
};

export default TeamsList;
