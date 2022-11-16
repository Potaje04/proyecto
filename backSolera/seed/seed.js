// import ActivitySeed from './activities.json';
// import { readFile } from 'fs/promises';
// require('dotenv/config');
const json = require('./activities.json');
const mongoose = require("mongoose");
const Activity = require("../models/Activity.model");
const Team = require("../models/Team.model");

// const json = JSON.parse(JSON.stringify(ActivitySeed));
// const json = await readFile('./activities.json', 'utf8');

const seedActivities = async () => {
    try {
        await Activity.deleteMany();
        await Activity.insertMany(json);
        console.log(json);
        console.log("Activities seeded");
    } catch (error) {
        console.log(error);
    }
};

const seedTeams = async () => {
    try {
        await Team.deleteMany();
        let i = 0;
        while (i < 10) {
            const team = new Team({
                name: `Team ${i + 1}`,
                totalPoints: 0,
                activities: []
            });
            await team.save();
            i++;
        }
        console.log("Teams seeded");
    } catch (error) {
        console.log(error);
    }
};


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backSolera";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
        seedActivities();
        seedTeams();
    })
    .catch((error) => {
        console.log(error);
    })