import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { RiLogoutCircleRLine } from "react-icons/ri";


export default function Header() {
    return (
        <Flex 
            as="header"
            width="100%"
            maxWidth={1080}
            height="20"
            marginX="auto"
            flexDirection="row" 
            justifyContent="space-between" 
            alignItems="center"

        >
            <Text
                fontSize="5xl"

            >igbr</Text>

            <IconButton 
                aria-label="Logout"
                icon={<Icon as={RiLogoutCircleRLine} /> }
                fontSize="20" 
            />
        </Flex>
    )
}