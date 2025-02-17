import axios from "axios";


async function LogOut() {
    const response = await axios.post("http://localhost:3000/logout", {}, {withCredentials: true});

    return response.data;
}

export default LogOut;