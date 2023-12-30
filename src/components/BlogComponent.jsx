import React from 'react'
import BlogCard from './BlogCard'
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
export default function BlogComponent() {
  return (
    <div className='flex gap-4 mb-10 justify-center '>
        {
            data.map(
                (dataItem)=>(
                    <BlogCard key={dataItem.id} img={dataItem.img} likes={dataItem.likes} time={dataItem.time} text={dataItem.text}/>
                )
            )
        }
    </div>
  )
}
