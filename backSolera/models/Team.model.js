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
                type: Schema.Types.ObjectId,
                ref: "Activity"
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