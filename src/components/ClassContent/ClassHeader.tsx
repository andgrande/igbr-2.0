import { useEffect, useState } from "react";
import { Badge, Box, Divider, Flex, Text, Icon, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useClassesContext } from "../../hooks/useClassesContext";

import { IoSchoolOutline } from 'react-icons/io5';
import { GiTeacher } from 'react-icons/gi';

interface DProps {
    id: string,
    hour: string,
    day: string,
    classLevel: string,
    classAmount: string,
    status: string,
    teacher: {
        name: string;
    },
    studentsList: {},
    timetable: {}
}

export default function ClassHeader() {
    const { classes, boxSelected } = useClassesContext();

    const [ classSelected, setClassSelected ] = useState<DProps | undefined>();

    useEffect(() => {
        let temp = classes.find(item => item.id === boxSelected);
        
        setClassSelected(temp);

    }, [boxSelected])

    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
        >
            <Box>
                <Text as="h1" fontSize="28" fontWeight="600" >
                    Class  
                    {}
                    <Text as="span" color="yellow.500" > {classSelected?.id}</Text>
                </Text>
            
                <Text as="span" fontSize={20} fontWeight="600" color="green.300" >
                    Ongoing
                </Text>

                <Box mt="4" >
                    <Badge variant='subtle' colorScheme='purple' fontWeight="500">{classSelected?.day}</Badge>
                    <Badge variant='subtle' colorScheme='purple' ml="4" fontWeight="500">{classSelected?.hour}h00</Badge>
                    <Badge variant='solid' colorScheme='green' ml="4"fontWeight="500">03 of 12</Badge>
                </Box>
            </Box>

            <Flex
                width="40%"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Flex
                    alignItems="center"
                    fontSize={20}
                >
                    <Icon as={GiTeacher} />
                    <Text 
                        as="span" 
                        color="purple.500" 
                        ml="4" 
                        fontWeight="600">
                            {classSelected?.teacher.name 
                            ? classSelected?.teacher.name 
                            : (<Spinner />) }
                    </Text>
                </Flex>

                <Divider my="2" />

                <SimpleGrid columns={2} spacingX={20}>
                    <Flex
                        alignItems="center"
                        fontSize={20}
                    >
                        <Icon as={IoSchoolOutline} />
                        <Text as="span" color="yellow.500" ml="4" fontWeight="600">La Mouche</Text>
                    </Flex>
                    
                    <Flex
                        alignItems="center"
                        fontSize={20}
                    >
                        <Icon as={IoSchoolOutline} />
                        <Text as="span" color="yellow.500" ml="4"  fontWeight="600">Le Cheval</Text>
                    </Flex>

                    <Flex
                        alignItems="center"
                        fontSize={20}
                    >
                        <Icon as={IoSchoolOutline} />
                        <Text as="span" color="yellow.500" ml="4"  fontWeight="600">L'araignée</Text>
                    </Flex>
                    <Flex
                        alignItems="center"
                        fontSize={20}
                    >
                        <Icon as={IoSchoolOutline} />
                        <Text as="span" color="yellow.500" ml="4"  fontWeight="600">Le Singe</Text>
                    </Flex>

                </SimpleGrid>
                
            </Flex>
        </Flex>
    )
}