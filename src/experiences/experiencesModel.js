import mongoose, { Schema } from "mongoose"

const ExperienceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    role: {
        type: String,
    },
    company: {
        type: String,
    },
    startDate: {
        type: String,
    },
    endDate: {
        type: String,
    },
    photo: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    area: {
        type: String,
    },
})

export const Experience = mongoose.model("experiences", ExperienceSchema)
