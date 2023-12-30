import React from 'react'
import FoodBloggerCards from './FoodBloggerCards'
const data=[
    {
        img:"https://www.pacegallery.com/media/images/16_9-2.width-2000.png",
        likes:"100",
        time:"17 hours ago",
        text:"This is the dummy text to placed under dummy images",
        id:"1"
    },
    {
        img:"https://www.ning.com/blog/wp-content/uploads/2017/04/make-money-blogging.jpg",
        likes:"100",
        time:"17 hours ago",
        text:"This is the dummy text to placed under dummy images",
        id:"2"
    },
    {
        img:"https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
        likes:"100",
        time:"17 hours ago",
        text:"This is the dummy text to placed under dummy images",
        id:"3"
    },
    {
        img:"https://cdn.wallpapersafari.com/50/54/fvOGeK.jpg",
        likes:"100",
        time:"17 hours ago",
        text:"This is the dummy text to placed under dummy images",
        id:"4"
    }
]
export default function FoodBloggerDetails() {
  return (
    <div className='h-custom my-10 bg-black p-10 relative'>
        
        <div className='flex justify-between mb-4 mx-24'>
            <h1 className='text-purple-600 ml-12 text-3xl'>FoodBlogger Deals</h1>
            <div className='bg-purple-700 h-4 w-48 gap-1 flex items-center pl-1 py-3 mr-4 rounded-sm '>
                <img className='h-5 w-5' src='https://cdn.icon-icons.com/icons2/510/PNG/512/ios7-pricetag-outline_icon-icons.com_50193.png'></img>
                <h3 className='text-white text-xl cursor-pointer p-2 rounded-sm'>View All Details</h3>
            </div>
        </div>
        <div className='flex gap-5 justify-center'>
                {
                    data.map(
                        (dataItem)=>(
                            <FoodBloggerCards key={dataItem.id} img={dataItem.img} likes={dataItem.likes} time={dataItem.time} text={dataItem.text}/>
                        )
                    )
                    
                }
        </div>
    </div>
  )
}
