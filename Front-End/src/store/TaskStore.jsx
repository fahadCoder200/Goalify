import { createContext, useContext, useReducer } from "react";
import { NavigateContext } from "./NavigationStore";
import CreateTask from "../utils/TaskCreateRequester";
import { UserSigned } from "./userSignStore";
import GetTaskRequester from "../utils/GetTasksRequester";


export const ProjectContext = createContext();

function TaskReducer(state, action){
    if(action.type === "SET_TASKS"){
        return action.payload;
    }
    else if(action.type === "UPDATE_TASKS"){
        const newTask = [...state, action.payload];
        return newTask;
    }
}

function ProjectContextProvider({children}){

    const navigate = useContext(NavigateContext);
    const { isAuthenticated } = useContext(UserSigned);


    const [tasks, dispatch] = useReducer(TaskReducer, []);
    
    async function onGetTaskRequester() {
      const { userID } = isAuthenticated;
      const tasks = await GetTaskRequester(userID);
      if (tasks === 1) {
        console.log("errorrrrrrrrr");
        return 1;
      }
      dispatch({type: "SET_TASKS", payload: tasks});
      navigate("/Tasks");
      return 0;
    }

    async function FuncForEffect(){
        await onGetTaskRequester();
    }

    async function onTaskRequester(data){
        const {taskName, taskDesc, taskStatus, taskPriority, taskDueDate} = data;
        const {userID} = isAuthenticated;
        let taskerID = userID;
        const requestTask = await CreateTask(
          taskName,
          taskDesc,
          taskStatus,
          taskPriority,
          taskDueDate,
          taskerID
        );
        if(requestTask !== 1){
            console.log("Task created Bitchhhhhh");

            dispatch({type: "UPDATE_TASKS", payload: requestTask});

            navigate("/");
            return 0;
        }
    }

    return <ProjectContext.Provider value={{navigate, onTaskRequester, onGetTaskRequester, FuncForEffect, tasks}}>
        {children}
    </ProjectContext.Provider>
}

export default ProjectContextProvider;