import { Flex, Text } from "@chakra-ui/react";
import { useClassesContext } from "../../hooks/useClassesContext";

interface NavLinkDetailsProps {
    classId: string;
    classDay: string;
    classLevel: string;    
}

export default function NavLinkDetails({ classId, classDay, classLevel }: NavLinkDetailsProps) {
    const { boxSelected, setBoxSelected } = useClassesContext();

    return (
        <Flex
            as="button"
            flexDirection="column"
            width="254"
            maxWidth="254"
            borderRadius="10"
            paddingX="4"
            paddingY="2"
            backgroundColor={boxSelected !== classId ? "gray.700" : "gray.600"}
            boxShadow={boxSelected !== classId ? "md" : "dark-lg"}
            _hover={{
                background: "gray.600",
                boxShadow: "dark-lg"
            }}
            transition="0.5s"
            onClick={() => setBoxSelected(classId)}
            >
            <Text>Class Id {classId}</Text>
            <Text>Class day {classDay}</Text>
            <Text>Class level {classLevel}</Text>
        </Flex>
    )
} 