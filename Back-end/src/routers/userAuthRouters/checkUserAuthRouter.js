import { Router } from "express";
import jwt from "jsonwebtoken";

const UserAuthRouter = Router();

UserAuthRouter.post("/checkAuth", async (req, res) => {

    try {
      const token = req.cookies.authToken;
  
      if (!token) {
        return res.status(401).json({ message: "No Cookie Brooo!!", isAuthenticated: false });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECERT_KEY);
      return res.status(200).json({ user: decoded, isAuthenticated: true, message: "Success" });
  
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

export default UserAuthRouter;