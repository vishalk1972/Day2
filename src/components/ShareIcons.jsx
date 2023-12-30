import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ShareIcons = () => {
  return (
    <div className='rounded-xl flex bg-purple-50 shadow-sm items-center p-2 w-fit'>
        <div className='mr-2'>
            <h1 className='text-xl'>Share</h1>
        </div>
        <div className='flex gap-2'>
            <FaFacebook className='text-xl'/>
            <FaTwitter className='text-xl'/>
            <FaWhatsapp className='text-xl'/>
            <FaPinterest className='text-xl'/>
            <IoMdMail className='text-xl'/>
        </div>
    </div>
  )
}
