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
    const params:any=req.query.params
    const newParams=params?.join('/')
    
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/${newParams}`,
      headers: {
        'X-RapidAPI-Key': `${process.env.API_KEY}`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    try {
      const response=await axios.request(options)
      const array=response.data.slice(0,100)
      res.status(200).json(array)
    } catch (error) {
      console.log(error);
      
    }
  }
}
