const { isValidObjectId } = require('mongoose');
const Activity = require('../models/Activity.model');

const create = async (req, res) => {
    try {
        const { name, points } = req.body;
        const activity = await Activity.create({ name, points });
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getAll = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const activity = await Activity.findById(id);
        if (!activity) {
            res.status(404).json({ message: 'Activity not found' });
            return;
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json(error);
    }
}


//deleteOne
const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const activity = await Activity.findByIdAndDelete(id);
        if (!activity) {
            res.status(404).json({ message: 'Activity not found' });
            return;
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json(error);
    }
}

//updateOne
const updateOne = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const activity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
        if (!activity) {
            res.status(404).json({ message: 'Activity not found' });
            return;
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    deleteOne,
    updateOne
};

