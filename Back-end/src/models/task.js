import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  taskerID: { type: String, required: true },
  taskName: { type: String, required: true, length: 50 },
  taskDesc: { type: String, required: true, length: 300 },
  taskStatus: { type: String, required: true },
  taskPriority: { type: String, required: true },
  taskDueDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;