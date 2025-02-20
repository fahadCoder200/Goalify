import { useContext, useEffect } from "react";
import { ProjectContext } from "../store/TaskStore";
import { Box, Checkbox, Heading, Input, List, Text } from "@chakra-ui/react";
import { UserSigned } from "../store/userSignStore";

function TasksPage() {
  const { tasks, FuncForEffect } = useContext(ProjectContext);
  const { isAuthenticated } = useContext(UserSigned);

  useEffect(() => {
    if (!isAuthenticated || isAuthenticated === null) return;
    FuncForEffect();
  }, [isAuthenticated]);

  return (
    <Box
      boxSizing="border-box"
      w="95vw"
      h="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="50px"
    >
      <Heading fontSize="2rem">TASKS!</Heading>
      <List.Root w="100%" display="flex" alignItems="center" gap="8px" listStyle="none">
        {console.log(tasks)}
        {tasks.map((task) => (
          <List.Item
            width="30%"
            borderRadius="6px"
            padding="20px"
            border="1px solid white"
            key={task._id}
            cursor="pointer"
            transition="all 0.5s"
            _hover={{border: "1px solid purple"}}
            display="flex"
            alignItems="center"
            gap="4px"
          >
            <Checkbox></Checkbox>
            <Text>{task.taskName}</Text>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}

export default TasksPage;