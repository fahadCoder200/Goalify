import { Router } from "express";
import Task from "../../models/task.js";
import AuthMiddleWare from "../../middleWares/authMiddleware.js";

const TaskRouter = Router();

TaskRouter.post("/createTask", AuthMiddleWare ,async (req, res) => {
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


TaskRouter.post("/tasks", AuthMiddleWare , async (req, res) => {
    const {taskerID} = req.body;

    try {
        const getTasks = await Task.find({taskerID});
        res.json(getTasks);

        return 0;
    } catch (error) {
        console.log(error.message);
        res.sendStatus(500);
    }

})

export default TaskRouter;