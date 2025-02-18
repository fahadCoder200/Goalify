import axios from "axios";

async function LogIn(username, password) {
    try {
        const response = await axios.post("http://localhost:3000/login", {
            "username": username,
            "password": password
        },
        { withCredentials: true }
        );

        console.log(response.data);
        
        return response.data;
    } 
    catch (error) {
        console.log("Invalid Credentials");
        return 1;
    }
}

export default LogIn;