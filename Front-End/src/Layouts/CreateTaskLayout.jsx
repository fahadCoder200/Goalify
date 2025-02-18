import { Box, Heading } from "@chakra-ui/react";
import CreateTaskPage from "../pages/CreateTaskPage";


function CreateTaskLayout(){
    return(
        <Box display="flex" justifyContent="center" flexDirection="column" gap="30px" alignItems="center" width="100vw" height="90vh">
            <Heading>Task Details</Heading>
            <CreateTaskPage/>
        </Box>
    )
}

export default CreateTaskLayout;