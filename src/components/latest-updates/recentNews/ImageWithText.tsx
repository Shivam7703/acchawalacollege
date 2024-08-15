// components/SingleImageCard.jsx
import Image from 'next/image';
import React from 'react';
import img from '@/asset/news/card1.png'

const SingleImageCard = () => {
  const imageData = {
    src: img,
    alt: 'Description for image 1',
    title: 'UN chief calls for ‘dramatic shift’ to transform education worldwide',
    date: 'June 24, 2024 5:00 PM',
  };

  return (
    <div className="pt-0 p-2 mb-3">
        <div className="relative md:h-60 xl:h-96 overflow-hidden rounded-t-xl">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            className='object-cover w-full h-full'
          />
          <div className="text-center absolute bottom-0 h-fit  bg-black bg-opacity-50 text-white p-4 w-full ">
            <h1 className="text-[17.56px] leading-[21.29px] md:text-[21.82px] xl:text-[30px] font-bold">
              {imageData.title}
            </h1>
            <div className='flex items-center justify-center'><p className=" text-[8.52px] md:text-[8.73px] xl:text-[12px] mt-1">{imageData.date}</p></div>
            
          </div>
        </div>
      
    </div>
  );
};

export default SingleImageCard;