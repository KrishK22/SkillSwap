import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: { type: String, require: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    profileType: { type: String, required: true },
    skillsOffered: [{ type: String }],
    skillsWanted: [{ type: String }],
    availability: [{ type: String }]
})


const User = mongoose.model('User', userSchema)

export default User;
