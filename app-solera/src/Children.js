import React, {useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
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
    const calculateTotalPoints = team =>{ 
      let sum=0; 
      for( let a  of  team.activities){
        sum += parseInt(a.points);
      }
       
      return sum; 
    }

    if (teamSelected) {
      const teamObject = teams.filter((team) => {
        return team.id === teamSelected;
      });
      show = <Activities onChangeTeam={teamSelectedHandler} team={teamObject[0]} totalPoints={calculateTotalPoints(teamObject[0]) }/>;
    } else {
      show = <TeamsList onChangeTeam={teamSelectedHandler} teams={teams} />;
    }

    return <div className="d-flex justify-content-center align-items-center p-5">{show}</div>
}


export default Children; 