import React, { useState } from 'react';
import './App.css';
import Children from './Children.js';

const teams = [
  {
    id: "1",
    name: "team1",
    totalPoints: "0",
    activities: [
      { name: "activity_name", points: "0" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "2",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "3",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "4",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "5",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "10",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "9",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "8",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "6",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
  {
    id: "7",
    name: "team1",
    totalPoints: "34",
    activities: [
      { name: "activity_name", points: "34" },
      { name: "activity_name", points: "34" },
    ],
  },
];

function App() {
  const appName = "SOLERA TEAMS. BOOTCAMP 4";
  
  return (
        <div>
          
          <div className="Teams">
<h1 className="AppName">{appName}</h1>
           <Children teams={teams}/>
          </div>
        </div>
  );
}

export default App;
