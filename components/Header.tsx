import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <section className=' h-screen md:flex md:justify-center md:items-center'>
      <div className= 'h-full md:bg-slate-900 flex flex-col justify-center items-center md:flex-row md:h-3/4 md:rounded-3xl' >
      <div className='absolute h-full items-center justify-center z-10 p-10 flex flex-col space-y-2 md:static'>
        <h1 className='capitalize text-slate-200 text-4xl font-bold'>The Dynamic workouts</h1>
        <p className='text-sm text-slate-300 italic'>An all in one workouts website for fitness freaks</p>
        <a className=' duration-500 hover:bg-slate-800 hover:text-slate-100 w-24 bg-slate-700 text-slate-300 uppercase rounded-full px-4 py-2' href="#start">explore</a>
      </div>
      <div className='md:w-96 h-full md:relative -z-10 md:z-0'> 
        <Image className='md:rounded-3xl  absolute w-full h-full object-cover' src='/images/workout.jpg' alt='hero' layout='fill' />
      </div>
      </div>
    </section>
  )
}

export default Header