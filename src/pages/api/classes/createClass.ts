import { NextApiRequest, NextApiResponse} from 'next';
import { fauna } from '../../../services/faunadb';
import { query as q } from 'faunadb';
import CreateClassParams from '../../../dtos/ClassEntities/CreateClassDTO';

export default async function CreateClass(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') return response.status(405).end('Method not allowed');

    const req = JSON.parse(request.body);
    const { code } = req;
    const { data }: CreateClassParams = req;

    console.log(code)
    console.log(data.class_teacher)

    const mockData = {
        id: code,
        hour: data.class_hour,
        day: data.class_day,
        classAmount: data.class_amount,
        status: "Not started",
        // teacher: Ref(Collection("teachers"), "--teacher_id"),
        teacher: data.class_teacher,
        studentsList: {},
        //     studentId: Ref(Collection("students"), "--user_id"),
        //     studentStatus: "active",
        // },
        timetable: {
            1: {
                classStatus: "pending",
                classDay: "dd",
                classTime: "hour",
                classTheme: "subject",
                classHomework: "homework",
                classRecording: "string",
                classAttendance: {
                    // studentOne: {
                    //     studentId: Ref(Collection("students"), "--user_id"),
                    //     presence: "boolean",
                    //     homework: "completed"
                    // }
                }
            },
            2: {
                classStatus: "pending",
                classDay: "dd",
                classTime: "hour",
                classTheme: "subject",
                classHomework: "homework",
                classRecording: "string",
                classAttendance: {
                    // studentOne: {
                    //     studentId: Ref(Collection("students"), "--user_id"),
                    //     presence: "boolean",
                    //     homework: "completed"
                    // }
                }
            }
        }
    }

    // const teacherData = await fauna.query(
    //     q.Get(
    //         q.Match(
    //             q.Index('teacher_by_id'),
    //             1234
    //         )
    //     )
    // );

    // const teacherData = await fauna.query(
    //     q.Select('data',
    //         q.Get(
    //             q.Ref(q.Collection("teachers"), "319313303190897231")
    //             )
    //         )
    //     )

    // console.log(teacherData)

    // const studentsList = await fauna.query([
    //     q.Get(q.Match(q.Index("student_by_id"), 'uuid')),
    //     q.Get(q.Match(q.Index('student_by_id'), 'abcd')),
    // ]);

    // mockData.teacher = teacherData;

    // mockData.studentsList = studentsList;

    const newClass = await fauna.query(
        q.Create(
            q.Collection('classes'),
            { 
                    data: mockData
                }
        )
    )

    console.log(newClass)

    

    return response.status(201).json({ newClass });
}