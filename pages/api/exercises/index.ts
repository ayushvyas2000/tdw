// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import {Exercise} from '../../../utils/types'


type Data = {
  data: Exercise[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method==='GET') {
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    const response=await axios.request(options)
    
    res.status(200).json(response.data)
  }
}
