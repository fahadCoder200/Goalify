import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import loginRouter from "./routers/userAuthRouters/loginRouter.js";
import signUpRouter from "./routers/userAuthRouters/signUpRouter.js";
import UserAuthRouter from "./routers/userAuthRouters/checkUserAuthRouter.js"
import RefreshRouter from "./routers/userAuthRouters/refreshRouter.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());
 
app.use(RefreshRouter);
app.use(UserAuthRouter);
app.use(loginRouter);
app.use(signUpRouter);

mongoose.connect(process.env.DB_URI)
    .then(()=> console.log("Connected to Mongoose"))
    .catch((err)=> console.log(err))

app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT}`);
});