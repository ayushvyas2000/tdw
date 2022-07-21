import axios from 'axios'
import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'
import { Exercise } from '../../../utils/types'
import ExerciseItem from '../../../components/ExerciseItem'
import Container from '../../../components/Container'
import { config } from '../../../utils/config'
interface IProps{
    exercises:Exercise[],
    exerciseType:String[]
}
const ExercisePage = (props:IProps) => {
    const router=useRouter()
  return (
    <Container exerciseType={props.exerciseType}>
        {props.exercises?.map((exercise,index)=>(
            <ExerciseItem key={exercise.id} {...exercise}/>
        ))

        }
    </Container>
  )
}   

export const getStaticPaths =async () =>{
    try {
        const response2=await axios.get(`${process.env.URL}bodyPartList`,config)
        const response3=await axios.get(`${process.env.URL}targetList`,config)
        const response4=await axios.get(`${process.env.URL}equipmentList`,config)
        const array1=response2.data.map((item:String)=>{
            return {
                params:{
                    slug:['bodyPart',item]
                }
            }
        })
        const array2=response3.data.map((item:String)=>{
            return {
                params:{
                    slug:['target',item]
                }
            }
        })
    
        const array3=response4.data.map((item:String)=>{
            return {
                params:{
                    slug:['equipment',item]
                }
            }
        })
    
        const paths=[...array1,...array2,...array3]
        return {
            paths:paths,
            fallback:false
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

export const getStaticProps=async(context:any)=>{
    const slug=context.params.slug;
    const link=slug.join('/')
    try {
        const res=await axios.get(`${process.env.URL}${link}`,config)
    
        return{
            props: {
                exercises:res.data,
                exerciseType:slug
            }
        }
    } catch (error) {
        console.log(error);
        
    }
}

export default ExercisePage