import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import NewsCard from '@/components/NewsIndividualPage/NewsCard'
import MainImage from "@/asset/news/card1.png";


function RecentNews() {

  const newsItems = [
    {
      id: 1,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 2,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 3,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
    {
      id: 4,
      date: "June 24, 2024 5:40 PM",
      title:
        "UN chief calls for 'dramatic shift' to transform education worldwide",
      image: MainImage,
    },
  ];



  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2 border-[#00000033] border-b '>
          <div className='xl:text-[2.625rem] lg:text-[2rem] text-lg font-bold  w-fit  pb-2'> 
            <span className='text-[#2095F2]'>Sneak</span> 
            {" "}
            <span className='text-[#012148]'>Peek</span>
          </div>
          <div className='w-fit h-fit'>
            <Link href="#" className='flex items-center space-x-3'>
              <span className='text-[#020014B2]/70 text-[0.625rem] sm:text-xs xl:text-sm'>Load More</span>
              <IoChevronForward className='h-4 w-4'/>
            </Link>
          </div>
        </div>
 
        {/* Content */}
        <div>
        <NewsCard items={newsItems} />
        </div>
      </div>
    </Wrapper>
  )
}

export default RecentNews