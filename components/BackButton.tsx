import React from 'react'
import { useRouter } from 'next/router'
const BackButton = () => {
    const router=useRouter()
  return (
    <div className='flex justify-center m-5'>
        <button onClick={()=>router.back()} className='text-lg bg-slate-500 text-white px-4 py-2 rounded-full'>Go Back</button>
    </div>
  )
}

export default BackButton