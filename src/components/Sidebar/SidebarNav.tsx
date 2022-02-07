import { Box, VStack, Text } from "@chakra-ui/react";
import { useClassesContext } from "../../hooks/useClassesContext";
import NavLinkDetails from "./NavLinkDetails";

export default function SidebarNav() {
    const { classes } = useClassesContext();

    return (
        <VStack spacing="12" align="flex-start" >
            
            {/* NavSection */}
            <Box>
                <Text
                    fontSize="24"
                    fontWeight="500"
                >CLASSES</Text>
                <VStack 
                    mt="8"
                    spacing="12px"
                >
                    {/* NavLink Details*/}

                    {classes.map(classItem => 
                        <NavLinkDetails 
                            key={classItem.id}
                            classId={classItem.id} 
                            classDay={classItem.day} 
                            classLevel={classItem.classLevel} 
                        />
                    )}
                </VStack>
            </Box>

        </VStack>
    )
}