//TODO middleware to check if the team and/or activity exists
const { isValidObjectId } = require('mongoose');
const Team = require('../models/Team.model');
const Activity = require('../models/Activity.model');
const totalPoints = require('../utils/totalPoints');

const create = async (req, res) => {
    try {
        const { name } = req.body;
        console.log('====================================');
        console.log(name);
        console.log('====================================');

        const findName = await Team.findOne({ name });

        if (findName) {
            res.status(400).json({ message: 'Team already exists' });
            return;
        }

        const team = await Team.create({ name });

        res.status(201).json(team);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
};

const getAll = async (req, res) => {
    try {
        const teams = await Team.find();
        // for (const team of teams) {
        //     for (const activity of team.activities) {
        //         const activityId = await Activity.findById(activity);
        //         console.log('====================================');
        //         console.log(activityId.name);
        //         console.log('====================================');
        //     }
        // }
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const addActivity = async (req, res) => {
    try {
        const { id } = req.params;
        const { activityId } = req.body;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        if (!isValidObjectId(activityId)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const team = await Team.findById(id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
            return;
        }
        const activity = await Activity.findById(activityId);
        if (!activity) {
            res.status(404).json({ message: 'Activity not found' });
            return;
        }
        team.activities.push(activityId);
        await team.save();
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json(error);
    }
};


const addPoints = async (req, res) => {
    try {
        const { id } = req.params;
        const { activityId } = req.body;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        if (!isValidObjectId(activityId)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const team = await Team.findById(id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
            return;
        }
        const activity = await Activity.findById(activityId);
        if (!activity) {
            res.status(404).json({ message: 'Activity not found' });
            return;
        }
        if (team.activities.indexOf(activityId) === -1) {
            team.activities.push(activityId, 1);
            await Activity.findByIdAndUpdate(activityId, { $inc: { arrivePosition: 1 } });
            for (const act of team.activities) {
                if (act.activityId === activityId) {
                    act.pointsMultiplier -= 1;
                }
            }
        }
        team.totalPoints += activity.points;
        await team.save();
        res.status(200).json(team);
    }
    catch (error) {
        res.status(500).json(error);
    }
}

const getAllActivities = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const team = await Team.findById(id).populate('activities');
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
            return;
        }
        res.status(200).json(team.activities);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const team = await Team.findById(id).populate('activities');
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
            return;
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const team = await Team.findByIdAndDelete(id);
        if (!team) {
            res.status(404).json({ message: 'Team not found' });
            return;
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    create,
    getAll,
    addPoints,
    getAllActivities,
    getOne,
    deleteOne,
    addActivity
};
