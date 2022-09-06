import React from 'react'

const Bids = ({bids}) => {
    const bidElems = bids.map((bid,i) => {
        return (
            <div className='px-5 flex flex-col justify-between' key={i}>
                <div className='flex justify-around py-2'>
                    <div className='flex justify-between items-center w-full sm:w-2/3'>
                        <div className='flex flex-col'>
                            <p className='text-xl'>
                                {bid.shop_address}
                            </p>
                            <p className='text-2xl text-orange-400 px-5 font-bold'>
                                Rs. {bid.offer_price}
                            </p>
                            <div>
                                <p className='text-sm'>Delivery & Services</p>
                                <div className='flex justify-start items-center pl-2'>
                                    <img alt = '' src = {bid.express_delivery_icon} className='h-5 w-5' />
                                    <div className='flex flex-col text-slate-400 pl-1'>
                                        <p>Express Delivery</p>
                                        <p className='text-xs '>(Delivery within 1 hour)</p>
                                    </div>
                                    <img src={bid.express_delivery ?  bid.check_icon : bid.cross_icon} alt='' className='h-5 w-5 pl-2' />
                                </div>
                                <div className='flex justify-start items-center pl-2'>
                                    <img alt = '' src = {bid.return_option_icon} className='h-5 w-5' />
                                        <p className='text-slate-400 pl-1'>Return Option</p>
                                    <img src={bid.return_option ? bid.check_icon : bid.cross_icon} alt='' className='h-5 w-5 pl-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center items-center flex-wrap mr-0 md:mr-10 lg:mr-0'>
                            <img src = {bid.shop_image} alt = '' className='lg:h-20 lg:w-20 h-20 w-20 md:h-40 md:w-40 rounded-full' />
                            <p className='text-md'>{bid.shop_name}</p>
                        </div>
                    </div>
                </div>
                <div className='my-2'>
                    <button className='bg-blue-600 text-white py-2 px-1 rounded-b ml-2 mb-2'>
                        <img src = {bid.extra_offer_icon} alt = '' className='h-5 w-5 inline-block' />
                        Extra Offer
                    </button>
                    <p className='text-slate-400'>
                        {bid.product_name}
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-orange-400 px-2 text-white py-2 rounded-lg'>
                        Buy Now
                    </button>
                </div>
                <div className='my-5 md:mt-0'>
                    <p>Alternate Product</p>
                    <div className='bg-slate-200 flex gap-2 rounded px-2 py-4 '>
                        <img src = {bid.shop_image} alt = '' className='h-20 w-20' />
                        <div className='flex flex-col'>
                            <p className='text-md'>{bid.alternate_product_details.product_name}</p>
                            <div className='flex items-center'>
                                <img src={bid.alternate_product_details.online_price_icon} alt='' className='h-5 w-5' />
                                <p className='line-through'>Rs. {bid.alternate_product_details.online_price}</p>
                                <p className='text-orange-400 font-bold text-xl pl-2'>Rs. {bid.alternate_product_details.offer_price}</p>
                                <button className='bg-orange-400 px-2 ml-auto text-white py-2 rounded-lg'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full divide-y-2 lg:divide-y-0 lg:divide-x-2'>
        {bidElems}
    </div>
  )
}

export default Bids