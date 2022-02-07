import { NextApiRequest, NextApiResponse } from "next";
import { fauna } from '../../../services/faunadb';
import { query as q } from 'faunadb';

export default async function RetrieveTeachers(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'GET') return response.status(405).end('Method not allowed');

    console.log('RetrieveTeachers');

    const teachers = await fauna.query(
        q.Map(
            q.Paginate(
                q.Documents(q.Collection('teachers'))),
            q.Lambda(x => q.Get(x))
        )
    );

    console.log(teachers);

    response.status(200).json({ teachers });

}