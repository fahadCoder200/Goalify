import { createContext, useContext } from "react";
import { NavigateContext } from "./NavigationStore";
import RequestTask from "../utils/TaskRequester";
import { UserSigned } from "./userSignStore";


export const ProjectContext = createContext();


function ProjectContextProvider({children}){

    const navigate = useContext(NavigateContext);
    const {isAuthenticated} = useContext(UserSigned);


    async function onTaskRequester(data){
        const {taskName, taskDesc, taskStatus, taskPriority, taskDueDate} = data;
        const {userID} = isAuthenticated;
        let taskerID = userID;
        const requestTask = await RequestTask(
          taskName,
          taskDesc,
          taskStatus,
          taskPriority,
          taskDueDate,
          taskerID
        );
        if(requestTask !== 1){
            console.log("Task created Bitchhhhhh");
            navigate("/");
            return 0;
        }
    }


    return <ProjectContext.Provider value={{navigate, onTaskRequester}}>
        {children}
    </ProjectContext.Provider>
}

export default ProjectContextProvider;