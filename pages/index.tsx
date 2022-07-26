import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ExerciseItem from '../components/ExerciseItem'
import {Exercise} from '../utils/types'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Section from '../components/Section'
import { config } from '../utils/config'
interface IProps{
  bodyParts:String[],
  targetMuscles:String[],
  equipments:String[]
}

const Home: NextPage<IProps> = (props) => {
  return (
    <>
    <Header />
    <main id='start' className='mb-32 flex flex-col items-center justify-center space-y-10' >

    <Section url='bodyPart' category='body-part' list={props.bodyParts}/>
    <Section url='target' category='target-muscle' list={props.targetMuscles} />
    <Section url='equipment' category='equipment' list={props.equipments} />
    </main>
    </>
  )
}

export async function getStaticProps() {
  try {
    const response2=await axios.get(`${process.env.URL}bodyPartList`,config)
    const response3=await axios.get(`${process.env.URL}targetList`,config)
    const response4=await axios.get(`${process.env.URL}equipmentList`,config)
    return {
      props: {
        bodyParts:response2.data,
        targetMuscles:response3.data,
        equipments:response4.data
      }, // will be passed to the page component as props
    }
    
  } catch (error) {
    console.log(error);
    
  }
}

export default Home
