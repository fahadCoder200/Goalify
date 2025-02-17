import { Box, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { UserSigned } from "../store/userSignStore";
import { toast } from "react-toastify";
import NavBar from "../components/custom/NavBar";

function DashboardLayout(){


    const {logOut} = useContext(UserSigned);

    async function onLogOut() {
        await logOut();
        toast.success("Logged Out Successfully");
    }

    return(
        <Box display="flex" justifyContent="space-between" width="100vw" height="100vh">
            <NavBar/>
            <p>Home Page!</p>
            <Button display="block" onClick={()=> onLogOut()}>Log Out</Button>
        </Box>
    )
}

export default DashboardLayout;