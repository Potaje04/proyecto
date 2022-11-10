import React, {useState} from "react";


import TeamsList from './Teams/TeamsList.js';
import Activities from './Activities/Activities.js';



const Children = (props) => {
    const teams=props.teams; 
    let show;
    const [teamSelected, setTeamSelected] = useState(null);

    const teamSelectedHandler = (team) => {
      if (teamSelected) {
        setTeamSelected(null);
      } else {
        setTeamSelected(team);
      }
    };
    console.log("teamselected= " + teamSelected);
    if (teamSelected) {
      const teamObject = teams.filter((team) => {
        return team.id == teamSelected;
      });
      show = <Activities team={teamObject[0]} />;
    } else {
      show = <TeamsList onChangeTeam={teamSelectedHandler} teams={teams} />;
    }

    return <div>{show}</div>
}


export default Children; 