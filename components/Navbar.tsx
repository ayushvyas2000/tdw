import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className='md:px-10 lg:px-16 xl:px-56 w-full z-20 p-5 bg-slate-800 bg-opacity-70 text-white flex justify-between items-center'>
            <Link href='/'><h1 className='mr-20  inline cursor-pointer text-xl font-black'>TDW</h1></Link>
        {/* <nav className='w-full flex justify-between sm:w-2/3 md:w-1/2'>
        {['body-part','target-muscle','equipment'].map((item,index)=>(
            <Link  key={index} href={`/#${item}`}>
                <p className='duration-500 bg-slate-300 hover:bg-slate-50 rounded-full hover:text-slate-900 text-slate-800 uppercase py-1 px-2 text-sm'>{item}</p>
            </Link>
        ))
        }
        </nav> */}
    </header>
  )
}

export default Navbar