import axios from "axios";

async function GetTaskRequester(taskerID){
    try {
        const response = await axios.post("http://localhost:3000/tasks",{ taskerID }, {withCredentials: true});

        return response.data;

    } catch (error) {
        console.log(error.message);
        return 1;
    }
}

export default GetTaskRequester;