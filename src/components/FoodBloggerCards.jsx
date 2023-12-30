import React from 'react'

export default function FoodBloggerCards({img,likes,time,text}) {
  return (
    <div className='bg-white h-custom1 w-1/5 rounded-2xl '>
        <div className=''>
            <div className='relative  h-80 rounded-2xl overflow-hidden '>
                <img className='h-full' src={img} alt=''></img>
            </div>
            <div className='translate-y-2 translate-x-1'>
                <div className='flex  justify-between items-center '>

                    <p className='text-l text-gray-400 mt-1'>{time}</p>

                    <div className='flex text-l  text-gray-400 mt-1 items-center -translate-x-5'>
                        <div className='cursor-pointer h-3 '>
                            <img className='h-full rounded-3xl' src='data:image/png;base64,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'></img>
                        </div>
                        <h6>{likes}</h6>
                    </div>
                </div>
                <div className='mt-2 pl-1'>
                    <p className='text-l'>{text}</p>
                </div>
                <div className='bg-purple-100 w-24 mt-1 pl-2 text-l rounded-sm text-purple-600 translate-y-3 cursor-pointer'>
                    View Deal
                </div>

            </div>
        </div>
        
    </div>
  )
}
