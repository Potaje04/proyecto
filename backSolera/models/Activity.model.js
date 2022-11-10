const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        points: {
            type: Number,
            required: true,
            default: 1
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Activity = model("Activities", activitySchema);

module.exports = Activity;