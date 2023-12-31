import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    area: {
        type: String,
    },
    image: {
        type: String,
    },
    experiences: [
        {
            type: Schema.Types.ObjectId,
            ref: "experiences",
        },
    ],
})

export const User = mongoose.model("users", UserSchema)
