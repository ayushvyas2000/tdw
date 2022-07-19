import React, { useState } from 'react'
import Categories from './Categories'
import {FiChevronUp,FiChevronDown} from 'react-icons/fi'
interface IProps{
    category:String,
    list:String[],
    url:String,
}
const Section = (props:IProps) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div id={`${props.category}`} className='flex flex-col items-center justify-center'>
    <button onClick={()=>setToggle(!toggle)} className='bg-white py-3 px-7 text-lg capitalize text-slate-500 flex justify-between items-center w-80 shadow-md'>
    <h3>Exercises by {props.category}</h3>
    <h3>{toggle?<FiChevronUp />:<FiChevronDown />}</h3>
    </button>
    <section className={`${!toggle && 'hidden'} max-w-6xl w-full flex flex-wrap items-center justify-center`}>
    {props.list?.map((listItem,index)=>(
      <Categories url={props.url} key={index} item={listItem}/>
    ))

    }
    </section>
    </div>
  )
}

export default Section