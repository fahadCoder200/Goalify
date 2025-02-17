import { Box } from "@chakra-ui/react";
import CreateTaskPage from "../pages/CreateTaskPage";


function CreateTaskLayout(){
    return(
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" height="90vh">
            <CreateTaskPage/>
        </Box>
    )
}

export default CreateTaskLayout;