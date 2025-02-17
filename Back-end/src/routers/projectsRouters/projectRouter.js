import { Router } from "express";

const ProjectRouter = Router();

ProjectRouter.post("/Projects", (req, res) => {
    res.status(200).send("Your Projects");
});