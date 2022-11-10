import React from 'react';
import './Team.css';
const Team = (props) => {
    // Mas tarde exportar
    let sumatotal = 0;
    for (const activities in props.activities) {
        sumatotal = sumatotal + activities.points;
    }
    const changeTeamHandler = () => {
        console.log('hola ' + props.id)
      props.onChangeTeam(props.id);
    }
    return (
        <div className="teamCard" onClick={changeTeamHandler}>
            <p className="teamName">{props.name}</p>
            <p className="teamPoints">{props.totalPoints}</p>
        </div>
    )
}

export default Team;