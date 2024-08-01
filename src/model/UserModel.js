import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false // Ensure this matches your requirement
      },
    image: {
        type: String,
        default: "https://github.com/shadcn.png",
    },
    googleId: {
        type: String,
        unique: true,
        sparse: true,
    },
    githubId: {
        type: String,
        unique: true,
        sparse: true,
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
    }],
}, {
    timestamps: true,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
