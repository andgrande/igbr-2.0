import { Badge, Box, Divider, Flex, Text, Checkbox as Upload } from "@chakra-ui/react";

export default function Timetable() {
    return (
        <Flex flexDirection="column">

            {/* Better to insert pagination here */}

            <Text as="h2" fontSize="24" fontWeight="600" >#03 - 
                <Text as="span" color="yellow.500"> Theme Assunto</Text>
            </Text>
            <Text as="span" fontSize="20" fontWeight="400">Pending class</Text>
            <Text as="span" fontSize="20" fontWeight="400">Thursday, 12 de Outubro de 2021 - 20h00</Text>
            
            <Box>
                <Text as="h2" fontSize="22" fontWeight="500" mt="6" >Video recording</Text>
                <Text borderRadius={10} backgroundColor="gray.800" p={2} my="2" >https://www.zoomlinkheretobeclickedanytime.com/yourrecording</Text>
            </Box>

            <Box>
                <Text as="h2" fontSize="22" fontWeight="500" mt="6">Assigned Homework</Text>
                <Flex my="2">
                    {true !== true && (<Upload />)}
                    <Text borderRadius={10} backgroundColor="gray.800" p={2} >Homework instructions and/or file go here. Need to check about files. Better to have a box to store instructions and another to store the file to be downloaded.</Text>
                </Flex>
            </Box>

            <Text as="h2" fontSize="22" fontWeight="500" mt="6" >Attendance</Text>
            <Divider my="2" />

            <Box borderRadius={10} backgroundColor="gray.800" p={2}>
                <Text as="span" fontSize="20" fontWeight="500">L'abeille</Text>
                <Flex my="2">
                    <Badge variant='solid' colorScheme='green' fontWeight="500">present</Badge>
                    <Badge variant='solid' colorScheme='green' fontWeight="500" ml="2" >Homework completed</Badge>
                </Flex>
            </Box>

            <Divider my="2" />

            <Box borderRadius={10} backgroundColor="gray.800" p={2} >
                <Text as="span" fontSize="20" fontWeight="500">L'araignée</Text>
                <Flex my="2">
                    <Badge variant='solid' colorScheme='green' fontWeight="500">present</Badge>
                    <Badge variant='solid' colorScheme='pink' fontWeight="500" ml="2" >Homework pending</Badge>
                </Flex>
            </Box>

            <Divider my="2" />

            <Box borderRadius={10} backgroundColor="gray.800" p={2} >
                <Text as="span" fontSize="20" fontWeight="500">La Mouche</Text>
                <Flex my="2">
                    <Badge variant='solid' colorScheme='pink' fontWeight="500">absent</Badge>
                    <Badge variant='solid' colorScheme='pink' fontWeight="500" ml="2" >Homework pending</Badge>
                </Flex>
            </Box>
        </Flex>
    )
}