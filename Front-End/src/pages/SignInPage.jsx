import { Box, Button, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from "react";
import { UserSigned } from "../store/userSignStore";

function SignInPage(){
      const {
        handleSubmit,
        register,
      } = useForm();
      
      const { signIn } = useContext(UserSigned);

      const onSubmit = async (data) => {
        await signIn(data.username, data.password, data.emailAddress);
      };
    
      return (
        <Box padding="20px" border="1px solid white" minW="40vw" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap="20px">
              <Input 
              {...register("username", {required: "Username is required",
              })} type="text" 
              placeholder="Username"></Input>

              <Input 
              {...register("emailAddress", {required: "Email Address is required",
              })} type="email" 
              placeholder="Email Address"></Input>

              <Input type="text" {...register("password", {
                required: "Password is required",
              })} 
              placeholder="Password"></Input>

              <Link to="/login">Already Have an Account! Login</Link>
              <Button type="submit">Sign In</Button>

            </Box>
          </form>
          <ToastContainer/>
        </Box>
      );
}

export default SignInPage;