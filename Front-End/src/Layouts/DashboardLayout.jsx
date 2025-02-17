import { Box, Button, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { UserSigned } from "../store/userSignStore";
import { toast } from "react-toastify";
import NewOption from "../components/custom/NewOption";

function DashboardLayout(){


    const {logOut} = useContext(UserSigned);

    async function onLogOut() {
        await logOut();
        toast.success("Logged Out Successfully");
    }

    return(
        <Box justifyContent="space-between" display="flex" padding="20px" width="100vw" height="100vh">
            <Stack width="70vh" display="flex" alignItems="center">
                <Button onClick={()=>console.log("Projects Listed")}
                _hover={{border: "1px solid white", backgroundColor: "purple.500"}}
                transition="all 0.5s"
                backgroundColor="purple.600">List Tasks!</Button>
                <NewOption/>
            </Stack>
            <Button backgroundColor="purple.600" display="block" onClick={()=> onLogOut()}>Log Out</Button>
        </Box>
    )
}

export default DashboardLayout; 