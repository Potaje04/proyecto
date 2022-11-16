const mongoose = require("mongoose");
const Team = require("../models/Team.model");
const Activity = require("../models/Activity.model");

const deleteAll = async () => {
    try {
        await Team.deleteMany();
        await Activity.deleteMany();
        console.log("All deleted");
    } catch (error) {
        console.log(error);
    }
};

const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/backSolera";

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to DB");
        deleteAll();
    })
    .catch((error) => {
        console.log(error);
    }
    );

