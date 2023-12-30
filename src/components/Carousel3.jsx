import 'react-multi-carousel/lib/styles.css';
//import Video from './Video';
import { slides } from '../data3';
import { useState } from 'react';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


  const Carousal = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className='mb-24'>
    <div className="carousel relative flex h-[400px] mx-auto justify-center items-center  ">
      <BsArrowLeftCircleFill 
      onClick={prevSlide} 
      className="absolute w-8 h-8 left-40 top-1/2 -translate-y-1/2" 
      />

      {slides.map((item, idx) => {
        return (
        <div className=" flex h-full">
        <img
          src={item.imageurl}
          alt={item.alt}
          key={idx}
          className={slide === idx ? " shadow-lg w-custom " : "hidden"}
        />
        <div className='relative '>
        <h1 className={slide === idx ? "relative text-3xl mx-4 font-bold mt-16 w-[400px] " : "hidden "}>{item.heading}</h1>
        <h3 className={slide === idx ? "absolute mx-4 text-sm mt-4 text-gray-500 " : "hidden "}>{item.hashtag}</h3>
        <h3 className={slide === idx ? "absolute right-40 -translate-y-1/2 text-sm mt-5 text-gray-500 " : "hidden "}>{item.time}</h3>
        <button className={slide === idx ? "absolute mt-16 mx-4 text-sm rounded-lg bg-purple-500 px-2 py-2 text-white " : "hidden "}>Show More</button>
        </div>
        </div>
        );
      })}

      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute  w-8 h-8 right-40 top-1/2 -translate-y-1/2"
      />
      
    </div>
    <div className="flex items-center justify-center mt-2">
    {slides.map((_, idx) => {
      return (
        <button
          key={idx}
          className={
            slide === idx ? "bg-gray-700 rounded-full h-3 w-3 mx-1" : "bg-gray-300 rounded-full h-3 w-3 mx-1"
          }
          onClick={() => setSlide(idx)}
        ></button>
      );
    })}
  </div>
  </div>
  );
};
export default Carousal;