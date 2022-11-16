const { Schema, model } = require("mongoose");

const activitySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        //pointsMutiplier
        arrivePosition: {
            type: Number,
            default: 3,
            min: 1,
            max: 3
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Activity = model("Activities", activitySchema);

module.exports = Activity;