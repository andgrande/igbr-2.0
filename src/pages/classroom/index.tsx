import { Box, Divider, Flex, Select, SimpleGrid } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";

import { useForm } from "react-hook-form";
import RetrieveTeachers from "../api/teacher/retrieveTeachers";
import { useEffect, useState } from "react";

import TeacherDTO from '../../dtos/UserEntities/TeacherDTO';
import GenerateClassCode from "../../utils/generateClassCode";

export default function Classroom() {
    const [ teachers, setTeachers ] = useState<TeacherDTO[] | undefined>();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const code = GenerateClassCode({ data });

        fetch('/api/classes/createClass', {
            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   },
            body: JSON.stringify({
                code,
                data
            })
        })
    }

    useEffect(() => {
        fetch('/api/teacher/retrieveTeachers', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(res => setTeachers(res.teachers.data));
        // .then(r => console.log(r))
    }, []);

    const days = { [1]: "Sunday", [2]: 'Monday', [3]: "Tuesday", [4]: "Wednesday", [5]: "Thursdayy", [6]: "Friday", [7]: "Saturday" };
    const arr: [key: string, value: string][] = Object.entries(days);

    const hours_array = Array.from({ length: 24 }, (v, k) => k);
    const class_amount_array = Array.from({ length: 30 }, (v: number, k: number) => v = k + 1);
    const class_level = ['A1', 'A2', 'B1', 'B2', 'C1'];

    const students = {};
    // if (teachers) console.log(teachers[0].ref)

    return (
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
            <Sidebar />

            <Box
                    backgroundColor="gray.700"
                    borderRadius="10"
                    mt="10"
                    px="10"
                    py="5"
                    maxHeight="100%"
                    width="80%"
            >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <SimpleGrid spacing={30} minChildWidth={200} >

                        <Select placeholder='Class day' width="200px" {...register("class_day")} >
                            {arr.map(day => (
                                <option key={day[0]} value={day[1]}>{day[1]}</option>
                            ))}
                        </Select>

                        <Select placeholder='Class hour' width="200px" {...register("class_hour")} >
                            {hours_array.map(hour => (
                                <option key={hour} value={hour}>{hour}h00 - {hour + 1}h00</option>
                            ))}
                        </Select>

                        <Select placeholder='Class level' width="200px" {...register("class_level")} >
                            {class_level.map(level => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </Select>

                        <Select placeholder='Class amount' width="200px" {...register("class_amount")} >
                            {class_amount_array.map(amount => (
                                <option key={amount} value={amount}>{amount}</option>
                            ))}
                        </Select>
                    </SimpleGrid>
                
                    <Divider my={6} />

                    <Select placeholder='Class teacher' width="200px" {...register("class_teacher")} >
                        {teachers && teachers.map(teacher => (
                            <option key={teacher.data.id} value={teacher.ref}>"{teacher.data.nickname}" - {teacher.data.name}</option>
                        ))}
                    </Select>

                    <Divider my={6} />

                    <Select placeholder='Class students' width="200px" {...register("class_students")} >
                        {class_amount_array.map(amount => (
                            <option key={amount} value={{}}>{amount}</option>
                        ))}
                    </Select>

                    <input type="submit" />                    
                </form>

{/*   "studentsList": {}, */}


            </Box>
        </Flex>
    )
}