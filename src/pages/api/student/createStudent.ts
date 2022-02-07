import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../../services/faunadb';
import { query as q } from 'faunadb';

export default async function CreateStudent(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') return response.status(405).end('Method nor allowed');

    const data = {
        id: "abcd",
        name: "Chamas",
        email: "email@email.com",
        status: "active",
        classId: '',
    }

    const student = await fauna.query(
        q.Create(
            q.Collection('students'),
            {
                data: data
            }
        )
    )

    return response.status(201).json({ student });
}