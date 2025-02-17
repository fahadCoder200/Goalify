import { Box } from "@chakra-ui/react";
import SignInPage from "../pages/SignInPage";

function SignInLayout() {
    return (
        <Box minHeight="60vh" display="flex" justifyContent="center" alignItems="center">
            <SignInPage/>
        </Box>
    )
}

export default SignInLayout;