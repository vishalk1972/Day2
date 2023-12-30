import React from 'react'
import { ShareIcons } from '../ShareIcons'

export const LoadVideoCard = (props) => {
   const {dataItem}=props;
  return (
    <div className='px-20 flex mb-10 gap-5'>
        <div className='w-5/12'>
            <img className='h-80 rounded-xl' src={dataItem.imglink} ></img>
        </div>
        <div className='bg-purple-50 p-3 mb-1 w-6/12'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold text-purple-500'>#video</h1>
                <h1 className='text-xl font-semibold'>{dataItem.date}</h1>
            </div>
            <div className='my-3'>
                <h1 className='text-2xl font-semibold'>{dataItem.heading}</h1>
            </div>
            <div className='mb-3'>
                <h1>{dataItem.description}</h1>
            </div>
            <div>
                <ShareIcons/>
            </div>
            
        </div>
    </div>
  )
}
