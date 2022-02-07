import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../../services/faunadb';
import { query as q } from 'faunadb';

export default async function CreateTeacher(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'POST') return response.status(405).end('Method not allowed');;

    console.log('CreateTeacher')

    const teacher = await fauna.query(
        q.Create(
            q.Collection('teachers'),
            {
                data: {
                    id: 10004,
                    name: 'Uillet',
                    email: 'teacher_nass@hot.com',
                    status: 'active',
                }
            }
        )
    );

    return response.status(201).json({ teacher });

}