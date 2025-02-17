import { Router } from "express";
import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";

const signUpRouter = Router();

signUpRouter.post("/signup", async (req, res)=>{
    const {username} = req.body;
    const {password} = req.body;
    const {emailAddress} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User( {username, password: hashedPassword, emailAddress });
        const accessToken = jwt.sign({userId: newUser._id, username: username, iat: Math.floor(Date.now() / 1000)}, process.env.JWT_SECERT_KEY, {expiresIn: "1h"});
        const refreshToken = jwt.sign({userId: newUser._id, username: username, jti: uuidv4()}, process.env.JWT_REFRESH_KEY, {expiresIn: "7d"});

        newUser.refreshToken = refreshToken;

        await newUser.save();
        console.log('User created successfully!');

        res.cookie("authToken", accessToken, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.status(201).json({message: "Success"});
    }
    catch (error) {
        console.error('Error creating user:', error.message);
        res.sendStatus(500);
    }
});

export default signUpRouter;