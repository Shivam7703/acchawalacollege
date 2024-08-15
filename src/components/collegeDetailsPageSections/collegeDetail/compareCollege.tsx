import { user1 } from '@/asset'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'

const data = {
    title:{
        t1:"Compare",
        t2:"College with",
        t3:"IIT Madras"
    },
    college:[{
        id:1,
        img:user1,
        name:"IIT Madras - Indian Institute of Technology ",
        text:"B.Tech. in Computer Science and Engineering",
        rating:{
           
        }
    }]
}

function CompareCollege() {
  return (
    <Wrapper className="py-8">
            <h2 className='md:text-4xl text- 2xl font-bold '><span className='text-indigo-800'>{data?.title?.t1}</span> <span className='text-blue-900'>{data?.title?.t2}</span> <span className='text-blue-400'>{data?.title?.t3}</span></h2>

            <div className='flex items-center  my-12'>
              {data?.college?.map((col:any) => (
                <div className='flex items-center'>
<Image src={col.img} alt='college image' className='w-12 h-12 rounded-full object-cover m-4'/>
<div className='mx-3 text-center'><h3 className='text-2xl font-bold'>{col.name}</h3>
<p>{col.text}</p></div>
                </div>
              ))}

              <h4 className='text-center p-2 text-2xl rounded-full bg-blue-950 text-white w-12 h-12  m-4'> VS </h4>

              <div className='p-20 border-dashed border border-blue-500'>
              <FaPlus />
              </div>
            </div>
      
    </Wrapper>
  )
}

export default CompareCollege
