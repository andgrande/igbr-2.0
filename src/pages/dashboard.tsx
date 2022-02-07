import { useEffect } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";
import ClassHeader from "../components/ClassContent/ClassHeader";
import { useClassesContext } from "../hooks/useClassesContext";
import Timetable from "../components/ClassContent/Timetable";

export default function Dashboard() {
    const { classes, refreshClasses } = useClassesContext();

    useEffect(() => refreshClasses(), []);
    
    return (
        <>
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >

                {classes && (
                    <Sidebar />
                )}
            
                <Box
                    backgroundColor="gray.700"
                    borderRadius="10"
                    mt="10"
                    px="10"
                    py="5"
                    maxHeight="100%"
                    width="80%"
                >

                    <ClassHeader />

                    <Divider my="6" />

                    <Timetable />

                </Box>

            </Flex>
        </>
    )
}