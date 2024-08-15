import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import Card1 from './card1'
import Card2 from './card2'
import ImagesWithTextList from './ImageWithText'
function RecentNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2'>
          <div className=' font-bold border-b-2 border-black w-fit xl:text-[2.625rem] lg:text-[2rem] text-lg pb-1 px-1 lg:px-2 lg:pb-3 xl:px-4 xl:pb-4'> 
            <span className='text-[#2095F2]'>Recent</span> 
            {" "}
            <span className='text-[#012148]'>News</span>
          </div>
          <div className='w-fit h-fit'>
            <Link href="#" className='flex items-center space-x-3'>
              <span className='text-[#020014B2]/70 text-[0.625rem] sm:text-xs xl:text-sm'>Load More</span>
              <IoChevronForward className='h-4 w-4'/>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className='sm:flex w-full xl:pt-6  h-fit space-x-1'>
          <div className=' w-full sm:w-1/3 h-fit'>
            <Card1/>
          </div>
          <div className='w-full sm:w-2/3 h-fit'>
            <div className='h-1/3 w-full'> 
              <ImagesWithTextList/>  
            </div>
            <div className='h-2/3 w-full flex'>
                <div className=''>
                  <Card2/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default RecentNews