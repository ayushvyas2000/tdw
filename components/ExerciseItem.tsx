import React from 'react'
import Image from 'next/image'
import { Exercise } from '../utils/types'
import { useRouter } from 'next/router'
const ExerciseItem = (props:Exercise) => {
  const router=useRouter()
  return (
    <article className='rounded-xl shadow-md shrink-0 p-4 bg-white flex flex-col items-center' key={props.id}>
          <h3 className='h-16 text-slate-500 text-sm font-semibold uppercase mb-5'>{props.name}</h3>
          <Image 
          src={props.gifUrl}
          height={200}
          width={200}
          alt={props.name}
          />
          <button onClick={()=>router.push(`/exercise/${props.id}`)} className='text-xs w-32 bg-slate-500 py-2 rounded-full text-white uppercase'>view details</button>
      </article>
  )
}

export default ExerciseItem