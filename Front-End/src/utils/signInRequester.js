import axios from "axios";

async function SignIn(username, password, emailAddress) {
    try {
        const response = await axios.post("http://localhost:3000/signup", {
            "username": username,
            "password": password,
            "emailAddress": emailAddress
        },
        { withCredentials: true } 
        );

        return response.data;

    } 
    catch (error) {
        return 1;
    }
}

export default SignIn;