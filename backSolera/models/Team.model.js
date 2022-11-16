const { Schema, model } = require("mongoose");

const teamSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        totalPoints: {
            type: Number,
            default: 0
        },
        activities: [
            {
                activityId: {
                    type: Schema.Types.ObjectId,
                    ref: "Activity"
                },
                points: {
                    type: Number,
                    default: 0
                },
            }
        ],
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Team = model("Teams", teamSchema);

module.exports = Team;