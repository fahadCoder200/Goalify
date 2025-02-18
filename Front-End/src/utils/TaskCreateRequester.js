import axios from "axios";

async function CreateTask(taskName, taskDesc, taskStatus, taskPriority, taskDueDate, taskerID){
    try {
        const response = await axios.post(
          "http://localhost:3000/createTask",
          {
            taskName,
            taskDesc,
            taskStatus,
            taskPriority,
            taskDueDate,
            taskerID,
          },
          {
            withCredentials: true,
          }
        );

        return response.data;
    } catch (error) {
        return 1;
    }
}

export default CreateTask;