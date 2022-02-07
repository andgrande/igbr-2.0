import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import SidebarNav from "./SidebarNav";

export default function Sidebar() {
    const router = useRouter()

    async function handleCreateClass(){ 
        // fetch('/api/classes/createClass', {
        //     method: 'POST',      
        // })
        // .then(response => response.json())
        // .then(res => console.log(res))
        router.push('/classroom')
    }

    async function handleCreateTeacher() {
        fetch('/api/teacher/createTeacher', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(res => console.log(res));
    }

    async function handleCreateStudent() {
        fetch('/api/student/createStudent', {
            method: 'POST',
        })
        .then(response => response.json())
        .then(res => console.log(res));
    }

    return (
        <Box as="aside" w="15%" mr="8">
            <Button 
                as="button" 
                aria-label="Create Class"
                onClick={() => handleCreateClass()}>
                    Create Class
            </Button>

            <Button
                as="button"
                aria-label="Create Teacher"
                onClick={() => handleCreateTeacher()}
            >Create Teacher</Button>

            <Button
                as="button"
                aria-label="Create Student"
                onClick={() => handleCreateStudent()}
            >Create Student</Button>

            <SidebarNav />
        </Box>
    )
}