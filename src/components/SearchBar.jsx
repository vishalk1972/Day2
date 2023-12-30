import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
const Searchbar =()=>{
    return (
        
        <form className='relative ml-96'>
            <div className='relative'>
                <input type="search" placeholder='Search' className='w-full h-4 p-4 border border-solid border-neutral-700 bg-transparent rounded-full outline-none'/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4'> 
                <AiOutlineSearch/>
                </button>
            </div>
        </form>
      
    ) 
}

export default Searchbar;