import axios from "axios";

async function LogIn(username, password) {
    try {
        const response = await axios.post("http://localhost:3000/login", {
            "username": username,
            "password": password
        },
        { withCredentials: true }
        );

        return 0;
    } 
    catch (error) {
        console.log("Invalid Credentials");
        return 1;
    }
}

export default LogIn;