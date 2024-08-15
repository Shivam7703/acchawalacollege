import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { FaScaleUnbalanced } from 'react-icons/fa6';
import { HiUserGroup } from 'react-icons/hi2';
import { GiGraduateCap } from "react-icons/gi";
import { MdStickyNote2 } from 'react-icons/md';
import { PiStarFourBold } from 'react-icons/pi';
import Wrapper from '../Wrapper';

// Function to group items according to the specified row patterns
const getRows = (items :any) => {
  const rows :any[]= [];
  let index = 0;
  const rowPatterns = [2, 3, 2, 3]; // Define the pattern for each row

  rowPatterns.forEach((pattern) => {
    rows.push(items.slice(index, index + pattern));
    index += pattern;
  });

  return rows;
};

// Sample data
const offerings ={ 
    title:{
t1:"Explore Our Academic" , t2:"Offerings Chart Your" , t3:"Path to Success", 
    },
    description:"Experience the Benefits of Being Part of Our Dynamic Team",
    cards:[
  {id:0, icon: <MdStickyNote2 /> , title: 'Professional Growth', description: 'Unlock your potential with continuous learning and development opportunities tailored to your career goals.' },
  {id:1,  icon: <HiUserGroup />, title: 'Collaborative Culture', description: 'Thrive in a supportive and inclusive environment where teamwork and innovation are encouraged.' },
  {id:2,  icon: <FaTrophy />, title: 'Competitive Compensation', description: 'Enjoy a comprehensive benefits package and competitive salaries that reward your hard work and dedication.' },
  {id:3,   icon: <FaScaleUnbalanced />, title: 'Work-Life Balance', description: 'Maintain a healthy work-life balance with flexible working hours and remote work options.' },
  {id:4,   icon: <PiStarFourBold />, title: 'Cutting-Edge Projects', description: 'Engage in exciting and challenging projects that push the boundaries of technology and creativity.' },
  {id:5,  icon: <GiGraduateCap />, title: 'Employee Recognition', description: 'Be valued and appreciated for your contributions with regular recognition programs and rewards.' },
]};

const rows = getRows(offerings?.cards);

const OfferingsDisplay = () => {
  return (
    <Wrapper>
        <h2 className='md:text-4xl text- 2xl font-bold '><span className='text-indigo-800'>{offerings?.title?.t1}</span> <span className='text-blue-900'>{offerings?.title?.t2}</span> <span className='text-blue-400'>{offerings?.title?.t3}</span></h2>
   <p className='text-lg my-3'>{offerings?.description}</p>
    <div className="flex flex-col space-y-4 py-6">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-3 justify-center flex-wrap">
          {row.map((offering :any) => (
           <div
           key={offering.id}
           className={`${
            offering.id === 0 || offering.id % 3 === 0
               ? 'bg-blue-900'
               : offering.id === 1 || (offering.id - 1) % 3 === 0
               ? 'bg-blue-700'
               : offering.id === 2 || (offering.id - 2) % 3 === 0
               ? 'bg-blue-500'
               : 'bg-blue-300' // Default background color if none of the conditions match
           } p-4 rounded-2xl text-white flex items-center gap-3 justify-center sm:w-[43%] md:w-[29%]`}
         >
              <div className={`text-white p-2  text-4xl`}>
               {offering.icon} 
              </div>
              <div>
              <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
              <p className="text-base">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div></Wrapper>
  );
};

export default OfferingsDisplay;
