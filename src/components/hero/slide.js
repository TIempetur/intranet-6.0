"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Slide() {
  const slides = [
    { 
      
      url:  'http://192.168.9.16/midia-intranet/informatica/slideshow/slide1.jpg',
    },
    {
      url: 'http://192.168.9.16/midia-intranet/informatica/slideshow/slide2.jpg',
    },
    {
      url: 'http://192.168.9.16/midia-intranet/informatica/slideshow/slide3.jpg',
    },
    {
      url: 'http://192.168.9.16/midia-intranet/informatica/slideshow/slide4.jpg',
    },
    {
      url: 'http://192.168.9.16/midia-intranet/informatica/slideshow/slide5.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Configura um intervalo para avançar automaticamente os slides a cada 3 segundos (3000 milissegundos)
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='max-w-[1220px] h-[480px] 2xl:h-[490px] xl:h-[340px] w-full  m-auto py-5 px-4 xl:px-0 2xl:px-0 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full shadow-lg shadow-stone-800/50 px-4 rounded-2xl bg-center bg-cover  object-cover  bg-no-repeat duration-300'
      ></div>
      {/* Left Arrow */}
      <div className='hidden  group-hover:block absolute top-[50%] -translate-x-1 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl text-blue-50 cursor-pointer '
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
