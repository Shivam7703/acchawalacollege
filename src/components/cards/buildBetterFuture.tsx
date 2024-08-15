import { graduated } from '@/asset'
import React from 'react'
import Image from 'next/image'

function BuildBetterFuture() {

    const data = {
        title:"Build a Better Future",
        text:"At Acchewala College, we believe in nurturing talent and fostering growth. Our mission is to provide a platform where educators and professionals can thrive, innovate, and make a significant impact. By joining our team, you are not just taking a job; you are embarking on a journey of professional development, collaborative opportunities, and meaningful contributions to the academic world",
img: graduated,
        counting:[{
            text:"Student Success Rate",
            number:"96%"
        },{
            text:"alumni Network",
            number:"360K+"
        }]
    }
  return (
    <div className='pt-12 flex flex-wrap h-auto items-stretch'>
      <div className='md:w-1/2 w-full flex flex-col justify-between'>
      <div className='md:px-16 px-5 text-left'>
        <h2 className='md:text-4xl text-3xl font-bold text-blue-600'>{data.title}</h2>
        <p className='mt-6 mb-7'>{data.text}</p>
      </div>

      <div className='md:p-16 p-5 bg-blue-600 text-white flex flex-wrap gap-3 justify-between '>
{data?.counting?.map((rate :any, index:any) => (
<div key={index}>
    <h3 className='font-bold md:text-5xl text-3xl'>{rate.number}</h3>
    <p>{rate.text}</p>
</div>
))}      </div>
      </div>

      <div className='md:w-1/2 w-full'><Image src={graduated} alt='build your future image' className='w-full h-full object-cover'/></div>

    </div>
  )
}

export default BuildBetterFuture
