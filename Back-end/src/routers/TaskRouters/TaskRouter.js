import { Router } from "express";
import Task from "../../models/task.js";

const TaskRouter = Router();

TaskRouter.post("/createTask", async (req, res) => {
  const { taskName, taskDesc, taskPriority, taskStatus, taskDueDate, taskerID } =
    req.body;

    try {
        const newTask = new Task( { taskName, taskDesc, taskPriority, taskStatus, taskDueDate, taskerID} );
        await newTask.save();

        console.log("Task Created Successfully");

        res.status(201).json({"Success": true});
        
    } catch (error) {
        console.log("Error creating task: ", error.message);
        res.send(500).json({"Success": false});
    }

});

export default TaskRouter;