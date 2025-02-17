import { Box, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserSigned } from "../store/userSignStore";
import { toast } from "react-toastify";

function LogInPage(){

    const {
        handleSubmit,
        register,
      } = useForm();

      const { logIn } = useContext(UserSigned);
    
      const onSubmit = async (data) => {
        const isLogged = await logIn(data.username, data.password);
        if (isLogged === 0) {
          toast.success("Login Successful", { autoClose: 2000 });
        } else {
          toast.error("Invalid Username or Password", { autoClose: 2000 });
        }
      };
    
      return (
        <Box padding="20px" border="1px solid white" minW="40vw" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="20px">

              <Input 
              {...register("username", {required: "Username is required",
              })} type="text" 
              placeholder="Username"></Input>

              <Input type="text" {...register("password", {
                required: "Password is required",
              })} 
              placeholder="Password"></Input>

              <Link to="/signin">Don't Have an Account, Create Account!</Link>
              <Button bg="blue.400" type="submit">Log In</Button>
            </Box>
          </form>
        </Box>
)}

export default LogInPage;