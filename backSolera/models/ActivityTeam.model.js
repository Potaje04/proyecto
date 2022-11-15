const { Schema, model } = require("mongoose");

const activityTeamSchema = new Schema(
    {
        activity: {
            type: Schema.Types.ObjectId,
            ref: "Activity"
        },
        place: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ActivityTeam = model("ActivityTeams", activityTeamSchema);

module.exports = ActivityTeam;
