
import React from 'react'

const Navbar = (props) => {
  return (
    <div className='sticky top-0 right-0 bg-slate-700 w-full h-[3em] flex justify-evenly items-center z-10'>
        <div className='flex flex-col justify-evenly items-center w-10 h-10 cursor-pointer'>
            <div className='sm:w-10 w-5 h-1 bg-white'></div>
            <div className='sm:w-10 w-5 h-1 bg-white'></div>
            <div className='sm:w-10 w-5 h-1 bg-white'></div>
        </div>
        <div className='w-full sm:w-1/2 mx-2 sm:mx-0'>
            <div className='w-full flex rounded shadow-md'>
                <input className='text-black text-xl py-1 pl-2 w-full' type='text'
                placeholder='Search'
                />
                <div>
                    <button className='bg-orange-400 text-white text-xl py-1 px-2'>Search</button>
                </div>
            </div>
        </div>
        <div className='flex justify-between w-max'>
            <div className='text-white cursor-pointer hidden sm:block'>
                <p>Live Bids</p>
            </div>
            <div className='text-white cursor-pointer'>
                <img src={props.imgUrl} alt = '' className='w-6 h-6 rounded mx-5'/>
            </div>
            <div className='text-white cursor-pointer hidden sm:block'>
                <p>Help & Support</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar