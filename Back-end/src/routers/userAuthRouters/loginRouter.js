import { Router } from "express";
import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";

const loginRouter = Router();

loginRouter.post("/login", async (req, res)=>{
    const { username } = req.body;
    const { password } = req.body;

        const findUser = await User.findOne({username});
        if(!findUser){
            console.log("User not Found");
            res.sendStatus(404);
            return false;
        }

        console.log(findUser.password);
        const isMatch = await bcrypt.compare(password, findUser.password);
        console.log(isMatch);

        if(isMatch){
            const accessToken = jwt.sign({userID: findUser._id, username: username, iat: Math.floor(Date.now() / 1000)}, process.env.JWT_SECERT_KEY, {expiresIn: "1h"});
            const refreshToken = jwt.sign({userId: findUser._id, username: username, jti: uuidv4()}, process.env.JWT_REFRESH_KEY, {expiresIn: "7d"});

            res.cookie("authToken", accessToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 3600000
            });

            console.log("Auth Token sent");

            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })

            res.status(200).json({username: findUser.username, ID: findUser._id});

            return true;
        }
        else{
            console.log("Incorrect Password");
            res.status(400).json({message: "Invalid Thingins"});
            return false;
        }
    }    
);


loginRouter.post("/logout", (req, res) => {
    res.clearCookie("authToken", {httpOnly: true, sameSite: "lax"});
    res.clearCookie("refreshToken", {httpOnly: true, sameSite: "lax"});
    res.status(200).send("Donee ittttt");
});


export default loginRouter;