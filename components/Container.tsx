import React from 'react'
import BackButton from './BackButton'

const Container = ({exerciseType,children}:any) => {
  return (<>
    <BackButton />
    <h1 className='text-center m-5 uppercase text-2xl text-slate-500 font-semibold'>{exerciseType[0]} : {exerciseType[1]}</h1>
    <section className='lg:gap-10 lg:p-0 md:gap-8 p-5 max-w-screen-lg m-auto mb-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
    {children}
    </section>
    </> 
  )
}

export default Container