import axios from 'axios'
import React from 'react'
import { Exercise } from '../../utils/types'
import Image from 'next/image'
import BackButton from '../../components/BackButton'
import {BsYoutube} from 'react-icons/bs'
const ExercisePage = (props:Exercise) => {
    const searchString=props.name
    const array=searchString.split(' ')
    const newSearchString=array.join('+')
  return (

    <article className='w-full flex flex-col space-y-7 justify-center items-center mb-14'>
    <BackButton />
    <div className='flex flex-col items-center justify-center p-5 rounded-xl bg-white space-y-2 shadow-xl'>
        <h2 className='uppercase text-slate-500 font-bold text-2xl'>{props.name}</h2>
        <Image src={props.gifUrl} width={300} height={300} alt={props.name}/>
        <h3 className='font-semibold text-slate-500 text-2xl capitalize'>Body Part Involved: {props.bodyPart}</h3>
        <h3 className='font-semibold text-slate-500 text-2xl capitalize'>Target: {props.target}</h3>
        <h4 className='text-lg text-slate-500'>Equipment needed: {props.equipment}</h4>
        <a rel="noopener noreferrer" target='_blank' href={`https://www.youtube.com/results?search_query=${newSearchString}`}>
        <div className='uppercase space-x-4 flex justify-center items-center bg-red-600 text-white px-5 py-2 text-lg'>
        <h3>Watch on youtube</h3>
        <BsYoutube className='text-4xl'/>
        </div>
        </a>
    </div>
    </article>
  )
}   

export const getStaticPaths =async () =>{
    try {
        const res=await axios.get(`${process.env.URL}`)
        const paths=res.data.map((exercise:Exercise)=>{
            return {
                params: {id:exercise.id.toString()}
            }
        })  
        return {
            paths:paths,    
            fallback:false
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getStaticProps=async(context:any)=>{
    const id=context.params.id;
    try {
        const res =await axios.get(`${process.env.URL}api/exercises/${id}`)
        return{
            props: res.data
        }
    } catch (error) {
        console.log(error);
        
    }
}

export default ExercisePage