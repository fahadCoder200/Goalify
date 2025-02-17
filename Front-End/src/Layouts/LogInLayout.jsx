import { Box } from "@chakra-ui/react";
import LogInPage from "../pages/LogInPage";

function LogInLayout() {
    return (
        <Box minHeight="60vh" display="flex" justifyContent="center" alignItems="center">
            <LogInPage/>
        </Box>
    )
}

export default LogInLayout;