import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Video from './Video';
import { videodata } from '../data';

const Carous=()=> {
    const responsive = {
    superLargeDesktop:{
        breakpoint: {max:4000,min:1024},
        items:4,
    },
    tablet:{
        breakpoint:{max:1024,min:800},
        items:3,
    },
    mobile:{
        breakpoint:{max:800,min:0},
        items:1,
    }
    }

    const vidimage=videodata.map((item)=>(
    <Video 
    url={item.imageurl}
    heading={item.heading}
    />
    ));

    return(
        <div className='flex mx-32 items-center justify-center'>
                <div className='w-1/4 pt-14'>
                    <img src="https://curlytales.com/wp-content/themes/curlytales-oct-23/images/category-logo/originals.png" alt="" />
                    <button className='ml-40 py-2 px-3 border border-purple-700 bg-purple-100 text-purple-700 font-semibold rounded-lg'>View Originals</button>
                </div>
                <div className='w-3/4'>
                    <Carousel responsive={responsive}>
                        {vidimage}
                    </Carousel>
                </div>
        </div>
    );
}

export default Carous;