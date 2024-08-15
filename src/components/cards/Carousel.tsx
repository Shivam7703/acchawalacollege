"use client";
import { useState, useEffect, useRef } from "react";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: any) => {
  const [curr, setCurr] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideIntervalRef = useRef<any>(null);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide || isPaused) return;

    slideIntervalRef.current = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideIntervalRef.current);
  }, [autoSlide, autoSlideInterval, isPaused]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides?.map((slide: any, index: number) => (
            <div key={index} className="slide min-w-full">
              {slide?.title && (
                <p className="mb-4 text-xl font-medium">{slide?.title}</p>
              )}
              {slide?.text && (
                <p
                  className="h-24 custom-scrollbar w-full overflow-y-scroll text-justify text-sm"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {slide?.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Navigation  */}
        {/* <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
          >
            <IoIosArrowForward />
          </button>
        </div> */}
      </div>
      {/* Pagination  */}
      <div className="absolute -bottom-7 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              onClick={() => {
                setCurr(i);
              }}
              key={i}
              className={`h-2 cursor-pointer rounded-full bg-blue-500 transition-all ${
                curr === i ? "w-5 p-0.5" : "w-2 bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
