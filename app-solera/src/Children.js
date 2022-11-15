import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import TeamsList from "./Teams/TeamsList.js";
import Activities from "./Activities/Activities.js";
import { useFetch } from "./Servicios/use-teams.js";

const Children = () => {
  var { data } = useFetch("http://localhost:5005/api/teams/");

  let show;
  const [teamSelected, setTeamSelected] = useState(null);

  const teamSelectedHandler = (team) => {
    if (teamSelected) {
      setTeamSelected(null);
    } else {
      console.log(team);

      setTeamSelected(team);
    }
  };

  const calculateTotalPoints = (team) => {
    let sum = 0;
    for (let a of team.activities) {
      sum += parseInt(a.points);
    }

    return sum;
  };

  if (teamSelected) {
    const teamObject = data.filter((team) => {
      return team._id === teamSelected;
    });
    show = (
      <Activities
        onChangeTeam={teamSelectedHandler}
        team={teamSelected}
        totalPoints={calculateTotalPoints(teamSelected)}
      />
    );
  } else {
    show = <TeamsList onChangeTeam={teamSelectedHandler} teams={data} />;
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      {show}
    </div>
  );
};

export default Children;
