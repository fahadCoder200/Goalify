import { Box, Image, List, ListItem, Text } from "@chakra-ui/react";
import ProjectIcon from "../../img/projects-icons.png"

function NavBar(){

    const NavOptions = [
        {
            title: "Projects",
            img_src: ProjectIcon
        }
    ]


    return (
        <Box borderRight="1px solid white" w="15vw" display="flex" justifyContent="center">
            <List.Root w="100%" listStyle="none" >
            {NavOptions.map((option) => (
                <ListItem 
                _hover={{ backgroundColor: "purple.600", color: "white", cursor: "pointer" }}
                width="80%"
                padding="10px"
                margin="10px"
                display="flex"
                gap="5px"
                borderRadius="6px"
                key={option.title}>
                    <Image width="20px" fill="white" src={option.img_src}/>
                    <Text>{option.title}</Text>
                </ListItem>
            ))}
            </List.Root>
        </Box>
    );
}

export default NavBar;