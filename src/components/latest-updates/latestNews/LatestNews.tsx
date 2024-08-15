import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoChevronForward } from 'react-icons/io5'
import Link from 'next/link'
import Card from './Card'

function LatestNews() {
  return (
    <Wrapper>
      <div className='my-2'>

        {/* Title */}
        <div className='flex justify-between items-center py-2 px-2'>
          <div className='xl:text-[2.625rem] lg:text-[2rem] text-lg font-bold border-b-2 border-black w-fit pb-1 px-1 lg:px-3 lg:pb-3 xl:px-6 xl:pb-4'> 
            <span className='text-[#2095F2] w-fit h-fit'>Latest</span> 
            {" "}
            <span className='text-[#012148] w-fit h-fit'>News</span>
          </div>
          <div className='w-fit h-fit'>
            <Link href="#" className='flex items-center space-x-3'>
              <span className='text-[#020014B2]/70 text-[0.625rem] sm:text-xs xl:text-sm'>Load More</span>
              <IoChevronForward className='h-4 w-4'/>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className='w-full'>
            <Card/>
        </div>
      </div>
    </Wrapper>
  )
}

export default LatestNews