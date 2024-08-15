import { user1 } from '@/asset'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import Image from 'next/image'

function CollegeFaculty() {
    const data={
        title:{
            t1:"IIT Madras",
            t2:"Faculty Details",
            t3:"2024"
        },
        professors:[
            {
                id:1,
                Img:user1,
                category:"professor",
                name:"Prof. Muruganandam TM",
                department:"Department Of Aerospace Engineering",
                contact: "044-22574022",
                email:"murgi@ae.iitm.ac.in",
            },
            {
                id:2,                Img:user1,

                category:"professor",
                name:"Prof. Muruganandam TM",
                department:"Department Of Aerospace Engineering",
                contact: "044-22574022",
                email:"murgi@ae.iitm.ac.in",
            },
            {
                id:3,                Img:user1,
                category:"professor",
                name:"Prof. Muruganandam TM",
                department:"Department Of Aerospace Engineering",
                contact: "044-22574022",
                email:"murgi@ae.iitm.ac.in",
            },
            {
                id:4,                Img:user1,
                category:"professor",
                name:"Prof. Muruganandam TM",
                department:"Department Of Aerospace Engineering",
                contact: "044-22574022",
                email:"murgi@ae.iitm.ac.in",
            }
        ]
    }
  return (
    <Wrapper>
         <h2 className='md:text-4xl text- 2xl font-bold '><span className='text-indigo-800'>{data?.title?.t1}</span> <span className='text-blue-900'>{data?.title?.t2}</span> <span className='text-blue-400'>{data?.title?.t3}</span></h2>

<div className='flex gap-2 justify-between flex-wrap my-10'>
    {data?.professors?.map((item:any) => (
   <div key={item.id} className='flex flex-col items-center border shadow-sm p-10 lg:w-[32%] sm:w-[49%] w-full mt-3 text-center'>
<Image src={item.Img} alt='profile pic' className='w-16 h-16 rounded-full object-cover '/>
<p className='px-5 py-1 rounded-2xl bg-zinc-300 text-zinc-700 my-5'>{item?.category}</p>
<h3 className='text-2xl font-semibold'>{item?.name}</h3>
<p className='my-2 text-zinc-700 font-medium text-lg'>{item?.department}</p>
<p className='mt-2 text-zinc-700 font-medium text-lg'>{item?.contact}</p>
<p className=' text-zinc-700 font-medium text-lg'>{item?.email}</p>
   </div>
    ))}
 
</div>
    </Wrapper>
  )
}

export default CollegeFaculty
