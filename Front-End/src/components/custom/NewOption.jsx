import { Box, Image } from "@chakra-ui/react";
import NewIcon from "../../img/new-icon.png";
import { useContext } from "react";
import { ProjectContext } from "../../store/TaskStore";

function NewOption() {
  const { navigate } = useContext(ProjectContext);

  function resolveClick() {
    navigate("/createTask");
  }

  return (
    <Box
      onClick={() => resolveClick()}
      transition="all 0.5s"
      _hover={{ backgroundColor: "whiteAlpha.200" }}
      cursor="pointer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="200px"
      height="130px"
      border="1px solid white"
      borderRadius="4px"
    >
      <p>New Task</p>
      <Image width="30px" src={NewIcon} />
    </Box>
  );
}

export default NewOption;