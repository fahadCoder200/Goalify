import { useContext } from "react";
import { ProjectContext } from "../store/TaskStore";
import { List, Text } from "@chakra-ui/react";


function TasksPage(){

    const { tasks } = useContext(ProjectContext);

    return (
        <List.Root>
            {console.log(tasks)}
            {tasks.map((task) => (
                <List.Item key={task._id}>
                    <Text>{task.taskName}</Text>
                </List.Item>
            ))}
        </List.Root>
    )
}

export default TasksPage;