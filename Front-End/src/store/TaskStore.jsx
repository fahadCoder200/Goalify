import { createContext, useContext } from "react";
import { NavigateContext } from "./NavigationStore";


export const ProjectContext = createContext();


function ProjectContextProvider({children}){

    const navigate = useContext(NavigateContext);


    return <ProjectContext.Provider value={{navigate}}>
        {children}
    </ProjectContext.Provider>
}

export default ProjectContextProvider;