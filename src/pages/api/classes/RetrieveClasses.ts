import { NextApiRequest, NextApiResponse } from 'next';
import { fauna } from '../../../services/faunadb';
import { query as q } from 'faunadb';

export default async function RetrieveClasses(request: NextApiRequest, response: NextApiResponse) {
    if (request.method !== 'GET') return response.status(405).end('Method not allowed');

    console.log('RetrieveClasses');

    // const result = await fauna.query(
    //     q.Get(
    //         q.Match(
    //             q.Index('class_by_id'),
    //                 // "2022-A2TUE20A"
    //         )
    //     )
    // )

    const classes = await fauna.query(
    q.Map(
        q.Paginate(
            q.Documents(q.Collection('classes'))),
            q.Lambda(x => q.Select('data',q.Get(x)))
            // q.Lambda(x => q.Get(x))
        )
    )

    // console.log(classes);


    return response.status(200).json({ classes });
}