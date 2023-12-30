import { useState } from "react";
import { Container } from "react-bootstrap";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 140}%)`,
        }}
      >
        {slides.map((s) => {
        //   return <img src={s}></img>
        //   return <div className="">
        //      <iframe className="w-custom h-custom p-10" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" ></iframe>
        // </div>
            return <Container>
                <div className="ratio ratio-16x9">
                    <iframe className="w-custom h-custom p-10" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" ></iframe>
                 </div>
            </Container>
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}