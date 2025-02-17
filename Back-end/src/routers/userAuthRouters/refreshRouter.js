import { Router } from "express";
import jwt from "jsonwebtoken";

const RefreshRouter = Router();

RefreshRouter.post("/refresh", (req, res) => {
    try {
        const token = req.cookies.refreshToken;

        if(!token){
            return res.status(401).json({ message: "No Cookie Brooo!!", isAuthenticated: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);

        const newAccessToken = jwt.sign({userID: decoded._id, username: decoded.username, iat: Math.floor(Date.now() / 1000)}, process.env.JWT_SECERT_KEY, {expiresIn: "1h"});

        res.cookie("authToken", newAccessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        });

        res.status(200).json({message: "Success", isAuthenticated: true});

        return true;

    } catch (error) {
        if (error.name === "JsonWebTokenError") {
            console.log("Invalid Token:", error.message);
            return res.status(401).json({ message: "Invalid Cookie", isAuthenticated: false });
          }
          else if(error.name === "TokenExpiredError"){
            console.log("Token Expired: ", error.message);
            return res.status(404).json({message: "Token Expired", isAuthenticated: false});
          }
           else {
            console.log("Server Error:", error.name);
            return res.status(500).json({ message: "Internal Server Error", isAuthenticated: false });
          }
    }
});

export default RefreshRouter;