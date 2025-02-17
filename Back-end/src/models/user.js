import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    emailAddress: { type: String, required: true },
    password: { type: String, required: true }, 
    refreshToken: { type: String},
    createdAt: { type: Date, default: Date.now }    
});

const User = mongoose.model("User", UserSchema);

export default User;