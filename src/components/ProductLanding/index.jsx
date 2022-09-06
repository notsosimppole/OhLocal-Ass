import React from 'react'

const ProductLanding = (props) => {
  return (
    <div className='bg-slate-200 w-screen sm:w-[98%] rounded mx-auto text-xl flex my-5 py-2 lg:divide-x-2 divide-slate-300 divide-y-2 lg:divide-y-0 lg:flex-row flex-col'>
        <div className='flex w-full lg:w-2/3 border-slate-400 items-center mr-2'>
            <div className=''>
                <img src={props.mainProduct.main_product_svg} alt="" className='lg:w-72'/>
            </div>
            <div className='flex flex-col justify-center items-end  lg:items-start relative px-10 lg:px-20'>
                <h2 className='text-lg font-bold text-slate-700 py-4'>{props.mainProduct.product_title}</h2>
                <p className='text-gray-500'>{props.mainProduct.product_pipeline}</p>
                <div className='flex gap-2'>
                    <img src={props.mainProduct.online_price_icon} alt="" className='w-6 h-6 bg-inherit'/>
                    <p>{props.mainProduct.online_price}</p>
                </div>
                <p>Qty: {props.mainProduct.quantity}</p>
                <p className='cursor-pointer underline py-5'>All Details</p>
            </div>
        </div>
        <div className='flex flex-col justify-around'>
            <div className='flex flex-col justify-center items-center px-8'>
                <div className='flex items-end justify-center gap-4'>
                    <p className='text-slate-700 font-bold text-3xl'> Status </p>
                    <img src={props.mainProduct.status_icon} alt='' className='h-7 w-7 ' />
                </div>
                <p className='pt-4 text-lg'>Time Remaining</p>
                <p className='text-2xl font-bold text-red-400'>{props.mainProduct.time_remaining} minutes</p>
            </div>
            <div className='flex justify-center items-center gap-2 mt-4'>
                <p className='text-slate-500 border-r-2 px-2 border-slate-500 self-center'>Bids Placed</p>
                <p className='text-2xl text-green-600'>{props.mainProduct.bid_placed}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductLanding