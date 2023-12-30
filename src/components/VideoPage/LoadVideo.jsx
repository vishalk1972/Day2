import React, { useState } from 'react'
import {data} from "./LoadData.jsx"
import { LoadVideoCard } from './LoadVideoCard.jsx'
export const LoadVideo = () => {
    const [LoadLimit,setLoadLimit]=useState(10)
    const handleLoad=()=>{
        setLoadLimit(LoadLimit+10)
    }
    let i=0;
  return (
    <div>
        {   
            data.map((dataItem)=>{
                i++
                if(i<=LoadLimit)
                {
                    return <div>
                    <LoadVideoCard dataItem={dataItem}/>
                    </div>
                }
            })
        }
        <div className='flex justify-center mb-2'>
            <button onClick={()=>handleLoad()} className='bg-purple-600 w-fit cursor-pointer text-2xl p-2 rounded-md items-center justify-center'>Load More</button>
        </div>
    </div>
    
  )
}
