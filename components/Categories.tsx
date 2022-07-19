import { useRouter } from 'next/router'

import React from 'react'
interface IProps{
    item:String,
    url:String
}
const Categories = (props:IProps) => {
  const router=useRouter()
  return (
    <button onClick={()=>router.push(`/exercise/category/${props.url}/${props.item}`)} className='hover:bg-slate-900 hover:text-slate-300 duration-1000 flex items-center justify-center w-32 h-32 bg-white m-5 shadow-md'>
        <h3 className='w-fullfont-medium uppercase text-slate-500 text-sm'>{`${props.item}` }</h3>
    </button>
  )
}

export default Categories