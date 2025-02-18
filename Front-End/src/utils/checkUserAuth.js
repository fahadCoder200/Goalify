import axios from "axios";

async function CheckUserAuth() {
    try {
        const response = await axios.post(
            "http://localhost:3000/checkAuth",
            {},
            { withCredentials: true }
          ); 

        return response.data;

    } catch (error) {
        return 1;
    }
}

export default CheckUserAuth;