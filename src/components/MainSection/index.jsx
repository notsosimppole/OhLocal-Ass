import React from 'react'

const MainSection = (props) => {
  return (
    <div className="flex flex-col justify-center items-center px-20 relative ">
        <h1 className="text-5xl font-bold text-center text-slate-700 py-4">{props.heading.heading}</h1>
        <p className="text-xl text-center">{props.heading.sub_heading}</p>
        <div className='absolute left-0'>
            <img src={props.heading.svg} alt="" className="w-24 h-24"/>
        </div>
    </div>
  )
}

export default MainSection